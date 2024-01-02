import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import { styles } from "./Blpstyles";
export const isadroid = Platform.OS === "android" ? true : false;
function Blpages1() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/*this is first box  */}
        <View style={styles.box1}>
          <View style={styles.backcircle}></View>
          <View style={styles.logoimghead}>
            <View>
              <Image
                source={require("../../assests/logo.png")}
                style={styles.imglogo}
              />
            </View>
            <View style={styles.logoheaad}>
              <Text style={styles.logotheaad}>Zessti</Text>
              <Text style={styles.logotheaad}>Food Service</Text>
            </View>
          </View>
          {/* inside second box goes here */}
          <View style={styles.pageimg}>
            <Image
              source={require("../../assests/blpage1.png")}
              style={styles.innerpageimg}
            />
          </View>
        </View>
        {/* this second box */}
        <View style={styles.box2}>
          <View style={styles.box21}>
            <Text style={styles.b21header}>welcome</Text>
            <Text style={styles.b21text}>
              It’s a pleasure to meet you. We are excited that you’re here so
              let’s get started!
            </Text>
          </View>
          <View style={styles.box22}>
            <View style={styles.btncon1}>
              <Text style={styles.startbtn}>Get Started</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
export default Blpages1;
