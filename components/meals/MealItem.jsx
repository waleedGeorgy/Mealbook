import Image from "next/image";
import classes from "./mealItem.module.css";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

const MealItem = ({ title, image, slug, creator, summary }) => {
  return (
    <article className={classes.mealCard}>
      <div className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p><FaUser size={13} /><span>{creator}</span></p>
        </div>
      </div>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>Details</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
