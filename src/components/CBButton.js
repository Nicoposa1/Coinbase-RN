import {
  View,
  Text,
  Animated,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import React from "react";
import * as Haptics from "expo-haptics";
import Colors from "../constants/Colors";

const CBButton = ({ title }) => {
  const animatedValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableHighlight
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{borderRadius: 10}}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
      >
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    borderRadius: 8,
  },
  button: {
    width: "100%",
    height: 57,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.cbBlue,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CBButton;