import React from 'react';
import { Confetti, Piece, Text } from './Congratulations.styles';

// eslint-disable-next-line
export { Congratulations };

const Congratulations: React.FC = () => {
  return (
    <Confetti>
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Piece />
      <Text>
        Muchísimas felicidades enana
      </Text>
    </Confetti>
  );
}
