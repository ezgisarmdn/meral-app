import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Switch,
} from "react-native";
import { CheckBox, Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Feather";
import CircularProgress from "react-native-circular-progress-indicator";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        {/* <Card
          containerStyle={{
            height: 140,
            width: 360,
            borderRadius: 20,
            backgroundColor: "#f5f5f5",
            padding: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Title>
            <View style={{ flexDirection: "row", paddingLeft: 35 }}>
              <View style={{ paddingTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Bluetooth</Text>
              </View>
              <View style={{ paddingTop: 23, paddingLeft: 10 }}>
                <Icon name="bluetooth" size={20} />
              </View>
            </View>
          </Card.Title>
          <Card.Divider />
          <View style={{ flexDirection: "row", paddingBottom: 10 }}>
            <View style={{ paddingTop: 5 }}>
              <Text style={{ fontSize: 20 }}>Emniyet Kilidi</Text>
            </View>
            <View style={{ paddingLeft: 10, paddingTop: 1 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#3CCF4E" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </Card> */}
        <View style={{ flexDirection: "row", paddingRight: 10}}>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ fontSize: 20 }}>Bluetooth</Text>
          </View>
          <View style={{ paddingTop: 23, paddingLeft: 5 }}>
            <Icon name="bluetooth" size={20} />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 10}}>
          <View style={{ paddingTop: 5 }}>
            <Text style={{ fontSize: 20 }}>Emniyet Kilidi</Text>
          </View>
          <View style={{ paddingLeft: 10, paddingTop: 1 }}>
            <Switch
              trackColor={{ false: "#767577", true: "#3CCF4E" }}
              thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <CircularProgress
          value={0}
          radius={120}
          maxValue={10}
          title={"Saniye"}
          titleColor={"#000"}
          initialValue={10}
          progressValueColor={"#000"}
          activeStrokeWidth={15}
          inActiveStrokeWidth={15}
          duration={10000}
        />
        <Button
          title="KESİCİYİ AÇ"
          buttonStyle={{
            backgroundColor: "#3e3e3e",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 30,
            height: 60,
          }}
          containerStyle={{
            width: 250,
            marginHorizontal: 40,
            marginVertical: 10,
            paddingTop: 20,
          }}
          titleStyle={{ fontWeight: "bold" }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Card
          containerStyle={{
            height: 200,
            width: 360,
            borderRadius: 10,
            backgroundColor: "#f5f5f5",
            justifyContent: "center",
          }}
        >
          <Card.Title>
            <Text style={{ fontSize: 25, color: "#CF0A0A" }}>
              KESİCİ DEVREDE
            </Text>
          </Card.Title>
          <Card.Divider />
          <View>
            <Text style={styles.bottomText}>Kesici Lokasyon No:</Text>
            <Text style={styles.bottomText}>İşlemi Gerçekleştiren:</Text>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  topContainer: {
    height: 200,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  middleContainer: {
    height: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    height: 250,
    // backgroundColor: "#f5f5f5",
  },
  bottomText: {
    fontSize: 18,
    padding: 10,
  },
});
