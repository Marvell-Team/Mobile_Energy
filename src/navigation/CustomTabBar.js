import React from 'react';
import {Block} from '@components';
import {StyleSheet, Text, Pressable, Image, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '@theme';
import {icons} from '@assets';
import {getSize} from '@utils/responsive';

const MyTabBar = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Block
      row
      backgroundColor={theme.colors.secondary}
      paddingBottom={Platform.OS === 'ios' ? bottom : 10}
      paddingTop={10}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.category
            : index === 2
            ? icons.cart
            : index === 3
            ? icons.notification
            : icons.user;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            <Block
              style={{
                backgroundColor: isFocused
                  ? theme.colors.white
                  : theme.colors.secondary,
                padding: 5,
                borderRadius: 8,
              }}>
              <Image source={icon} style={styles.iconstyle(isFocused)} />
            </Block>
            {/* <Text style={styles.textlabel(isFocused)}>{label}</Text> */}
          </Pressable>
        );
      })}
    </Block>
  );
};
export default MyTabBar;
const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center'},
  textlabel: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.primary,
    marginTop: 5,
    fontSize: 10,
  }),
  iconstyle: isFocused => ({
    width: getSize.s(20),
    height: getSize.s(20),
    resizeMode: 'contain',
    tintColor: isFocused ? theme.colors.primary : theme.colors.white,
  }),
});
