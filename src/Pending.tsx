import React, { FC } from 'react';
import TaskAdd from './TaskAdd';
import TaskRemain from './TaskRemain';

interface Task {
  toDo: string;
  status: boolean;
}

interface TaskMap {
  [key: string]: Task;
}

interface PendingProps {
  handleAdd: (toDo: string, status: boolean) => void;
  handleTick: (id: string) => void;
}

const Pending: FC<PendingProps> = ({ handleAdd, handleTick }) => {
  const value: TaskMap = JSON.parse(localStorage.getItem('tasks') || "{}");
  const allTasksCompleted = Object.keys(value).every(key => value[key].status);

  return (
    <div className="w-full">
      <h1 className="text-medium text-xl">Things to do</h1>
      {allTasksCompleted ? (
        <div>
          <div className="text-gray-400 mt-2 text-xl">You are all caught up!</div>
          <TaskAdd handleAdd={handleAdd} />
        </div>
      ) : (
        <div className="mt-2">
          {Object.keys(value).map((key) => (
            <TaskRemain key={key} id={key} obj={value[key]} handleTick={handleTick} />
          ))}
          <TaskAdd handleAdd={handleAdd} />
        </div>
      )}
    </div>
  );
}

export default Pending;
