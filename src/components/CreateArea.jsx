import React, { useState } from "react";

function CreateArea(props) {
  const [create, setCreate] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCreate((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(create);
    setCreate({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input
          onChange={handleChange}
          name="title"
          value={create.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={create.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
