import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import { getTasks } from "./api/tasks";
import type { Task } from "./types/task";
import Layout from "./components/Layout";
import "primereact/resources/themes/saga-blue/theme.css";   // Tema
import "primereact/resources/primereact.min.css";           // Componentes
import "primeicons/primeicons.css";                         // Íconos
import "primeflex/primeflex.css";
import "./index.css";
import {Card} from "primereact/card";

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
            <Card title="Crear nueva tarea" className="mb-6 bg-white shadow-md p-4">
                <TaskForm onTaskCreated={fetchTasks} />
            </Card>
            <TaskTable tasks={tasks} onUpdate={fetchTasks} />
        </Layout>
    );
};

export default App;