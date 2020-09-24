import React from 'react';
import { usePalette } from '../../hooks/palette';
import Palette from './Palette';

import * as S from './styles';

const Palettes: React.FC = () => {
  const { palettes } = usePalette();

  return (
    <S.Container>
      {/* <S.Shadow /> */}
      {palettes.map(palette => (
        <Palette key={palette.id} palette={palette} />
      ))}
    </S.Container>
  );
};

export default Palettes;
