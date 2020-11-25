import React, {useState} from 'react';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'
import DishDetail from './DishDetailComponent';
import {View} from 'react-native'

const Main = () => {
    const dishes = DISHES
    const [selectedDish, setSelectedDish] = useState(null)

    function onDishSelect(dishId) {
        setSelectedDish(dishId)
    }

    return (
        <View>
            <Menu dishes={dishes} 
                onPress={(dishId) => onDishSelect(dishId)}
            />
            <DishDetail dish={dishes.filter((dish)=> dish.id === selectedDish )[0]} />
        </View>
    );
}

export default Main
