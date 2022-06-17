import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, Dimensions, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');
import styles from './introStyle';

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "Multi-lateral intermediate moratorium",
    "image": "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxMDMtbWlzY3RoZW1ldDAwMTc3Yi1pbWFnZS5wbmc.png"
  },
  {
    "key": "3571747",
    "title": "Automated radical data-warehouse",
    "image": "https://images.rawpixel.com/image_png_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGQxMDMtbWlzY3RoZW1ldDAwMTQ4ZC1pbWFnZV8xLnBuZw.png"
  },
  {
    "key": "3571680",
    "title": "Inverse attitude-oriented system engine",
    "image": "../../assets/intro3.png"
  },
]

const Indicator = ({scrollX}) => {
  return <View style = {{position : 'absolute', bottom : 100, flexDirection : 'row'}}>
    {DATA.map((_, i) => {
      return <View
      key = {`indicator-${i}`} 
      style = {{
        height : 10,
        width : 10,
        borderRadius : 5,
        backgroundColor : '#656565',
        margin : 10
      }} 
      />
    })}
  </View>
}

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.logo}>
        <Image source={'../../assets/Group30.png'}></Image>
      </View>
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll = {Animated.event(
          [{nativeEvent : {contentOffset : {x : scrollX}}}],
          {useNativeDriver : false}
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => {
          return <View style={{ width, alignItems: "center" }}>
            <View style = {{marginTop : 250, }}>
              <Image source={{ uri: item.image }} style={{ width: width / 2, height: width / 2, resizeMode: "contain"}}></Image>
            </View>
            <View style = {{flex : 0.3}}>
              <Text>{item.title}</Text>
            </View>
          </View>
        }}
      />
      <Indicator scrollX = {scrollX} />
    </View>
  );
}