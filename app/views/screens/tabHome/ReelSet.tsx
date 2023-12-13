import React, {useState, useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {dimens} from '../../../constants/dimens';
import Reel from './Reel';

interface ReelSetProps {}

const ReelSet = (props: ReelSetProps) => {
  const [screenDimens, setScreenDimens] = useState({
    width: null,
    height: null,
  });

  const reels = useRef([]);

  const _spin = () => {
    reels[0].scrollByOffset(10);
  };

  const _onLayout = (e: {nativeEvent: {layout: {width: any; height: any}}}) => {
    setScreenDimens({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  };

  const _renderReels = () => {
    const reelWidth = screenDimens?.width / dimens.REELS;
    const reelList = Array.apply(null, Array(dimens.REELS)).map((it, index) => {
      return (
        <Reel
          width={reelWidth}
          height={screenDimens?.height}
          key={index}
          index={index}
        //   ref={ref => (reels?.current[index] = ref)}
        />
      );
    });
    return <>{reelList}</>;
  };

  return (
    <View style={styles.container} onLayout={_onLayout}>
      {screenDimens?.width !== null &&
        screenDimens?.height !== null &&
        _renderReels()}
    </View>
  );
};

export default ReelSet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
