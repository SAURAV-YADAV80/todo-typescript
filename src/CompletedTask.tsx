import React, { FC } from 'react';
import Complete from './Complete';

interface Task {
  toDo: string;
  status: boolean;
}

interface TaskMap {
  [key: string]: Task;
}

interface CompletedTaskProps {
  handleTick: (id: string) => void;
  handleRem: (id: string) => void;
}

const CompletedTask: FC<CompletedTaskProps> = ({ handleTick, handleRem }) => {
  const value: TaskMap = JSON.parse(localStorage.getItem('tasks') || "{}");
  const hasCompletedTasks = Object.keys(value).some(key => value[key].status);

  return (
    <div>
      <h1 className="text-medium text-xl">Things done</h1>
      <div className='flex flex-col gap-y-2'>
        {hasCompletedTasks ? (
          Object.keys(value).map(key => 
            value[key].status && (
              <Complete 
                key={key} 
                id={key} 
                obj={value[key]} 
                handleTick={handleTick} 
                handleRem={handleRem} 
              />
            )
          )
        ) : (
          <div className="text-gray-400 mt-2 text-xl">No todos here!</div>
        )}
      </div>
    </div>
  );
}

export default CompletedTask;
