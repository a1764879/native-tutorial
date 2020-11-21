import React from 'react';
import Menu from './MenuComponent'
import { DISHES } from '../shared/dishes'

const Main = () => {
    const dishes = DISHES

    return (
        <Menu dishes={dishes} />
    );
}

export default Main
