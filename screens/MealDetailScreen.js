import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Button,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image />
      <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
        <DefaultText>{props.duration}m</DefaultText>
        <DefaultText>{props.complexity}</DefaultText>
        <DefaultText>{props.affordability}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text>List of ingredients...</Text>
      <Text>List of Steps</Text>
    </ScrollView>
  );
};

// add name to header
MealDetailScreen.navigationOptions = (naviationData) => {
  const mealId = naviationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => console.log('Mark as Favorite!')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
