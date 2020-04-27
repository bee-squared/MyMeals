import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          })
        }}
      />
    );
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
      style={{marginTop: 20}}
    />
  );
};

// defined property respected by react navigation (see official docs on website)
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Menu' iconName='ios-menu' onPress={()=>{}} />
    </HeaderButtons>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;