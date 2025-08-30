import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import { getTasks } from "./api/tasks";
import type { Task } from "./types/task";
import Layout from "./components/Layout";

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const fetchTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <TaskForm onTaskCreated={fetchTasks} />
            <TaskTable tasks={tasks} onUpdate={fetchTasks} />
        </Layout>
    );
};

export default App;