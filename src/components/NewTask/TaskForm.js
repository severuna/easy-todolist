import React, {useState} from 'react';
import './TaskForm.css';

const TaskForm = (props) => {

    const [inputTask, setInputTask] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputDate, setInputDate] = useState('');

    const taskChangeHandler = (event) => {
        setInputTask(event.target.value);
    };

    const locationChangeHandler = (event) => {
        setInputLocation(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            description: inputTask,
            location: inputLocation,
            date: new Date(inputDate)
        }

        props.onSaveCostData(taskData);
        setInputTask('');
        setInputLocation('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-task__controls">
                <div className="new-task__control">
                    <label>Task</label>
                    <input type='text' value={inputTask} onChange={taskChangeHandler}/>
                </div>
                <div className="new-task__control">
                    <label>Location</label>
                    <input onChange={locationChangeHandler} value={inputLocation} type='text'/>
                </div>
                <div className="new-task__control">
                    <label>Deadline</label>
                    <input onChange={dateChangeHandler} value={inputDate} type='date' min='2019-01-01' step='2022-12-31'/>
                </div>
                <div className="new-task__actions">
                    <button type='submit'>Add task</button>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;