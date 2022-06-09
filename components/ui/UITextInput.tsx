import React, { FC, useState } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";
import st from "../../constants/styles/styles";

interface Props {
  onChangeText: any;
  value: string;
  placeholder?: string;
  containerStyle?: ViewStyle;
}

const UITextInput: FC<Props> = ({
  onChangeText,
  value,
  placeholder,
  containerStyle,
}) => {
  const [borderColor, setBorderColor] = useState("#fff");

  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        onFocus={() => setBorderColor(st.colors.sec_clr)}
        onBlur={() => setBorderColor("#fff")}
        style={{ borderColor }}
      />
    </View>
  );
};

interface Styles {
  inputContainer: ViewStyle;
  input: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  inputContainer: {
    width: "100%",
    padding: st.indentations.ind_400,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
    elevation: 1,
  },
  input: {},
});

export default UITextInput;
