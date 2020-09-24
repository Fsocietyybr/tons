import React from 'react';

import Palettes from '../components/Palettes';
import Controls from '../components/Controls';

import * as S from '../styles/pages/home';

const Home = () => {
  return (
    <S.Container>
      <Palettes />
      <Controls />
    </S.Container>
  );
};

export default Home;
