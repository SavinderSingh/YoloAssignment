import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {dimens} from '../../../constants/dimens';
import Symbol from './Symbol';

interface ReelProps {
  height: number;
  width: number;
  index: number;
}

const Reel = (props: ReelProps) => {
  const symbols = 'BEC';
  const symbolHeight = props.height / dimens.SYMBOL;
  const reelSymbols = symbols.repeat(dimens.REELS_REPEAT).split('')

  return (
    <View
      style={[styles.container, {width: props.width, height: props.height}]}>
      <View style={{width: props.width, height: reelSymbols.length * symbolHeight}}>
        {symbols.split('').map((it, index) => {
          return (
            <Symbol
              height={symbolHeight}
              width={props.width}
              symbol={it}
              index={index}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Reel;

const styles = StyleSheet.create({
  container: {},
});
