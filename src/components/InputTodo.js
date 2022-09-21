import React from "react"

class InputTodo extends React.Component {
 state = {
   title: ""
 };

 onChange = e => {
  this.setState({
   [e.target.name]: e.target.value
 });
 };


 handleSubmit = e => {
  e.preventDefault();
  if (this.state.title.trim()) {
     //send this state to up for update
   this.props.addTodoProps(this.state.title)
    //reset title to clear input text
   this.setState({
     title: "",
   })
 } else {
   alert("Please write item")
 }
 };


 render() {
   return (
     <form onSubmit={this.handleSubmit}  className="form-container">
       <input className="input-text" type="text" placeholder="Add Todo..." name="title"
        value={this.state.title} onChange={this.onChange} />
       <button className="input-submit" >Submit</button>
     </form>
   )
 }
}
export default InputTodo