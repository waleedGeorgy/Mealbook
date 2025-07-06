"use client";

import { useFormStatus } from "react-dom";

const MealSubmitButton = () => {
  /* React offers a hook that allows us to check the status of a form (posting, pending, etc...).
    Using this hook we can improve the UX by outputting a different text when the form is being submitted. */
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealSubmitButton;
