import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }
  
  body {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    
    
    
  }

  .app {
    width: 100vw;
    max-width: 400px;
    max-height: 675px;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
     
  }

  .titulo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px;
    margin-top: 20px;

    img {
      margin-right: 20px;
      width: 52px;
      height: 60px;

    }
    h1 {
      font-size:36px;
      font-weight: 400;
      font-family: "Righteous", sans-serif;
      color: white;

    }
  }
`

export default GlobalStyles;
