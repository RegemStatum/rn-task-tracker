import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import st from "./constants/styles/styles";
import AppContext from "./context/AppContext";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <AppContext>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </AppContext>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: st.colors.bg_clr,
  },
  container: {
    padding: st.indentations.ind_200,
    flex: 1,
    backgroundColor: st.colors.bg_clr,
    alignItems: "center",
    justifyContent: "center",
  },
});
