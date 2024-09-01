import React, { useState } from 'react';
import Header from './Header';
import SubHead from './SubHead';
import Pending from './Pending';
import CompletedTask from './CompletedTask';

interface Task {
  toDo: string;
  status: boolean;
}

interface TaskMap {
  [key: string]: Task;
}

function App() {
  const initialTasks: TaskMap = JSON.parse(localStorage.getItem("tasks") || "{}");
  const [tasks, setTasks] = useState<TaskMap>(initialTasks);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  function handleAdd(toDo: string, status: boolean) {
    const newId = Object.keys(tasks).length.toString();
    const newTasks = { ...tasks, [newId]: { toDo, status } };
    setTasks(newTasks);
  }

  function handleRem(id: string) {
    const newTasks = { ...tasks };
    delete newTasks[id];
    setTasks(newTasks);
  }

  function handleTick(id: string) {
    const newTasks = { ...tasks };
    newTasks[id].status = !newTasks[id].status;
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <hr/>
      <div className="flex flex-col p-2 font-semibold max-w-5xl mx-auto gap-y-4">
        <SubHead />
        <Pending handleAdd={handleAdd} handleTick={handleTick} />
        <CompletedTask handleTick={handleTick} handleRem={handleRem} />
      </div>
    </div>
  );
}

export default App;