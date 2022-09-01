import React, {useState} from 'react';
import './Footer.css'

export default function Footer({tasks, setTasks}) {
 
  const [newTask, setNewTask] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // const handleInputChange = (event) => { //example
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  function addTask() {
    setTasks([...tasks, {
      name: newTask
    }
  ]);
  setNewTask('');
  }

  // function addDesc() {
  //   setTasks([...tasks, {
  //     description: newDesc
  //   }
  // ]);
  // setNewDesc('');
  // }
 
  const nameAndDesc = (event) => {
    event.preventDefault();
    addTask()
    // addDesc()
  }
//   tasksForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     if (inputTask[0].value.trim() === null || inputTask[0].value.trim() === '') {
//         errorInput.innerText = 'Please, enter a task';
//     } else {
//         errorInput.innerText = '';
//         const formData = new FormData(tasksForm);
//         const formTask = Object.fromEntries(formData.entries());
//         data.push(new Task(data.id, onPushDate(inputDate[0].value), false, inputTask[0].value, inputDesc[0].value.trim()));
//         addTask(formTask).then(generateTasks)
//             .then(_ => tasksForm.reset())
//         renderTask();
//     }
// });


    return (
        <footer className='footer'>
            <form onSubmit={nameAndDesc}>
                <input name="dueDate" type="date"/>
                <input name="name" type="text" placeholder="Add a new task" value={newTask} onChange={(t) => setNewTask(t.target.value)}/>
                {/* <span id="errorInput"></span> */}
                <input name="description" type="text" placeholder="Add a description" value={newDesc} onChange={(t) => setNewDesc(t.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        </footer>
    )
}
