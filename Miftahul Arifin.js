import React, {Component} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

let database = [
  {indonesia: 'Ayam', english: 'Chiken'},
  {indonesia: 'Anjing', english: 'Dog'},
  {indonesia: 'Kucing', english: 'Cat'},
  {indonesia: 'Kelinci', english: 'Rabbit'},
  {indonesia: 'Ikan', english: 'Fish'},
  {indonesia: 'Hiu', english: 'Shark'},
  {indonesia: 'Paus', english: 'Whale'},
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: database,
    };
  }

  search = () => {
    let data = database;
    data = data.filter(item =>
      item.indonesia.toLocaleLowerCase().includes(this.state.text),
    );
    this.setState({
      data: data,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#0288d1" barStyle="light-content" />
        <View style={{padding: 20, backgroundColor: '#03a9f4'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            KAMUSKU
          </Text>
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 10,
            marginVertical: 20,
            marginHorizontal: 10,
            borderRadius: 5,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Masukan kata kunci"
          onKeyPress={() => this.search()}
        />
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 3,
                marginVertical: 10,
                marginHorizontal: 20,
                padding: 10,
              }}
              onPress={() => this.props.navigation.navigate('Detail')}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.indonesia}
              </Text>
              <Text style={{fontSize: 16, marginTop: 5}}>{item.english}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.indonesia}
        />
      </View>
    );
  }
}
export default Home;
