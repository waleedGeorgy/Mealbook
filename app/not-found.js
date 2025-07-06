import { BsEmojiFrown } from "react-icons/bs";

/* Yet another type of reserved files is `not-found.js` which works exactly like `error.js` but is responsible for
invalid URLs. */
export default function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <span>
        <BsEmojiFrown size={100} />
      </span>
      <h1>Page Not Found!</h1>
      <p>Could not find the requested page or resource.</p>
    </div>
  );
}
