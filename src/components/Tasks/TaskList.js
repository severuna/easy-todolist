import './TaskList.css';
import TaskItem from './TaskItem';
import ListStyle from './ListStyle';

const TaskList = (props) => {

    if (props.tasks.length === 0) {
        return <h2 className='task-list__fallback'>There are no expenses this year</h2>
    }

    return (
        <div>
            <ListStyle />
            <ul className='task-list'>
                {props.tasks.map((task) => (
                    <TaskItem key={task.id} date={task.date} description={task.description} location={task.location} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;