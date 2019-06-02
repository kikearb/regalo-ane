import React, { useState } from 'react';
import {
  Title,
  RiddleWrapper,
  Wrapper,
  Content,
  Riddle,
  Reader,
  ButtonsWrapper,
  Button,
} from './Steps.styles';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export { Steps };

const Steps: React.FC = () => {
  const [stepActual, handleStep] = useState(1);
  const [dataResult, handleResult] = useState('');

  return (
    <Wrapper>
      <Title>Paso {stepActual}</Title>
      {stepActual === 1 && (
        <RiddleWrapper>
          <Riddle>
            Sin ser árbol tengo hojas,
            <br /> sin ser bestia un buen lomo
            <br /> y mi nombre en cada tomo.
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>{dataResult}</Content>
        </RiddleWrapper>
      )}
      {stepActual === 2 && (
        <RiddleWrapper>
          <Riddle>
            Aunque tiene dientes
            <br />y la casa guarda,
            <br />
            ni muerde ni ladra
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>{dataResult}</Content>
        </RiddleWrapper>
      )}
      {stepActual === 3 && (
        <RiddleWrapper>
          <Riddle>
            Cuatro patas tiene
            <br />y no puede andar.
            <br />
            También cabecera
            <br />
            sin saber hablar.
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>{dataResult}</Content>
        </RiddleWrapper>
      )}
      {stepActual === 4 && (
        <RiddleWrapper>
          <Riddle>
            Me pelan de arriba a abajo
            <br />
            quitándome la camisa,
            <br />
            pero si ésta al suelo tiran,
            <br />
            sobreviene una golpiza.
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>{dataResult}</Content>
        </RiddleWrapper>
      )}
      {stepActual === 5 && (
        <RiddleWrapper>
          <Riddle>
            No soy arquero
            <br />
            pero uso la flecha.
            <br />
            Me muevo si quiero
            <br />
            con tu mano derecha.
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>{dataResult}</Content>
        </RiddleWrapper>
      )}
      {stepActual === 6 && (
        <RiddleWrapper>
          <Riddle>
            Siempre andamos por el suelo
            <br />
            de alcobas y de salones
            <br />
            y en historias orientales
            <br />
            hasta hacemos algún vuelo.
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>{dataResult}</Content>
        </RiddleWrapper>
      )}
      <ButtonsWrapper onlyOneButton={stepActual === 1}>
        {stepActual !== 1 && (
          <Button onClick={() => previousStep()}>Anterior</Button>
        )}
        {stepActual !== 6 ? (
          <Button
            onClick={dataResult !== '' ? () => nextStep() : () => undefined}
            disabled={dataResult === ''}
          >
            Siguiente
          </Button>
        ) : (
          <Link to="/congratulations">
            <Button disabled={dataResult === ''}>Finalizar</Button>
          </Link>
        )}
      </ButtonsWrapper>
    </Wrapper>
  );

  function previousStep() {
    handleResult('');
    handleStep(stepActual - 1);
  }

  function nextStep() {
    handleResult('');
    handleStep(stepActual + 1);
  }
};
