import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';


function Screen1({navigation, route}) {
  return (
    <SafeAreaView>
      <Image source={route.params?.image?? require('./assets/vs_blue.png')} style={styles.imgae}></Image>
      <Text style={styles.textPhone}>Điện thoại VSmart Joy 3 - Hãng chính hãng</Text>
      <View style={styles.viewRate}>
        <Image source={require('./assets/star.png')} style={styles.imageStar}></Image>
        <Image source={require('./assets/star.png')} style={styles.imageStar}></Image>
        <Image source={require('./assets/star.png')} style={styles.imageStar}></Image>
        <Image source={require('./assets/star.png')} style={styles.imageStar}></Image>
        <Image source={require('./assets/star.png')} style={styles.imageStar}></Image>
        <Image source={require('./assets/star.png')} style={styles.imageStar}></Image>
        <Text style={styles.textRate}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.viewRate}>
        <Text style={styles.textPrice}>1.790.000 đ</Text>
        <Text style={{fontSize: 25,fontWeight: 'bold',margin: 10,}}><s>1.790.000 đ</s></Text>
      </View>
      <View style={styles.viewRate}>
        <Text style={{marginLeft: 20, fontSize: 12, fontWeight: 'bold', color: 'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./assets/Group 1.png')} style={{width: 20, height: 20, marginLeft: 10}}></Image>
      </View>
      <View style={styles.buttonColor}>
        <Pressable>
          <Text style={{textAlign: 'center', margin: 3, }} 
            onPress={()=>navigation.navigate("Screen2")}>4 MÀU-CHỌN MÀU</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
  
}

function Screen2({navigate, route}) {
  const [image, setImage] = React.useState(require("./assets/vs_blue.png"));
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, flexDirection: "row", margin: "3px" }}>
        <Image source={image} style={{ width: "112px", height: "132px" }} />
        <Text
          style={{
            marginTop: "17px",
            marginLeft: "17px",
            fontSize: "15px",
            fontWeight: "Roboto",
          }}
        >
          Điện Thoại Vsmart Joy 3<br />
          Hàng chính hãng
        </Text>
      </View>
      <StatusBar style="auto" />

      <View style={{ flex: 9, backgroundColor: "#C4C4C4", height: 5000 }}>
        <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#C5F1FB",
            }}
            onPress={() => setImage(require("./assets/vs_silver.png"))}
          ></Pressable>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#F30D0D",
            }}
            onPress={() => setImage(require("./assets/vs_red.png"))}
          ></Pressable>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#000000",
            }}
            onPress={() => setImage(require("./assets/vs_black.png"))}
          ></Pressable>
          <Pressable
            style={{
              marginTop: "10px",
              width: "85px",
              height: "80px",
              backgroundColor: "#234896",
            }}
            onPress={() => setImage(require("./assets/vs_blue.png"))}
          ></Pressable>
          <Pressable
            style={{
              width: "326px",
              height: "44px",
              backgroundColor: "#1952E2",
              borderRadius: "10px",
              marginTop: 15,
            }}
            onPress={() => {
              navigation.navigate("Screen_1", { image: image });
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                marginTop: 7,
              }}
            >
              XONG
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'>
        <Stack.Screen name='Screen1' component={Screen1}/>
        <Stack.Screen name='Screen2' component={Screen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imgae: {
    width: 301,
    height: 361,
    marginLeft: 29,
  },
  textPhone: {
    fontWeight: 400,
    margin: 10,
  },
  viewRate: {
    flexDirection: 'row',
  },
  imageStar: {
    width: 23,
    height: 25,
    // marginTop: 100,
    marginLeft: 10,
  },
  textRate: {
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
  },
  textPrice: {
    fontSize: 30,
    fontWeight: 700,
    margin: 10,
  },
  buttonColor: {
    // padding: 10,
    borderWidth:1,
    width: '90%',
    height:33,
    borderStyle: 'solid',
    margin: 20,
  }
});
