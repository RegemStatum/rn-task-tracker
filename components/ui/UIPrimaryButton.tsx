import React, { FC } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import st from "../../constants/styles/styles";

interface Props {
  handlePress: any;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const UIPrimaryButton: FC<Props> = ({
  children,
  handlePress,
  containerStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: st.colors.pr_clr }}
      >
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </Pressable>
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: "100%",
    borderRadius: 4,
    backgroundColor: st.colors.sec_clr,
  },
  text: {
    padding: st.indentations.ind_400,
    textAlign: "center",
    color: "#fff",
  },
});

export default UIPrimaryButton;
