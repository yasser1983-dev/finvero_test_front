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
            {/* Inputs agrupados */}
            <div className="flex flex-wrap w-full gap-4">
                <div className="p-field flex-1 min-w-[200px]">
                    <InputText
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título"
                        required
                        className="w-full"
                    />
                </div>

                <div className="p-field flex-1 min-w-[200px]">
                    <InputText
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descripción"
                        className="w-full"
                    />
                </div>

                <div className="p-field min-w-[150px] flex items-center">
                    <Button
                        label="Agregar tarea"
                        icon="pi pi-plus"
                        type="submit"
                    />
                </div>
            </div>
        </form>
    );
};

export default TaskForm;
