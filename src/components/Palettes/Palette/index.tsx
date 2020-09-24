import React, { useCallback, useState } from 'react';
import { MdFilterNone, MdDelete } from 'react-icons/md';

import { usePalette, PaletteData } from '../../../hooks/palette';

import getColors from '../../../utils/getColors';
import copyToClipboard from '../../../utils/copyToClipboard';

import * as S from './styles';

type PaletteProps = {
  palette: PaletteData;
};

const Palette: React.FC<PaletteProps> = ({ palette }) => {
  const [copied, setCopied] = useState(false);

  const { removePalette } = usePalette();

  const colors = getColors(palette.baseColor);

  const copyColor = useCallback((color: string) => {
    setCopied(true);

    navigator.clipboard.writeText(color);

    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <S.Container>
      <S.Colors>
        {colors.map(color => (
          <S.Color
            key={color}
            background={color}
            isBase={color === palette.baseColor.toUpperCase()}
            onClick={() => copyColor(color)}
          >
            <span>{copied ? 'Copied' : color}</span>
          </S.Color>
        ))}
      </S.Colors>

      <S.SideMenu>
        {/* <MdModeEdit size={20} /> */}
        <MdDelete
          size={25}
          onClick={() => removePalette(palette.id)}
          title="Excluir"
        />
        <MdFilterNone
          size={25}
          onClick={() => copyToClipboard(colors)}
          title="Copiar"
        />
      </S.SideMenu>
    </S.Container>
  );
};

export default Palette;
