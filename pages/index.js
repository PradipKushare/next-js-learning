import { useRef } from "react";
import { submitFeedbackPost } from "../helpers/api-utils";

const HomePage = () => {
  const emailInputRef = useRef("");
  const feedbackInputRef = useRef("");

  const submitFeedback = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    await submitFeedbackPost(email, feedback)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={submitFeedback}>
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className="col-md-6">
            <label htmlFor="feedback">your Feedback</label>
            <textarea rows={5} id="feedback" ref={feedbackInputRef}></textarea>
          </div>
          <button type="submit">Send Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
