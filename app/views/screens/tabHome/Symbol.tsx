import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {images} from '../../../constants/images';

interface SymbolProps {
  height: number;
  width: number;
  index: number;
  symbol: string;
}

const Symbol = (props: SymbolProps) => {
  const _getImage = () => {
    switch (props.symbol) {
      case 'B':
        return images.spinBanana;
      case 'E':
        return images.spinBomb;
      case 'C':
        return images.spinCrown;
      default:
        return images.spinBanana;
    }
  };

  const imageSource = _getImage();
  return (
    <View style={styles.container}>
      <Image
        style={{height: 48, width: 48}}
        source={imageSource}
      />
    </View>
  );
};

export default Symbol;

const styles = StyleSheet.create({
  container: {},
});
