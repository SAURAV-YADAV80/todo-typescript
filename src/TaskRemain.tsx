import React, { FC } from 'react';

interface Task {
  toDo: string;
  status: boolean;
}

interface TaskRemainProps {
  obj: Task;
  id: string;
  handleTick: (id: string) => void;
}

const TaskRemain: FC<TaskRemainProps> = ({ obj, id, handleTick }) => {

  const handleCheckboxChange = () => {
    console.log("handle checkbox change");
    handleTick(id);
  };

  if (obj.status) {
    return null;
  }

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="mr-2"
        checked={obj.status}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={`checkbox-${id}`} className="text-gray-500 cursor-pointer">
        {obj.toDo}
      </label>
    </div>
  );
}

export default TaskRemain;
