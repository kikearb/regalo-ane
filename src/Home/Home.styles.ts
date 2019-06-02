import styled from "styled-components";

// eslint-disable-next-line
export { Wrapper, Title, Emphasized, Button };

const Wrapper = styled.div`
  position: relative;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 100%;
`;

const Title = styled.div`
  font-size: 8vw;
  line-height: 1.5;
  text-align: center;
  color: #282c34;
  text-transform: uppercase;
  font-weight: bold;
`;

const Emphasized = styled.span`
  display: block;
  color: #FFC605;
  filter: drop-shadow(1px 1px 0 #282c34);
`;

const Button = styled.div`
  position: absolute;
  bottom: 3%;
  right: 5%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  color: #FFC605;
  background-color: #20232a;

  border-radius: 2px;

  font-size: 5vw;
  text-transform: uppercase;
`;