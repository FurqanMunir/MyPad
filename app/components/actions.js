import colors from '../colors';

export default {
  buttonSize: 65,
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  actions: [
    {
      text: 'Bill',
      textElevation: 1,
      shadowoffset: 0,
      color: '#9b59b6',
      buttonSize: buttonSize,
      icon: require('../components/assets/icon.png'),
      name: 'bt_bill',
      position: 2,
      textStyle: textStyle,
      textBackground: colors.transparent,
    },
    {
      text: 'Notes',
      color: '#9b59b6',
      buttonSize: buttonSize,
      icon: require('../components/assets/icon.png'),
      name: 'bt_language',
      position: 1,
      textBackground: colors.transparent,
      textStyle: textStyle,
    },
    {
      text: 'Password',
      buttonSize: buttonSize,
      icon: require('../components/assets/icon.png'),
      name: 'bt_pass',
      position: 3,
      textBackground: colors.transparent,
      textStyle: textStyle,
    },
    {
      text: 'Reminder',
      buttonSize: buttonSize,
      icon: require('../components/assets/icon.png'),
      name: 'bt_videocam',
      position: 4,
      textBackground: colors.transparent,
      textStyle: textStyle,
    },
  ],
};
