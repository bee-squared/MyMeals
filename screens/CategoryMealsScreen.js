import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoryMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Screen!</Text>
      <Button title="Go to Meal Detail!" onPress={() => {
        props.navigation.navigate({routeName: 'MealDetail'})
      }} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CategoryMealScreen;