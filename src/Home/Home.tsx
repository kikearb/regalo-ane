import React from 'react';
import { Wrapper, Title, Emphasized } from './Home.styles';

// eslint-disable-next-line
export { Home };

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        Bienvenida a la
        <Emphasized>ArbuGymkhana</Emphasized>
      </Title>
    </Wrapper>
  );
};
