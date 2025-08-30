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
        <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid gap-4">
            {/* Título */}
            <div className="p-field p-col-12 p-md-4 p-mb-3">
                <InputText
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Título"
                    required
                    className="w-full"
                />
            </div>

            {/* Descripción */}
            <div className="p-field p-col-12 p-md-4 p-mb-3">
                <InputText
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripción"
                    className="w-full"
                />
            </div>

            {/* Botón */}
            <div className="p-field p-col-12 p-md-2 flex items-center">
                <Button
                    label="Agregar tarea"
                    icon="pi pi-plus"
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2"
                />
            </div>
        </form>
    );
};

export default TaskForm;
