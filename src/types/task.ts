export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  creation_date: string;
}

export interface TaskCreate {
  title: string;
  description?: string;
}

export interface TaskUpdateStatus {
  completed: boolean;
}
