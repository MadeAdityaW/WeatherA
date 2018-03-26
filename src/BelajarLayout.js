import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class BelajarLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
  + this.state.city +
  '&appid=c252c55f9a3fae6705c57934ea55f006&units=metric';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
}
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.head}>
          <Text style={styles.textHead} >
          Weather</Text>
        </View>
        <View style={styles.sider}>
          <View style={styles.inputan}>
            <TextInput
            style={styles.isian}
            placeholder="Masukkan Nama Kota"
            onChangeText={(city) => this.setState({ city })}
            />
            <Button

              onPress={() => this.getWeather()}
              title="Cari"
              accessibilityLabel="Klik untuk menghitung"
            />
          </View>
          <View style={styles.hasil}>
            <Text style={{ padding: 10, fontSize: 15 }} >
            {this.state.city} {'\n'}
           Suhu{'\t'}{'\t'}: {this.state.forecast.temp} {'\n'}
           Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {'\n'}
           Deskripsi{'\t'}: {this.state.forecast.description}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter} >
          #JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#2979FF',
    flex: 1,
    flexDirection: 'column'
  },
  head: {
    flex: 0.4, //
    backgroundColor: '#18FFFF',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  sider: {
    backgroundColor: '#18FFFF',
    flex: 5,
  },

  footer: {
    flex: 0.4, // lebar box lebih besar dari 2
    backgroundColor: '#18FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHead: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  textFooter: {
    fontSize: 25,
    color: '#000',
    fontWeight: 'bold',
  },
  inputan: {
    backgroundColor: '#FFFFF0',
    flex: 1.5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hasil: {
    backgroundColor: '#FFFFF0',
    flex: 4,
    margin: 10,
  },
  isian: {
    backgroundColor: '#fff',
    width: 200,
    padding: 10,
    margin: 15,
  },
});
