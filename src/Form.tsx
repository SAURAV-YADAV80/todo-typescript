import React, { FC, useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from 'react';
import Button from './Button';

interface FormProps {
  handleAdd: (toDo: string, status: boolean) => void;
  setShow: (show: boolean) => void;
}

const Form: FC<FormProps> = ({ handleAdd, setShow }) => {
  const [toDo, setToDo] = useState<string>('');
  const [error, setError] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSave = () => {
    if (toDo.trim() === '') {
      setError('Please enter a task');
    } else {
      handleAdd(toDo.trim(), false);
      setToDo('');
      setShow(false);
    }
  }

  const handleCancel = () => {
    setToDo('');
    setShow(false);
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div className='shadow flex flex-col m-2 p-4'>
      <h1>Create a todo</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={toDo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setToDo(e.target.value);
          setError('');
        }}
        onKeyDown={handleKeyDown}
        required
        className='border border-gray-400 p-2 w-80'
        ref={inputRef}
      />
      {error && <p className='text-red-500'>{error}</p>}
      <div className='self-start flex gap-x-4 mt-4'>
        <Button addProp='bg-yellow-500 text-white' onClick={handleSave}>Save</Button>
        <Button addProp='bg-white text-yellow-500' onClick={handleCancel}>Cancel</Button>
      </div>
    </div>
  );
}

export default Form;
