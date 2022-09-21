import React from 'react'
import styles from "./TodoItem.module.css"
 
const TodoItem = ({todo, handleChangeProps, deleteTodoProps}) => {
     
 const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}
     
     
     return <li className={styles.item}>
     <input type="checkbox" checked={todo.completed}  className={styles.checkbox}
      onChange={() => handleChangeProps( todo.id )}/>
      <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null}>
     {todo.title}
     </span>

     </li>
}
export default TodoItem