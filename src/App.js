import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './componenets/Header'
import Todotemplate from './componenets/Todotemplate'

// styled-components 설치하기
// 말그대로 스타일된 컴포넌트를 제작할 수 있는 리액트 라이브러리이다. 
// 설치해보자. yarn add styled-components
// createGlobalStyle 은 라이브러리에서 제공하는 기본설정으로 사용하기 위해서는 상단에 임포트해야 한다. 

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Dovemayo_gothic';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.1/Dovemayo_gothic.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'GongGothicMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

  body {
    background: #e9ecef;
  }
`
const LayOut = styled.div`
  max-width: 1200px;
  min-whith: 800px;
  margin: 0 auto;
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <LayOut>
        <Header></Header>
        <Todotemplate></Todotemplate>
      </LayOut>
    </>
  )
}

export default App