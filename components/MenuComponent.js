import React from 'react';
import {View, FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'

const Menu = (props) => {

    const renderMenuItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                hideChevron={true}
                onPress={()=>props.onPress(item.id)}>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>    
            </ListItem>
        )
    }

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item=> item.id.toString()}
        />
    );
}

export default Menu;
