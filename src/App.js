import NewTask from './components/NewTask/NewTask';
import Tasks from './components/Tasks/Tasks';
import React, {useState} from 'react';

const INITIAL_TASKS = [];
function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTaskHandler = (task) => {
    setTasks(prevTasks => {
      return [task, ...prevTasks]
    });
  };

  return (
    <div>
        <NewTask onAddTask={addTaskHandler} />
        <Tasks tasks={tasks} />
      </div>
  );
}

export default App;
