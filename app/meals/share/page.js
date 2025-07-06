"use client";

import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import ImagePicker from "@/components/image-picker/ImagePicker";
import MealSubmitButton from "@/components/meals/MealSubmitButton";
import { useActionState } from "react";

export default function MealSharePage() {
  /* The hook that will handle form actions and responses is called `useActionState()`.
  This hook ties a user action (like submitting a form) to a state.
  It accepts the server action that handles data submitting and the initial state of the response (here we made 
  the initial state structurally similar to the response we're expecting from the server action).
  It returns exactly 2 values, the first one is the current state, the second one is the form action that will
  connect the action to the state. */
  const [formState, formAction] = useActionState(shareMeal, { message: null });
  return (
    <>
      <h1 className={classes.mainText}>
        Share a <span className={classes.highlight}>MEAL</span>
      </h1>
      <div className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required autoFocus />
            </p>
            <p>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">How To Cook</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="8"
              required
            ></textarea>
          </p>
          <ImagePicker name="image" />
          {formState.message && <p className={classes.errorMessage}>{formState.message}</p>}
          <p className={classes.actions}>
            <MealSubmitButton />
          </p>
        </form>
      </div>
    </>
  );
}
