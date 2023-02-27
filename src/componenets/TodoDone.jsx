import React from 'react'
import styled from 'styled-components'
import { MdDelete, MdFreeCancellation } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';

const TodoDoneBox = styled.div`
  margin: 10px auto;
  width:95%;
  min-height:200px;

  p {
    font-family: 'Dovemayo_gothic';
    font-size: 30px;
  }
`
const TodoitemBox = styled.div`
  width: 98%;
  min-height:50px;
  margin: 5px auto;
  border-radius:10px;
  background-color:#D8D9D9;
  padding: 10px;
  display:grid;
  grid-template-columns: 1fr 150px;



  a[class='title'] {
    display:block;
    font-size:20px;
  }
  a[class='title'] {
    display:block;
  }

  div[class='update'] {
    display:flex;
    justify-content:center;
    gap:10px

  }
`

const UpdateIcon = styled.div`
  width:50px;
  height:50px;
  line-height:50px;
  font-size:25px;
  border-radius:50%;
  text-align:center;
  background-color:#B2DDAB;
  &:hover {
    background-color:#D1DDCF;
  }
  &:active {
    background-color:#5F8A59;
  }
` 

const DeleteIcon = styled.div`
width:50px;
height:50px;
line-height:50px;
font-size:25px;
border-radius:50%;
text-align:center;
background-color:#DDABB1;
&:hover {
  background-color:#F5E7E8;
}
&:active {
  background-color:#DD8791;
}
` 


function TodoDone({todoitem,setTodoitem, deleteTodo, CancelTodo}) {
  return (
    <TodoDoneBox>
         <p>Edwin의 할일 목록</p>
    {todoitem.map(el => {
      if (el.state === true) {
        return (

          <TodoitemBox id={el.id} key={el.id}> 
            <div>
              <a className='title'>{el.title}</a>
              <a className='innerTxt'>{el.innerTxt}</a>
            </div>
            <div className='update'>
              <UpdateIcon id={el.id} onClick={()=> CancelTodo(el.id)}><MdFreeCancellation/></UpdateIcon>
              <DeleteIcon id={el.id} onClick={() => deleteTodo(el.id)}><MdDelete/></DeleteIcon>
              

            </div>
          </TodoitemBox>
        )
      }

    })}
    </TodoDoneBox>
  )
}

export default TodoDone