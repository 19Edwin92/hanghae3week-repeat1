import React from 'react'
import styled from 'styled-components'

const TodoDoneBox = styled.div`
  margin: 10px auto;
  width:95%;
  min-height:200px;
  background-color:green;

  p {
    font-family: 'Dovemayo_gothic';
    font-size: 30px;
  }
`
const Form = styled.form`
`


function TodoDone() {
  return (
    <TodoDoneBox>
          <p>Edwin의 완료 목록</p>
    </TodoDoneBox>
  )
}

export default TodoDone