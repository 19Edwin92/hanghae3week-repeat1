import React from 'react'
import styled from 'styled-components'

const Headers = styled.header`
  font-family: 'Dovemayo_gothic';
  height: 50px;
  line-height: 50px;
  display: grid ;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 25px;
  background-color: white;
  border-bottom: 3px solid black;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);

  div:nth-child(1) {
    margin-left: 10px;

    span:nth-child(1) {
      font-weight: 800;
    }
    span:nth-child(2) {
      font-size:20px
    }
  }

  div:nth-child(3) {
    margin-right: 10px;
    text-align:end
    
  }
`

function Header() {
  return (
    <Headers>
      <div><span>TODO</span><span> -lists</span></div>
      <div></div>
      <div>Edwin</div>
    </Headers>
  )
}

export default Header