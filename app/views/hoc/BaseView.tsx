import * as React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Loader from './Loader';
import {useSelector} from 'react-redux';
import HeaderView, {HeaderViewProps} from '../components/HeaderView';
import {colors} from '../../constants/colors';

interface BaseViewProps {
  hasStatusBar?: boolean;
  hasHeader?: boolean;
  children: React.ReactNode;
  headerProps?: HeaderViewProps;
  backgroundColor?: string;
}

const BaseView: React.FC<BaseViewProps> = ({
  children,
  hasHeader,
  headerProps,
}) => {
  const loader = useSelector(state => state?.home?.loader);

  return (
    <View style={[styles.container]}>
      <SafeAreaView style={[styles.container]}>
        {hasHeader && <HeaderView {...headerProps} />}
        <View
          style={hasHeader === true ? styles.parent : styles.headerLessParent}>
          {children}
        </View>

        {loader && <Loader isVisible={loader} />}
      </SafeAreaView>
    </View>
  );
};

export default BaseView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.bgColor,
  },
  parent: {
    flex: 1,
  },
  headerLessParent: {
    flex: 1,
  },
});
