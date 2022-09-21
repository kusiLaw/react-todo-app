import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  state = {
   todos: [
     {
       id: uuidv4(),
       title: "Setup development environment",
       completed: true
     },
     {
       id: uuidv4(),
       title: "Develop website and add content",
       completed: false
     },
     {
       id: uuidv4(),
       title: "Deploy to live server",
       completed: false
     }
   ]
  };

  handleChange = id => {
 // instead of this.setState({ todos: this.state.todos.map( ...})
 // we prefer using the previous snapshots 
 this.setState(prevState => {
  return {
     todos: prevState.todos.map(todo => {
     if (todo.id === id) {
      return {
       ...todo,
       completed : !todo.completed
     }
    }
     return todo
   }),
  }
 })

};

 delTodo = id => {
  this.setState({
   todos: this.state.todos.filter(todo => {
       return todo.id !== id;
     })
   
 });
 };

  addTodoItem = title => {
   const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false
  };

  //set state to recreate component
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
 };

  render() {
    return (
     <div className="container">
      <div className="inner">
       <Header />
       <InputTodo addTodoProps={this.addTodoItem}/>
       <TodosList todos ={this.state.todos} 
       handleChangeProps={this.handleChange} 
       deleteTodoProps={this.delTodo} />
      </div>
     </div>
    )
  }
}
export default TodoContainer