import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageBackground,
} from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, Images, SPACING } from '../theme/theme';
import CustomButton from '../component/customButton';

const { width } = Dimensions.get('window');

const slides = [
  { id: '1', text: 'Curated for Your Health', image: Images.Image_1 },
  { id: '2', text: 'Daily, Fresh Deliveries', image: Images.Image_2 },
  { id: '3', text: 'Simple Tracking & Wallet', image: Images.Image_3 },
];

const StartScreen = ({navigation}:any) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const flatListRef = useRef<FlatList>(null); // ✅ correct ref for FlatList
  const [confirm, setConfirm] = useState(null);
  useEffect(() => {
      let index = 1;
      const interval = setInterval(() => {
        if(index < slides.length){
          flatListRef.current?.scrollToIndex({index,animated: true });
          setCurrentIndex(index);
        index += 1;
        }else {
        clearInterval(interval);
      }
    }, 2000); 
    return () => clearTimeout(interval);
  }, []);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: { id: string; text: string; image: any } }) => (
    <ImageBackground source={item.image} style={{ height: 900 }}>
      <View style={styles.slide}>
        <Text style={styles.slideText}>{item.text}</Text>
        {renderDots()}
        <CustomButton
          title="Get Started"
          onPress={() => navigation.navigate('enternumber')}
          buttonStyle={styles.button}
          textStyle={styles.btntxt}
        />
      </View>
    </ImageBackground>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // ✅ correct ref applied
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SPACING.space_10 * 70,
  },
  slideText: {
    fontSize: FONTSIZE.size_24,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: SPACING.space_20,
    marginTop: SPACING.space_10,
  },
  dot: {
    height: SPACING.space_16,
    width: SPACING.space_16,
    backgroundColor: COLORS.White,
    margin: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_25,
  },
  activeDot: {
    backgroundColor: COLORS.AppColor,
    width: SPACING.space_10 * 4,
  },
  button: {
    paddingHorizontal: SPACING.space_20,
  },
  btntxt: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_16,
    fontWeight: '700',
    fontFamily: FONTFAMILY.openSans,
    paddingLeft: SPACING.space_18,
  },
});

export default StartScreen;
