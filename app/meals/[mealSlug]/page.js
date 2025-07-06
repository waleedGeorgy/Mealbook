/*
We can create dynamic routes by placing them inside a folder named with a special syntax.
The syntax consists of 2 square brackets, with the name of the path parameter between them.
This acts as a placeholder for the path segment.
The contents of the path parameters are in the `params` property, that can be extracted from `props`.
*/
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaUser } from "react-icons/fa6";
import styles from "./page.module.css";
import { getSingleMeal } from "@/lib/meals";

// To generate metadata for dynamic page, we export an async function `generateMetadata()` that accepts `params` as input
export async function generateMetadata({ params }) {
  const { mealSlug } = await params;
  const meal = getSingleMeal(mealSlug);

  return {
    title: `Mealbook - ${meal.title}`,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
  // Dynamic APIs (like params in this instant) are asynchronous, hence we should await them inside the async function.
  const { mealSlug } = await params;
  const meal = getSingleMeal(mealSlug);

  /*If a user enters a non-existent url in a dynamic route, we can redirect them to the closest `not-found.js` page
  using the `notFound()` functions provided by NextJS. */
  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{meal.title}</h2>
          <a href={`mailto:${meal.creator_email}`}>
            <span>
              <FaUser size={14} />
            </span>
            {meal.creator}
          </a>
          <p>{meal.summary}</p>
        </div>
        <div className={styles.contents}>
          <h2>How To Prepare</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: meal.instructions,
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
