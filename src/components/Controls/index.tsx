import React, { FormEvent, useCallback, useRef } from 'react';
import { usePalette } from '../../hooks/palette';

import * as S from './styles';

const Controls: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addPalette } = usePalette();

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      addPalette(inputRef.current?.value);
    },
    [addPalette],
  );

  return (
    <S.Container>
      <S.Sticky>
        <form onSubmit={handleSubmit}>
          <strong>Gerar nova paleta</strong>

          <input ref={inputRef} placeholder="#345345" type="color" />
          <button type="submit">Gerar</button>
        </form>

        <div>
          <p>
            Em beta. Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/maurodeouzaa/"
              target="_blank"
              rel="noreferrer"
            >
              Mauro de Souza
            </a>
          </p>
        </div>
      </S.Sticky>
    </S.Container>
  );
};

export default Controls;
