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
            Sin ser árbol tengo hojas,<br /> sin ser bestia un buen lomo<br /> y mi nombre
            en cada tomo.
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
          <Riddle>Chiquita como un ratón<br /> guarda la casa como un león</Riddle>
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
        <Button
          onClick={dataResult !== '' ? () => nextStep() : () => undefined}
          disabled={dataResult === ''}
        >
          Siguiente
        </Button>
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
