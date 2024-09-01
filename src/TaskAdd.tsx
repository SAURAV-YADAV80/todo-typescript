import React, { FC, useState } from 'react';
import Form from './Form';
import Button from './Button';

interface TaskAddProps {
  handleAdd: (toDo: string, status: boolean) => void;
}

const TaskAdd: FC<TaskAddProps> = ({ handleAdd }) => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    console.log('handleClick is called');
    setShow(true);
  }

  if (show) {
    return <Form handleAdd={handleAdd} setShow={setShow} />;
  }

  return (
    <Button addProp="bg-yellow-500 text-white mt-4" onClick={handleClick}>+Add</Button>
  );
}

export default TaskAdd;
