import axios from "axios";
import type {Task, TaskCreate, TaskUpdateStatus} from "../types/task";

const API_BASE = "http://127.0.0.1:8000/tasks";

export const getTasks = async (): Promise<Task[]> => {
    const res = await axios.get<Task[]>(API_BASE);
    return res.data;
};

export const createTask = async (task: TaskCreate): Promise<Task> => {
    const res = await axios.post<Task>(API_BASE, task);
    return res.data;
};

export const updateTaskStatus = async (id: string, data: TaskUpdateStatus): Promise<Task> => {
    const res = await axios.put<Task>(`${API_BASE}/${id}`, data);
    return res.data;
};

export const deleteTask = async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE}/${id}`);
};
