//rfc + enter for create the base 
import React from 'react'
import Todo from './Todo'

//in the () give the value 
export default function Todolist({todos}) {
  return (
    <div>
        {//in the {} we can write js code with a scope
            todos.map(todo => {
                //create a todo for every element in todos
                //the key is a not argument in the function, but is used to remove error in console
                return <Todo key = {todo} todo = {todo}/>
            })
        }
    </div>
  )
}
