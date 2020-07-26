const light = {
  colors: {
    background: '#E5E5E5',
    primary: {
      text: '#333333',
      active: '#539CE6',
      gradient: 'linear-gradient(39.78deg, #07A59E 0%, #539CE6 100%)',
    },
    secondary: {
      text: '#FFFFFF',
      active: '#07A59E',
    },
  },
};

export type ColorsType = typeof light.colors;
export { light };
