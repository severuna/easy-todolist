import './Tasks.css';
import TaskList from "./TaskList";
import ListStyle from './ListStyle';
function Tasks (props) {

    const filteredTasks = props.tasks.filter(task => {
        return task.date.getFullYear().toString();
    });

    return (
        <div>
            <div className='tasks'>
                <TaskList tasks={filteredTasks}/>
            </div>
        </div>
    );
}

export default Tasks;