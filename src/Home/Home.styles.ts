import styled from "styled-components";

// eslint-disable-next-line
export { Wrapper, Title, Emphasized };

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