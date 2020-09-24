import Color from 'color';
import { darken, lighten } from 'polished';

const getColors = (baseColor: string) => {
  const color = Color(baseColor);

  const qtdDark = Math.floor(color.lightness() / 5);
  const qtdLight = Math.floor((100 - color.lightness()) / 5);

  const darkness: string[] = Array(qtdDark)
    .fill({})
    .map((_, index) =>
      darken(0.05 * (index + 1), color.toString()).toUpperCase(),
    );

  const lightness: string[] = Array(qtdLight)
    .fill({})
    .map((_, index) =>
      lighten(0.05 * (index + 1), color.toString()).toUpperCase(),
    )
    .reverse();

  const colors = [...lightness, baseColor.toUpperCase(), ...darkness];

  return colors;
};
export default getColors;
