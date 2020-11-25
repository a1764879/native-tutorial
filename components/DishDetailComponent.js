import React from 'react'
import {View, Text, Image} from 'react-native'
import { Card} from 'react-native-elements'

function RenderDish(props) {
    const dish = props.dish

    if(dish) {
        return (
            <Card
                >
                    <Card.Title>{dish.name}</Card.Title>
                    <View>
                        <Image image={require('./images/uthappizza.png')} />
                        <Text style={{amrgin:10}}>
                            {dish.description}
                        </Text>
                    </View>
            </Card>

        )
    }
    else {
        return(<View/>)
    }
    
}

function DishDetail(props) {
    return (
        <RenderDish dish={props.dish} />
    )
}

export default DishDetail
