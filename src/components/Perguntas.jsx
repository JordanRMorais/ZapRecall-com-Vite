import Pergunta from './Pergunta';
import styled from 'styled-components';

export default function Perguntas({ cards, respostas, responderPergunta }) {
  return (
    <Container>
      {cards.map((card, index) => (
        <Pergunta
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}
          respostas={respostas}
          responderPergunta={responderPergunta}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 400px;
  background-color: #FB6B6B;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
`;


