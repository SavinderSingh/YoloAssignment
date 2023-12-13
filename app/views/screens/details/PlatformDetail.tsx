/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BaseView from '../../hoc/BaseView';
import {images} from '../../../constants/images';
import {colors} from '../../../constants/colors';
import {fonts} from '../../../constants/fonts';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import ReadMore from '../../../utils/ReadMore';
import {planDetailJson} from '../../../json/categoriesJson';
import PlanItem from '../../items/PlanItem';
import ButtonView from '../../components/ButtonView';
import PlanPurchaseSuccessModal from '../../modals/PlanPurchaseSuccessModal';
import {useDispatch} from 'react-redux';
import {setLoader} from '../../../redux/slices/homeSlice';

const PlatformDetail = props => {
  const {platform} = props.route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(planDetailJson[0]);

  const _onGoBack = () => navigation.goBack();

  const _renderPlanItem = ({item}: any) => {
    const isSelected = selectedPlan ? selectedPlan.id === item?.id : false;
    return (
      <PlanItem
        item={item}
        isSelected={isSelected}
        onPress={() => _onSelectPlan(item)}
      />
    );
  };

  const _onSelectPlan = (item: object) => {
    setSelectedPlan(item);
  };

  const _onPurchasePlan = () => {
    dispatch(setLoader(true));
    setTimeout(() => {
      dispatch(setLoader(false));
      setIsSuccessModalVisible(true);
    }, 3000);
  };

  return (
    <BaseView>
      <ScrollView style={styles.container}>
        <View style={{height: 360}}>
          <Image source={images.sampleImage} style={styles.sampleImage} />
          <TouchableOpacity style={styles.backIcon} onPress={_onGoBack}>
            <Icon
              name="arrow-back"
              type="material"
              color={colors.light.accent}
            />
          </TouchableOpacity>
          <View style={styles.view}>
            <Image style={styles.platformImage} source={platform?.image} />
            <View style={{paddingLeft: 16}}>
              <Text style={styles.episode}>
                the married woman streaming on{' '}
              </Text>
              <Text style={styles.platformName}>{platform?.name}</Text>
            </View>
          </View>
        </View>

        <ReadMore numberOfLines={3}>
          <Text style={styles.description}>
            {description} {description}
          </Text>
        </ReadMore>

        <Text style={styles.subHeading}>
          select plan based on your preference
        </Text>

        <FlatList data={planDetailJson} renderItem={_renderPlanItem} />
      </ScrollView>
      <View style={styles.bottomRow}>
        <ButtonView
          title="buy once"
          onPress={() => _onPurchasePlan()}
          containerStyle={{flex: 1, marginRight: 8}}
        />
        <ButtonView
          title="subscribe"
          onPress={() => _onPurchasePlan()}
          containerStyle={{flex: 1, marginLeft: 8}}
          buttonStyle={{
            backgroundColor: colors.light.primary,
            borderColor: colors.light.primary,
          }}
        />
      </View>
      <PlanPurchaseSuccessModal
        isVisible={isSuccessModalVisible}
        data={platform}
        subscription={selectedPlan}
        onClose={() => {
          setIsSuccessModalVisible(false);
          navigation.goBack();
        }}
      />
    </BaseView>
  );
};

export default PlatformDetail;

const styles = StyleSheet.create({
  container: {},
  sampleImage: {
    width: '100%',
    flex: 1,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
    paddingHorizontal: 16,
  },
  platformImage: {
    height: 64,
    width: 64,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
  },
  episode: {
    color: colors.light.accent,
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  platformName: {
    color: colors.light.accent,
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },
  description: {
    color: colors.light.accent,
    fontFamily: fonts.medium,
    fontSize: 12,
  },
  backIcon: {
    position: 'absolute',
    top: 8,
    left: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.light.borderColor,
    zIndex: 1000,
  },
  subHeading: {
    color: colors.light.lightTextColor,
    fontFamily: fonts.medium,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

const description =
  'At vero eos et accusamus et iusto odio dignis sim os ducimus qui blanditiis praese ntium vol uptat um deleniti atque corrupti quos dolores etquas molestias excepturi sint occaecati cu piditate non provident, similique';
