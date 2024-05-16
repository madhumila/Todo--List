import React, { useState } from 'react';
import "../Styles/AddTaskForm.css"

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        onAddTask({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="add-task-form">
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;
