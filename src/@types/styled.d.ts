import 'styled-components';

import { ColorsType } from '@styles/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
