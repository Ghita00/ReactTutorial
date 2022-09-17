import React from 'react'

export default function Todo({todo}) {
  return (
    <div>
        <lable>
            <input type="checkbox" checked={todo.status}/>
            {//if is a dictionary we must access at the single field
                todo.name
            }  
        </lable>
    </div>
  )
}
