const copyToClipboard = (colors: string[]) => {
  let rects = '';

  colors.forEach((color, index) => {
    const size = 50;
    const x = index * (size + 10);

    rects += `<rect width="${size}" height="${size}" x="${x}" fill="${color}" />`;
  });

  const svg = `<svg width="">${rects}</svg>`;

  navigator.clipboard.writeText(svg);
};

export default copyToClipboard;
