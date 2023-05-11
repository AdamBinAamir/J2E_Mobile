import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const App_Verify = ({navigation}) => {
  return (
    <View>
      <Text style={style.textTitle}>Please Verify your Email!</Text>
      <Text style={style.text1}>Already have an account?</Text>
              <Pressable
                style={style.Button1}
                onPress={() => navigation.navigate('Login')}
                color={'#141413'}>
                <Text style={style.text}>Login</Text>
              </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  textTitle: {
    fontFamily: 'Foundation',
    backgroundColor: '#010614',
    borderRadius: 30,
    fontSize: 18,
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '5%',
    paddingBottom: '5%',
    marginTop: 45,
    alignSelf: 'center',
    color: 'white',
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Foundation',
    fontSize: 22,
    marginTop: 10,
    paddingBottom: '1%',
    color: 'white',
  },
  Button1: {
    paddingRight:'8%',
    paddingLeft:'8%',
    paddingBottom:'2%',
    borderRadius: 30,
    marginVertical: 10,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: 'darkblue',
  },
  text1: {
    alignSelf: 'center',
    fontFamily: 'Foundation',
    fontSize: 16,
  },
});

export default App_Verify;
