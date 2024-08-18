import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ThemeDarkColors } from './ThemeColors';

const ThemeDark = {
  ...DarkTheme,
  colors: ThemeDarkColors.colors
};

export {ThemeDark, ThemeDarkColors};