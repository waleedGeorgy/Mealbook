import fs from "fs";
import Database from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = new Database("meals.db");

export async function getMeals() {
  // A code snippet to delay data fetching by 2 seconds, to test out loading.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // To simulate an error while connecting to the database we throw a new error (to test out error pages)
  // throw new Error("Failed to connect to the database.");
  return db.prepare("SELECT * FROM meals ORDER BY id DESC").all();
}

export function getSingleMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function insertMeal(meal) {
  /* Our database requires a slug for each submitted meal, hence we leverage the `slugify` middleware to create a slug
  for each meal using its title. */
  meal.slug = slugify(meal.title, { lower: true });

  /* Since we're outputting the instructions as inner html (dangerouslySetInnerHTML), we are vulnerable to
  cross site scripting attacks. The `xss` library helps us with removing any harmful scripts that may be injected. */
  meal.instructions = xss(meal.instructions);

  /* Inserting images into databases is not advised, for performance reasons, because DBs are simply not built for that.
  Instead, images should be saved of the file system. We achieve that by creating a data stream for where the image
  will be stored (public folder for example), and add the stream to the database. */
  /* When working with deployment severs we should not safe images, or any other type of files, on the filesystem,
  simply because NextJS doesn't see the public folder when compiling the app.
  Instead, it's recommended that we store the files using some cloud file storage - like AWS S3. */
  const extension = meal.image.name.split(".").pop();
  const randomEnding = String(Math.random()).split(".")[1].substring(0, 5);
  const fileName = `${meal.slug}-${randomEnding}.${extension}`;

  // Creating the write stream for where the images will be saved
  const fileStream = fs.createWriteStream(`public/images/${fileName}`);

  // Creating a buffered image to pass it as an argument for the `.write()` function that only accepts `chunks` of data
  const bufferedImage = await meal.image.arrayBuffer();

  /* Writing the data stream into the file system using `.write()` function.
  This function accepts a buffer (hence why we converted a buffered image array into a buffer), and a callback for
  error handling. */
  fileStream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Error writing image...");
    }
  });

  /* Now that we have our stream ready, we should replace the raw image in the meal object with the of the directory
  where we want to save said image. */
  meal.image = `/images/${fileName}`;

  // Now to insert the data into the database
  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, slug, image)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @slug,
      @image
      )
    `
  ).run(meal);
}
