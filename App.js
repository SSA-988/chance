import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import FadeIn from "react-native-fade-in-image";
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#F0F8FF",
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Image
          style={{ width: 180, height: 180, resizeMode: "center" }}
          source={require("./images/girl.jpg")}
        />
      </View>
      <FadeIn style={{ position: "absolute", top: 215, left: 140 }}>
        <Image
          style={{
            width: 120,
            height: 80,
            resizeMode:"cover"
          }}
          source={require("./images/logo.png")}
        />
      </FadeIn>

      <View style={{ padding: 10, marginTop: 10 }}>
        <Text style={{ fontSize: 48, fontWeight: "400" }}>
          The personality first Connecting app
        </Text>
        <Text style={{ marginTop: 10, color: "gray", fontSize: 16 }}>
          if you were a fruit, then you'd be a fine apple
        </Text>
      </View>

      <View style={{ padding: 10, marginTop: 10 }}>
        <Text>
          Already a user? Try{" "}
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#002D62" }}>
            Signing in
          </Text>
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
