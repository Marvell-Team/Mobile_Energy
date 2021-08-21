import React, {useState} from 'react';
import {icons} from '@assets';
import {Block} from '@components';
import {View, Text, Image, TextInput, Pressable} from 'react-native';

const Input = ({
  iconleft,
  style,
  placeholder,
  value,
  placeholderTextColor,
  setValue,
  inputstyle,
  issecure,
  ...props
}) => {
  const [isCheck, setCheck] = useState(true);
  return (
    <Block
      row
      alignCenter
      borderWidth={1}
      paddingHorizontal={12}
      radius={5}
      style={style}>
      {iconleft && (
        <Image
          source={iconleft}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
      )}

      <TextInput
        placeholder={placeholder}
        value={value}
        autoCorrect={false}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={issecure ? isCheck : false}
        onChangeText={text => setValue(text)}
        underlineColorAndroid="transparent"
        style={{flex: 1, height: '100%', ...inputstyle}}
        {...props}
      />
      {issecure && (
        <Pressable onPress={() => setCheck(!isCheck)}>
          <Image
            source={isCheck ? icons.closeeyes : icons.openeyes}
            style={{width: 20, height: 20}}
          />
        </Pressable>
      )}
    </Block>
  );
};

export default Input;
