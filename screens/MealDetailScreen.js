import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { MEALS } from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go Back to Categories" onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  )
};

// add name to header
MealDetailScreen.navigationOptions = (naviationData) => {
  const mealId = naviationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <Text>FAVS!</Text>,
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default MealDetailScreen;