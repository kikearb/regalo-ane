import React, { useState } from 'react';
import {
  Title,
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
        <>
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
        </>
      )}
      {stepActual === 2 && (
        <>
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
        </>
      )}
      {stepActual === 3 && (
        <>
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
        </>
      )}
      {stepActual === 4 && (
        <>
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
        </>
      )}
      {stepActual === 5 && (
        <>
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
        </>
      )}
      {stepActual === 6 && (
        <>
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
        </>
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
