import Link from "next/link";
import styles from "./page.module.css";
import MealGrid from "@/components/meals/MealGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

// We can normally define metadata for static pages by defining and exporting a `metadata` object
export const metadata = {
  title: "Mealbook Meals",
  description: "Browse all the meals shared by the community",
};

/* In NextJS we can define async components (since Next deals with React Server Components), in case we need said
component to connect to a backend and fetch data. */
async function Meals() {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <div className={styles.header}>
        <h2>Browsing Meals</h2>
        <Link href="/meals/share">Share Meal</Link>
      </div>
      <div className={styles.meals}>
        {/* NextJS offers a special component to show loading states and fallback content, which is <Suspense>.
        This provides a granular control over where the loading should be displayed inside a page. */}
        <Suspense
          fallback={<p className={styles.loadingText}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
        {/*
          A different way of handling loading states would be the usage of another reserved file 'loading.js' which
          displays its contents as a page is loading. A `loading.js` is applied to the directory it's located in, as well
          as its sub-directories. This is not the best way of handling loading states, as it doesn't offer granular
          control over where, and for what components, the loading should occur.
        */}
      </div>
    </>
  );
}
