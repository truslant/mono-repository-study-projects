import { useActionState, useContext } from "react";
import { isNotEmpty, isLongEnough } from "../utils/validations";

import { OpinionsContext } from "../store/opinions-context";

import Submit from "./Submit";

const initialState = {}

export function NewOpinion() {

  const { opinions, addOpinion, upvoteOpinion, downvoteOpinion, } = useContext(OpinionsContext)

  const handleFormSubmit = async (prevFormState, formData) => {
    const data = Object.fromEntries(formData.entries());
    const error = []

    Object.keys(data).forEach(key => {
      if (!isNotEmpty(data[key])) {
        error.push(`${key} cannot be empty`)
      }
      if (key === 'body' && !isLongEnough(data[key], 10)) {
        error.push(`Your opinion is too short`)
      }
    })

    if (error.length > 0) {
      return {
        error,
        values: data
      }
    } else {


      await addOpinion({
        title: data.title,
        body: data.body,
        userName: data.userName
      })


      return {
        error: null
      }
    }
  }

  const [formState, formAction, isPending] = useActionState(handleFormSubmit, initialState)

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.values?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.values?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.values?.body}
          ></textarea>
        </p>

        <Submit />

        <ul>
          {formState.error && formState.error.map(error => (
            <ul className="errors">
              <li key={error}>{error}</li>
            </ul>
          )
          )}
        </ul>
      </form>
    </div>
  );
}
