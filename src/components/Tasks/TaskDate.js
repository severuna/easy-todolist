import './TaskDate.css';


const TaskDate = (props)=> {
    const month = props.date.toLocaleString('en-GB', {month: 'long'});
    const day = props.date.toLocaleString('en-GB', {day: '2-digit'});
    return (
        <div className='task-date'>
            <div className='task-date__day'>{day}</div>
            <div className='task-date__month'>{month}</div>
        </div>
    );
}
export default TaskDate;