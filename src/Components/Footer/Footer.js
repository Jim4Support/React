import './Footer.css'

export default function Footer() {
    return (
        <footer className='appfooter'>
            <form name="task-input" id="form">
                <input name="dueDate" type="date" />
                <input name="name" type="text" placeholder="Add a new task" />
                <span id="errorInput"></span>
                <input name="description" type="text" placeholder="Add a description" />
                <button name="submit-task" type="submit">Add</button>
            </form>
        </footer>
    )
}