import {Icon} from '@rneui/base';
import * as React from 'react';
import {View, StyleSheet, TextInput, Platform} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

interface SearchViewProps {
  placeholder?: string;
  value?: string;
  onChangeText: (value: string) => void;
}

const SearchView = (props: SearchViewProps) => {
  return (
    <View style={styles.container}>
      <Icon name="search" type="feather" color={colors.light.accent} />
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        style={styles.textInput}
        placeholderTextColor={colors.light.lightTextColor}
      />
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.light.borderColor,
    marginHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 12 : 4,
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 12,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.medium,
    color: colors.light.textDefaultColor,
    paddingLeft: 12,
  },
});
