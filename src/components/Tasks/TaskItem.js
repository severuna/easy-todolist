import './TaskItem.css';
import TaskDate from './TaskDate';

const TaskItem = (props) => {
    return ( 
    <li>
        <div className='task-item'>
            <TaskDate date={props.date}/>
            <div className='task-item__description'>
                <h2>{props.description}</h2>
                <div className='task-item__location'>{props.location}</div>
            </div>
        </div>
        </li>
    );
}


export default TaskItem;