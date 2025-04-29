import styled from 'styled-components';

export default function Contador({ total, respondidas }) {
  return (
    <Footer>
      {respondidas}/{total} CONCLUÍDOS
    </Footer>
  );
}

const Footer = styled.div `
  width: 100%;
  min-height: 70px;
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.05);

;`
