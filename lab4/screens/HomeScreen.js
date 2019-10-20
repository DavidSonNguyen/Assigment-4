import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import { drawerNavigator } from 'react-navigation-drawer';
import { MonoText } from '../components/StyledText';
import { TODOS } from '../utils/Utils';
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      data: TODOS,
      textInput: '',
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <FlatList data={this.state.data} renderItem={({ item }) => {
            return (
              <View style={(
                {
                  flexDirection: 'row',
                  marginVertical: 5,
                  padding: 10,
                  marginHorizontal: 20,
                  backgroundColor: item.status === 'Done' ? '#00ff00' : '#0000ff',
                  borderRadius: 5,
                }
              )}>
                <View>
                  <Text style={styles.nameStyle} onPress={() => this.props.navigation.navigate('Detail', {data: item})}>{item.id}. {item.body}</Text>
                </View>
              </View>
            );
          }} />
          <TextInput style={styles.textInput} onChangeText={text => {
            this.setState(
              {
                textInput: text,
              }
            );
          }} />
          <TouchableOpacity style={styles.btnSubmit} onPress={() => {
            var item = {
              id: this.state.data.length + 1,
              status: 'Active',
              body: this.state.textInput,
            }

            const newData = [...this.state.data, item]
            this.setState(
              {
                data: newData,
              }
            );
          }}>
            <Text style={styles.textSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "stretch"
  },
  icBack: {
    alignSelf: "flex-start",
  },
  textMsg: {
    fontWeight: "700",
    width: "100%",
    alignItems: "center",
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  nameStyle: {
    fontSize: 16,
    fontWeight: "700",
    color: '#ffffff',
  },
  textInput: {
    height: 30,
    marginHorizontal: 20,
    borderColor: '#000000',
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  btnSubmit: {
    width: '50%',
    height: 50,
    backgroundColor: '#0000ff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  textSubmit: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
