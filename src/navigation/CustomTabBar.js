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
      paddingBottom={Platform.OS === 'ios' ? bottom : 5}
      paddingTop={5}>
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
            ? icons.dhome
            : index === 1
            ? icons.dcategory
            : index === 2
            ? icons.dcart
            : index === 3
            ? icons.dbell
            : icons.dprofile;
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
            <Text style={styles.textlabel(isFocused)}>{label}</Text>
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
    color: isFocused ? theme.colors.white : theme.colors.white,
    marginTop: 2,
    fontSize: 14,
  }),
  iconstyle: isFocused => ({
    width: getSize.s(22),
    height: getSize.s(22),
    resizeMode: 'contain',
    tintColor: isFocused ? theme.colors.primary : theme.colors.white,
  }),
});
