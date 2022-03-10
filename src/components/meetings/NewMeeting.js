import { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./NewMeeting.module.css";

const NewMeeting = () => {
  const history = useHistory();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();

  const addMeetingHandler = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const meetingData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      address: enteredAddress,
    };

    fetch(
      "https://react-todo-12e28-default-rtdb.firebaseio.com/meetings.json",
      {
        method: "post",
        body: JSON.stringify(meetingData),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    history.push("/");
  };

  return (
    <form className={classes.form} onSubmit={addMeetingHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="url">Url</label>
        <input type="url" id="url" ref={imageInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="2"
          cols="50"
          ref={descriptionInputRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Add Meeting</button>
      </div>
    </form>
  );
};

export default NewMeeting;
