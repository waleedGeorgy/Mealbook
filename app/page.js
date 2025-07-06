import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/slideshow/ImageSlideshow";
import Footer from "@/components/footer/Footer";

/*
NextJS uses SSR and USR in conjunction. It compiles and renders the app on the server, and sends it to the
client browser. Then on the client side it allows to update the interface using USR, which eliminates the need to
rerender and resend the entire app from the server, and keeps the app as a SPA. This helps with:
1- Faster navigation between pages, since the entire app is already pre-rendered on the server.
2- Improving SEO, since all the data related to the website is on a server that can be crawled by web crawlers.
===========================
Each route (folder) in a NextJS app should have a `page.js` file, which is a reserved name that helps Next distinguish
said files as pages to be rendered.
*/
export default function Home() {
  return (
    <main className={classes.homePage}>
      <div className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div className={classes.homePageTextArea}>
          <div className={classes.hero}>
            <h1>Write Down Your Favorite Recipes In Mealbook</h1>
            <p>Share your best meals for the world to see.</p>
          </div>
          <div className={classes.cta}>
            {/* In order to navigate to other pages, we use the <Link> tag provided by Next.
            It allows a USR of components and pages, unlike, for example, the <a> tag.
            This way the website is not rerendered on the the server and resent to the client,
            and just like in React, only the needed parts of the interface are updated */}
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </div>
      <div className={classes.textSectionsDiv}>
        <section className={classes.section}>
          <h2>Why Mealbook?</h2>
          <p>
            Mealbook is a place to discover new dishes, connect with other food
            lovers, and tell everyone what you like!
          </p>
        </section>
        <section className={classes.section}>
          <h2>How does it work?</h2>
          <p>
            Mealbook is a platform to share your favorite recipes with the
            world. You publish meals you&apos;ve cooked or tried, and the
            community gets to rate them, and react to them.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
