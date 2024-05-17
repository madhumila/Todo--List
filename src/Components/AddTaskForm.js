import React, { useState } from "react";
import "../Styles/AddTaskForm.css";

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (error && e.target.value.trim()) {
      setError("");
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    if (error && e.target.value.trim()) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please fill out both title and description.");
      return;
    }
    setError("");
    onAddTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-task-form">
      {error && (
        <p className="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
