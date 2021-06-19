import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './PlayVideoScreen.style';
import {IC_ARROW_BACK} from '../../../assets';
import PlayVideo from '../../../components/PlayVideo';
import {Colors} from '../../../themes';
import {ExerciseDetailType} from '../../../components/ExerciseDetailItem';

interface Props {
  navigation: any;
  route: any;
}
const PlayVideoScreen = (props: Props) => {
  const {navigation, route} = props;
  const {
    data,
    exerciseId,
    target,
  }: {
    data: ExerciseDetailType[];
    itemRoot: ExerciseDetailType;
    exerciseId: number;
    target: string;
  } = route.params;
  //state
  const [indexRoot, setIndexRoot] = useState(0);

  const _goBack = () => {
    navigation.goBack();
  };

  const _renderItemBar = (index: number) => (
    <View
      key={index.toString()}
      style={[
        styles.bar,
        {
          backgroundColor:
            index <= indexRoot ? Colors.accent_color : Colors.grey,
        },
      ]}
    />
  );

  const _renderBar = () => (
    <View style={styles.wrapBar}>
      {data.map((item, index) => _renderItemBar(index))}
    </View>
  );

  const _renderHeader = () => {
    return (
      <View style={styles.wrapHeader}>
        <TouchableOpacity onPress={_goBack}>
          <Image
            resizeMode="contain"
            source={IC_ARROW_BACK}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{data[indexRoot].name}</Text>
        <View style={styles.headerRight} />
      </View>
    );
  };

  const _onPressPre = () => {
    if (indexRoot > 0) {
      setIndexRoot(indexRoot - 1);
    }
  };

  const _onPressNext = (isEnd: boolean) => {
    if (isEnd && indexRoot === data.length - 1) {
      navigation.navigate('HowYouFeelScreen', {
        exerciseId,
        target,
      });
    } else if (indexRoot < data.length - 1) {
      setIndexRoot(indexRoot + 1);
    }
  };

  const _renderBody = () => (
    <View style={styles.body}>
      <PlayVideo
        data={data[indexRoot]}
        onPressPre={_onPressPre}
        onPressNext={_onPressNext}
        isLast={indexRoot === data.length - 1}
        isFirst={indexRoot === 0}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      {_renderBar()}
      {_renderBody()}
    </View>
  );
};
export default PlayVideoScreen;
