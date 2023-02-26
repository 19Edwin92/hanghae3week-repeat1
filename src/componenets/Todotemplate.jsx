import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import { FaPencilAlt } from 'react-icons/fa';

const TodoCreate = styled.div`
  background: #AFCFEF;
  &:hover {
    background: #C2D8EF;
  }
  &:active {
    background: #89BCEF;
  }
  z-index: 5;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius:50%;
  margin: 10px;
  cursor:pointer;
  font-size:25px;
  text-align:center;
  line-height:60px;
  color:#636566;
  &:hover {
    color:#212122;
  }
  position: absolute;
  transition: 0.125s all ease-in;

  ${props =>
    props.open &&
    css`
    background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      
    `}
`;

const Today = styled.div`
  font-family: 'GongGothicMedium';
  text-align: center;
  line-height:200px;
  font-size:120px;
  margin: 30px;
  flex-grow:1;
  height:200px;
  border-radius:20px;
  border: 1px solid;
  background-color:#636566;
  color: #E8E9E9;
  transition: 0.35s all ease-in;
`

const TodoCreateBox = styled.div`
  font-family: 'GongGothicMedium';
  margin: 30px;
  flex-grow:1;
  height:200px;
  background-color:#D8D9D9;
  border-radius:20px;
  z-index:5;
  transition: 0.35s all ease-in;

  display:flex;
  justify-content: center;
  align-items:center;

  input {
    font-family: 'GongGothicMedium';
  }
`

const Form = styled.form`
  width: 90%;
  padding : 20px;
  line-height: 2em;

  table {
    width:100%;
  }
  input {
    width:95%;
    height:30px;
  }
  span {
    color:red;
  }
`


function Todotemplate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  // 오늘안 사실을 리액트에서는 시간도 useState 를 이용해야 한다는 사실이다. 

  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const onArr = setInterval(() => {
      setToday(new Date())
    }, 1000);
    return (()=> clearInterval(onArr))
  },[])

  return (  
    <>
      <TodoCreate onClick={onToggle} open={open}><FaPencilAlt />
      </TodoCreate>

      {!open && (
        <Today>{today.toLocaleTimeString()}</Today>
      )}

      {open && (
        <TodoCreateBox>
          <Form>
            <table>
              <tr>
                <td colSpan="2"> - 주제와 내용을 모두 입력하신 뒤 Enter를 입력해주세요. <br/>
                                 - 입력을 원치 않으시면, 왼쪽 상단에 있는 <span>빨간 연필</span>을 클릭해주세요.</td>
              </tr>
              <tr>
                <td width="80" height="50px">할일의 주제</td>
                <td><input required type="text" placeholder='주제를 입력해주세요.'/></td>
              </tr>
              <tr>
                <td>할일의 내용</td>
                <td><input required type="text" placeholder='내용을 입력해주세요.'/></td>
              </tr>
            </table>
          </Form>

        </TodoCreateBox>
      )}
    </>
  )
}

export default Todotemplate