import 'styled-components';

import { ColorsType, SizesType } from '@styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    sizes: SizesType;
  }
}
