import { useState } from 'react';
import Perguntas from './components/perguntas';
import Contador from './components/Contador';
import cards from './deck';
import GlobalStyles from './styles/GlobalStyles';
import logo from './assets/logo.png';

export default function App() {
  const [respostas, setRespostas] = useState([]);

  function responderPergunta(index, status) {
    setRespostas([...respostas, { index, status }]);
  }

  return (
    <>
      <GlobalStyles />
      <div className="app">
        <div className="titulo">
          <img src={logo}></img>
          <h1>ZapRecall</h1>
         </div>
        <Perguntas 
          cards={cards}
          respostas={respostas}
          responderPergunta={responderPergunta}
        />
        <Contador 
          total={cards.length} 
          respondidas={respostas.length} 
        />
      </div>
    </>
  );
}
