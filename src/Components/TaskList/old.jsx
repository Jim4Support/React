// import React, { useState } from 'react';
// import './TaskList.css';
// import { deleteTask, getTasks, patchTask } from '../../Connection/tasksConnect';
// import TaskList from './TaskList.jsx';
// import TaskForm from '../TaskForm/TaskForm';

// export default function TaskListContainer({tasks, setTasks}) {

//     const [update, setUpdate] = useState(null);
//     const [value, setValue] = useState('');
//     const [checked, setChecked] = useState(false);
//     // const [show, setShow] = useState(true);

//     function checkValue(e) {
//         const value = e.target.value;
//         const task = tasks.find(t => t.id === +value);
//         if (task.done) {
//             task.done = !task.done;
//             changeTaskStatus(+value)
//         } else {
//             task.done = !task.done;
//             changeTaskStatus(+value)
//         }
//         setChecked(!checked);
//     }

//     function delTask(id) {
//         deleteTask(id).then(getTasks).then(tasks => setTasks(tasks.data))
//     }

//     async function changeTaskStatus(id, body) {
//         const task = tasks.find(t => t.id === id)
//         patchTask(task).then(getTasks).then(tasks => setTasks(tasks.data))
    
//         // await patchTask(id, body)
//         // const update = tasks.map(task => task.id === id ? { ...tasks, ...body } : tasks);
//         // return update;
//     }

//     function updateTask(id, name) {
//         setUpdate(id)
//         setValue(name)
//     }

//     function saveChanges(id) {
//         let newChanges = [...tasks].map(title => {
//             if (title.id === id) {
//                 title.name = value.trim();
//             }
//             return title;
//         })
//         setTasks(newChanges);
//         setUpdate(null);
//     }

//     function overdue(dueDate) { // worked
//         const now = new Date().setHours(0, 0, 0, 0);
//         return (dueDate !== null) && now > new Date(dueDate) ? true : false;
//     }
    
//     function correctDate(dueDate) { // worked
//         if (dueDate) {
//             const noZeroDay = new Date(dueDate).getDate();
//             const day = noZeroDay.toString().length === 1 ? (0 + noZeroDay.toString()) : noZeroDay;
//             const noZeroMonth = new Date(dueDate).getMonth() + 1;
//             const month = noZeroMonth.toString().length === 1 ? (0 + noZeroMonth.toString()) : noZeroMonth;
//             const year = new Date(dueDate).getFullYear();
//             return `${day}.${month}.${year}`;
//         } else return '~no date~';
//     }

//     // function hideTasks(id, done) {
//     //     const newArray = tasks.filter(t => t.id === id && t.done === true);
//     //     setTasks(newArray)
//     //     setShow(!show)
//     // }

//     // const today = new Date();

//     console.log(tasks);

//     return (
//         <div>
//             <TaskList 
//                 tasks={tasks}
//                 checkValue={checkValue}
//                 update={update}
//                 setUpdate={setUpdate}
//                 setTasks={setTasks}
//                 checked={checked}
//                 setChecked={setChecked}
//                 setValue={setValue}
//                 delTask={delTask}
//                 updateTask={updateTask}
//                 saveChanges={saveChanges}
//                 correctDate={correctDate}
//                 overdue={overdue} />
//             <div>
//                 <TaskForm />
//             </div>
//         </div>
//     )
// }