import React from 'react';
import {View, Image} from 'react-native';
import RIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function Icon({
  name,
  img,
  size = 40,
  backgroundColor = '#000',
  iconColor = '#fff',
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 7,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '2E4554',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      {name && <RIcon name={name} color={iconColor} size={size * 0.7} />}
      {img && !name && (
        <Image
          style={{
            tintColor: iconColor,
            height: size * 0.7,
            width: size * 0.7,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={img}
        />
      )}
    </View>
  );
}

export default Icon;
