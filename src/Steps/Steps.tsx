import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import { Title, Wrapper, Content, Riddle, Reader } from './Steps.styles';

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
            Sin ser árbol, tengo hojas, sin ser bestia, un buen lomo y mi nombre
            en cada tomo.
          </Riddle>
          <Reader
            facingMode="environment"
            onError={err => console.log(err)}
            onScan={data => data && handleResult(data)}
          />
          <Content>
            {dataResult}
          </Content>
        </>
      )}
    </Wrapper>
  );
};
