//useState is a function used to take and give information between the page 
//useRef is a function used to refer at element in html
import React, {useState, useRef} from 'react'; 
import Todolist from './Todolist'; //import our componet

//this is the main of our application
function App() {
  //FUNCTION AND VARIABLES

  //first is every single todo in useState 
  //second is function to update this todos
  const [todos, setTodos] = useState([{id: 1, name: "make homework", status: true}, 
                                      {id: 2, name: "eat a hamburger", status: false}])
  const todoName = useRef()
                                      
  function add(e){
    const name = todoName.current.value
    if(name = "") return 
    console.log(name)
  } 

  //COMPONET WE WILL RETURN 
  return (
    //Todolist is a componment custom in Todolist.js file 
    //<> and </> is used to write different html row but we can write a comment
    
    //todos = {todos} --> we give a value for componet
    <> 
      <Todolist todos = {todos}/>
      <input ref={todoName} type="text" />
      <button onClick={add}>Add</button>
      <button>Clear</button>
      <div>0 completed</div>  
    </>
  );
}

export default App;
