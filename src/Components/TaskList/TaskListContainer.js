import React, { useState } from 'react';
import './TaskList.css';
import { deleteTask, getTasks, patchTask } from '../../Connection/tasksConnect';
import TaskForm from '../TaskForm/TaskForm';

export default function TaskList({tasks, setTasks}) {

    const [update, setUpdate] = useState(null);
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState(false);
    // const [show, setShow] = useState(true);

    function checkValue(e) {
        const value = e.target.value;
        const task = tasks.find(t => t.id === +value);
        if (task.done) {
            task.done = !task.done;
            changeTaskStatus(+value)
        } else {
            task.done = !task.done;
            changeTaskStatus(+value)
        }
        setChecked(!checked);
    }

    function delTask(id) {
        deleteTask(id).then(getTasks).then(tasks => setTasks(tasks.data))
    }

    function changeTaskStatus(id) {
        const task = tasks.find(t => t.id === id)
        patchTask(task).then(getTasks).then(tasks => setTasks(tasks.data))
    }

    function updateTask(id, name) {
        setUpdate(id)
        setValue(name)
    }

    function saveChanges(id) {
        let newChanges = [...tasks].map(title => {
            if (title.id === id) {
                title.name = value.trim();
            }
            return title;
        })
        setTasks(newChanges);
        setUpdate(null);
    }

    function correctDate(dueDate) {
        if (dueDate) {
            const noZeroDay = new Date(dueDate).getDate();
            const day = noZeroDay.toString().length === 1 ? (0 + noZeroDay.toString()) : noZeroDay;
            const noZeroMonth = new Date(dueDate).getMonth() + 1;
            const month = noZeroMonth.toString().length === 1 ? (0 + noZeroMonth.toString()) : noZeroMonth;
            const year = new Date(dueDate).getFullYear();
            return `${day}.${month}.${year}`;
        } else return '~no date~';
    }

    function overdue(dueDate) {
        if (dueDate !== null) {
            const now = new Date();
            now.setHours(1, 0, 0, 0);
            return now > new Date(dueDate);
        }
    }

    function changeBack(dueDate, done) {
        return (overdue(dueDate) && !done) ? 'background-red' : done ? 'background-green' : 'background-grey';
    }

    function changeDateColor(dueDate, done) {
        return (overdue(dueDate) && !done) ? 'red' : '';
    }

    function changeStatus(done) {
        return done ? 'line-through' : 'none';
    }

    // function hideTasks(id, done) {
    //     const newArray = tasks.filter(t => t.id === id && t.done === true);
    //     setTasks(newArray)
    //     setShow(!show)
    // }

    // const today = new Date();

    console.log(tasks);

    return (
        <div>
            {tasks&&tasks.map((t) => (<TaskList item={t}
                checkValue={ checkValue }
                update={update}
                setUpdate={setUpdate}
                setTasks={setTasks}
                checked={checked}
                setChecked={setChecked}
                setValue={setValue}
                delTask={delTask}
                updateTask={updateTask}
                saveChanges={saveChanges}
                correctDate={correctDate}
                changeBack={changeBack}
                changeDateColor={changeDateColor}
                changeStatus={changeStatus} />))}
            <TaskForm />
        </div>
    )
}