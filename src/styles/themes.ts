const sizes = {
  maxWidth: 1440,
};

const lightColors = {
  background: '#E5E5E5',
  primary: {
    text: '#333333',
    active: '#539CE6',
    gradient: 'linear-gradient(39.78deg, #07A59E 0%, #539CE6 100%)',
  },
  secondary: {
    text: '#FFFFFF',
    active: '#07A59E',
    background: '#F6F6F6',
  },
};

export const light = {
  colors: lightColors,
  sizes,
};

export type ColorsType = typeof lightColors;
export type SizesType = typeof sizes;
