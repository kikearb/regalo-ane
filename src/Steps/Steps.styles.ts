import styled from "styled-components";
import QrReader from "react-qr-reader";

// eslint-disable-next-line
export { Wrapper, Title, Content, Riddle, Reader };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.div`
  font-size: 5vw;
  color: #FFC605;
  filter: drop-shadow(1px 1px 0 #282c34);
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Content = styled.div``;

const Riddle = styled.div`
  color: #282c34;
  margin-bottom: 26px;
`;

const Reader = styled(QrReader)`
  margin-bottom: 32px;

  div {
    border: 0 !important;
    box-shadow: none !important;
  }
`;