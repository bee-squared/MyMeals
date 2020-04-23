import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity
    style={styles.gridItem}
    onPress={() => {
      props.navigation.navigate({ routeName: 'CategoryMeals', params: {
        categoryId: itemData.item.id,
      }})
    }}
  >
    <View>
      <Text>{itemData.item.title}</Text>
    </View>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({});

export default CategoryGridTile;