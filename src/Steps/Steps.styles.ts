import styled, { css } from 'styled-components';
import QrReader from 'react-qr-reader';

// eslint-disable-next-line
export { Wrapper, Title, Content, Riddle, Reader, ButtonsWrapper, Button };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.div`
  font-size: 7vw;
  color: #ffc605;
  filter: drop-shadow(1px 1px 0 #282c34);
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 32px;
  margin-bottom: 32px;
`;

const Content = styled.div`
  margin-top: 32px;
  color: #282c34;
`;

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

interface Props {
  onlyOneButton: boolean;
}

const ButtonsWrapper = styled.div<Props>`
  position: absolute;
  left: 3%;
  bottom: 3%;
  right: 5%;

  display: flex;
  justify-content: ${p => p.onlyOneButton ? 'flex-end' : 'space-between' };
`;

interface ButtonProps {
  disabled?: boolean;
}

const Button = styled.div<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  color: #ffc605;
  background-color: #20232a;

  border-radius: 2px;

  font-size: 20px;
  text-transform: uppercase;

  ${p => p.disabled && css`
    filter: grayscale(1);
  `}
`;
