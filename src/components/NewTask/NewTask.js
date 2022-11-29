import React, { useState} from 'react';
import TaskForm from './TaskForm';
import './NewTask.css';

const NewTask = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveTaskDataHandler = (inputTaskData) => {
        const taskData = {
            ...inputTaskData,
            id: Math.random().toString()
        }
       props.onAddTask(taskData);
       
       setIsFormVisible(false);
    }

    const inputTaskDataHandler = () => {
        setIsFormVisible(true);
    }
    const cancelTaskHandler = () => {
        setIsFormVisible(false)
    }
    return (
        <div className="new-task">
            {!isFormVisible && <button onClick={inputTaskDataHandler}>Add new task</button>}
            {isFormVisible && <TaskForm onSaveCostData={saveTaskDataHandler} onCancel={cancelTaskHandler} />}
        </div>
    );
}

export default NewTask;