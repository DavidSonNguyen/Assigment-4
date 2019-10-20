import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class DetailScreen extends React.Component {
    constructor(p) {
        super(p);
        this.state = {
            title: p.navi
        }
    }

    render() {
        const item = this.props.navigation.getParam('data');
        return (
            <View style={({
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            })}>
                <Text style={({
                    fontSize: 18,
                    fontWeight: 'bold'
                })}>{item.id}. {item.status}</Text>
                <Text style={({
                    fontSize: 20,
                })}>{item.body}</Text>
            </View>
        );
    }
}