import React, { FC } from 'react';
import Button from './Button';

interface Task {
  toDo: string;
  status: boolean;
}

interface CompleteProps {
  obj: Task;
  id: string;
  handleTick: (id: string) => void;
  handleRem: (id: string) => void;
}

const Complete: FC<CompleteProps> = ({ obj, id, handleTick, handleRem }) => {

  if (!obj.status) {
    return null;
  }

  const handleChange = () => handleTick(id);
  const handleDelete = () => handleRem(id);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="mr-2"
        checked={obj.status}
        onChange={handleChange}
      />
      <label htmlFor={`checkbox-${id}`} className="text-gray-500 cursor-pointer">
        {obj.toDo}
      </label>
      <Button addProp="bg-yellow-500 text-white ml-3" onClick={handleDelete}>remove</Button>
    </div>
  );
}

export default Complete;
