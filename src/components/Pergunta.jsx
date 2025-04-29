import { useState } from 'react';
import styled from 'styled-components';
import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";

export default function Pergunta({ index, question, answer, responderPergunta, respostas }) {
  const [estado, setEstado] = useState('fechado');
  const respondido = respostas.find((r) => r.index === index);

  function abrirPergunta() {
    if (!respondido) setEstado('pergunta');
  }

  function mostrarResposta() {
    setEstado('resposta');
  }

  function responder(status) {
    responderPergunta(index, status);
    setEstado('fechado');
  }

  if (respondido) {
    return (
      <Card status={respondido.status}>
        <Container>
          <h2>Pergunta {index + 1}</h2>
          {respondido.status === "erro" && <img src={icone_erro} alt="Erro" />}
          {respondido.status === "quase" && <img src={icone_quase} alt="Quase" />}
          {respondido.status === "zap" && <img src={icone_certo} alt="Certo" />}
        </Container>
      </Card>
    );
  }

  return (
    <Card>
      {estado === 'fechado' && (
        <Container>
          <h2>Pergunta {index + 1}</h2>
          <img src={seta_play} alt="Abrir Pergunta" onClick={abrirPergunta} />
        </Container>
      )}

      {estado === 'pergunta' && (
        <PerguntaAberta>
          <TextoPergunta>{question}</TextoPergunta>
          <BotaoVirar src={seta_virar} alt="Mostrar Resposta" onClick={mostrarResposta} />
        </PerguntaAberta>
      )}

      {estado === 'resposta' && (
        <Resposta>
          <p>{answer}</p>
          <Buttons>
            <Button color="#FF3030" onClick={() => responder("erro")}>Não lembrei</Button>
            <Button color="#FF922E" onClick={() => responder("quase")}>Quase não lembrei</Button>
            <Button color="#2FBE34" onClick={() => responder("zap")}>Zap!</Button>
          </Buttons>
        </Resposta>
      )}
    </Card>
  );
}

const Card = styled.div`
  background-color: white;
  width: 300px;
  max-width: 300px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: left;
  box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.05);


  h2 {
    margin: 0;
    font-size: 16px;
    font-family: "Recursive", sans-serif;
    text-decoration: ${(props) => (props.status ? 'line-through' : 'none')};
    color: ${(props) =>
      props.status === 'erro' ? '#FF3030' :
      props.status === 'quase' ? '#FF922E' :
      props.status === 'zap' ? '#2FBE34' : 'black'};
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    font-family: "Recursive", sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const PerguntaAberta = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;

const TextoPergunta = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  color: black;
  font-family: "Recursive", sans-serif;
`;

const BotaoVirar = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Resposta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: ${props => props.color};
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 400;
  width: 85px;
  height: 37px;
  font-size: 12px;
  font-family: "Recursive", sans-serif;
`;

