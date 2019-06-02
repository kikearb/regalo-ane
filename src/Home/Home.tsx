import React from 'react';
import { Wrapper, Title, Emphasized, Button } from './Home.styles';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export { Home };

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        Bienvenida a la
        <Emphasized>cumplegymkhana</Emphasized>
      </Title>

      <Link to="/steps">
        <Button>¡Iniciar!</Button>
      </Link>
    </Wrapper>
  );
};
