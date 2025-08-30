import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { createTask } from "../api/tasks";
import type {TaskCreate} from "../types/task";

interface Props {
    onTaskCreated: () => void;
}

const TaskForm: React.FC<Props> = ({ onTaskCreated }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const task: TaskCreate = { title, description };
        await createTask(task);
        setTitle("");
        setDescription("");
        onTaskCreated();
    };

    return (
        <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-4">
                <InputText value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            </div>
            <div className="p-field p-col-12 p-md-6">
                <InputText value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            </div>
            <div className="p-field p-col-12 p-md-2">
                <Button label="Add Task" icon="pi pi-plus" type="submit" />
            </div>
        </form>
    );
};

export default TaskForm;
