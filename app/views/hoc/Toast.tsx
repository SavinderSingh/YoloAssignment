import {Icon} from '@rneui/themed';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export const toastConfig = {
  success: ({text1, props}) => (
    <View style={styles.successParent}>
      <Icon name="done" type="material" color="#fff" />
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),

  error: ({text1, props}) => (
    <View style={styles.errorParent}>
      <Icon name="error" type="material" color="#fff" size={24} />
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
};

const width = '90%';
const styles = StyleSheet.create({
  successParent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#53A653',
    // height: 48,
    paddingVertical: 16,
    width: width,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  errorParent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff3333',
    // height: 48,
    width: width,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  messageParent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light.accent,
    height: 48,
    width: width,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.medium,
    color: '#fff',
    paddingLeft: 8,
    flexShrink: 1,
  },
  notificationParent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
});