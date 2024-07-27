import {DefaultTheme} from 'react-native-paper';
import {EventRegister} from 'react-native-event-listeners';
import React, {useState, useEffect} from 'react';

export function myThemex() {
  const [theme, setTheme] = useState(colorFull);
  const [mode, setMode] = useState('DarkTheme');
  useEffect(() => {
    EventRegister.addEventListener('theme', data => {
      setMode(data);
    });

    if (mode === 'myTheme') {
      setTheme(colorFull);
    } else if (mode === 'DarkTheme') {
      setTheme(DarkTheme);
    } else if (mode === 'LigtTheme') {
      setTheme(LightTheme);
    } else if (mode === 'RoseTheme') {
      setTheme(RoseTheme);
    }
  }, [theme]);
  return theme;
}

export const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2471A3',
    secondary: '#363771',
    background: '#fff',
    secondaryLight: '#306030',
    black: '#000',
    white: '#fff',
    light: '#FCFCFC',
    dark: '#1b1b3d',
    danger: '#ff5252',
    transparent: '#',
    font: '#1b1b3d',
  },
};

const colorFull = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e83526',
    secondary: '#363771',
    background: '#fff',
    secondaryLight: '#306030',
    black: '#000',
    white: '#fff',
    light: '#EAEAF7',
    dark: '#1b1b3d',
    danger: '#ff5252',
    transparent: '#',
    font: '#1b1b3d',
  },
};

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F4D03F',
    secondary: '#2E86C1',
    background: '#000',
    secondaryLight: '#306030',
    black: '#000',
    white: '#CECECE',
    light: '#2E4554',
    dark: '#EAE9E4',
    danger: '#ff5252',
    transparent: '#',
    font: '#FDFDFD',
  },
};

const RoseTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c90076',
    secondary: '#0EAF1F',
    background: '#F5FDF6',
    secondaryLight: '#DC5050',
    black: '#000',
    white: '#fff',
    light: '#E9F9EB',
    dark: '#490E0E',
    danger: '#ff5252',
    transparent: '#',
    font: '#211D1D',
  },
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2471A3',
    secondary: '#363771',
    background: '#fff',
    secondaryLight: '#306030',
    black: '#000',
    white: '#fff',
    light: '#FCFCFC',
    dark: '#1b1b3d',
    danger: '#ff5252',
    transparent: '#',
    font: '#1b1b3d',
  },
};
