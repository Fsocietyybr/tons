import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export type PaletteData = {
  id: string;
  baseColor: string;
};

type PaletteContextData = {
  addPalette: (baseColor: string) => void;
  removePalette: (id: string) => void;
  palettes: PaletteData[];
};

const PaletteContext = createContext<PaletteContextData>(
  {} as PaletteContextData,
);

const PaletteProvider: React.FC = ({ children }) => {
  const [palettes, setPalettes] = useState<PaletteData[]>([]);

  const addPalette = useCallback(baseColor => {
    const newPalette = {
      id: uuid(),
      baseColor,
    };

    setPalettes(state => [newPalette, ...state]);
  }, []);

  const removePalette = useCallback(id => {
    setPalettes(state => state.filter(palette => palette.id !== id));
  }, []);

  return (
    <PaletteContext.Provider value={{ palettes, addPalette, removePalette }}>
      {children}
    </PaletteContext.Provider>
  );
};

const usePalette = (): PaletteContextData => {
  const context = useContext(PaletteContext);

  if (!context)
    throw new Error('usePalette must be used within a PaletteProvider');

  return context;
};

export { usePalette, PaletteProvider };
