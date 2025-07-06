"use client";
import { BsEmojiFrown } from "react-icons/bs";
/* Yet another reserved file name in NextJS is `error.js` which shows an error fallback page in case an error occurs.
This `error` page is applied to the directory where its located and each of its sub-directories. */
export default function ErrorPage() {
  return (
    <div className="errorPage">
      <span>
        <BsEmojiFrown size={100} />
      </span>
      <h1>An Error Occurred</h1>
      <p>Failed to fetch data. Please try again later.</p>
    </div>
  );
}
