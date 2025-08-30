import React from "react";
import type {Task} from "../types/task";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { updateTaskStatus, deleteTask } from "../api/tasks";

interface Props {
    tasks: Task[];
    onUpdate: () => void;
}

const TaskTable: React.FC<Props> = ({ tasks, onUpdate }) => {
    const toggleCompleted = async (task: Task) => {
        await updateTaskStatus(task.id, { completed: !task.completed });
        onUpdate();
    };

    const removeTask = async (task: Task) => {
        await deleteTask(task.id);
        onUpdate();
    };

    return (
        <DataTable value={tasks} responsiveLayout="scroll">
            <Column field="title" header="Title" />
            <Column field="description" header="Description" />
            <Column
                field="completed"
                header="Completed"
                body={(task: Task) => (
                    <Button
                        label={task.completed ? "Yes" : "No"}
                        className={task.completed ? "p-button-success" : "p-button-warning"}
                        onClick={() => toggleCompleted(task)}
                    />
                )}
            />
            <Column
                header="Actions"
                body={(task: Task) => (
                    <Button icon="pi pi-trash" className="p-button-danger" onClick={() => removeTask(task)} />
                )}
            />
        </DataTable>
    );
};

export default TaskTable;
