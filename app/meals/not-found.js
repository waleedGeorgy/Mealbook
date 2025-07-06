import { BsEmojiFrown } from "react-icons/bs";
/* Yet another type of reserved files is `not-found.js` which works exactly like `error.js` but is responsible for
"page not found" errors. */
export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <span>
        <BsEmojiFrown size={100} />
      </span>
      <h1>Meal Not Found!</h1>
      <p>Could not find the requested meal.</p>
    </div>
  );
}
