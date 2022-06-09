import React, { FC } from "react";
import { Text, TextStyle, StyleSheet, View, ViewStyle } from "react-native";
import st from "../../constants/styles/styles";

interface Props {
  containerStyle?: ViewStyle;
}

const Title: FC<Props> = ({ children, containerStyle }) => {
  return (
    <View style={[styles.titleContainer, containerStyle]}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

interface Styles {
  titleContainer: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  titleContainer: {},
  title: {
    fontSize: 32,
    fontWeight: "500",
    color: st.colors.text_clr,
    textAlign: "center",
  },
});

export default Title;
