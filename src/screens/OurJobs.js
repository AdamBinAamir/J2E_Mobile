import * as React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

const OurJobs = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
      <View style={{marginTop: 15}} />
      <Text style={style.textTitle}>Jobs of *Organization Name*</Text>

      <View style={style.cardView}>
        <Text style={style.h1}>Software Engineer</Text>
        <Text style={style.h2}>Islamabad</Text>
        <Text style={style.h3}>Salary: 50,000</Text>
        <Text style={style.h4}>Description:</Text>
        <Text style={style.h5}>
          We need a software Engineer to work in paced environment.
        </Text>
        <Text style={style.h6}>Status: Interviewing</Text>
        <View style={style.cardButton}>
          <Button title="Update Status" color="#1a1c1b" />
        </View>
      </View>

      <View style={{marginTop: 0}} />
      <View style={style.cardView}>
        <Text style={style.h1}>Developer</Text>
        <Text style={style.h2}>Islamabad</Text>
        <Text style={style.h3}>Salary: 50,000</Text>
        <Text style={style.h4}>Description:</Text>
        <Text style={style.h5}>
          We need a developer to work in paced environment.
        </Text>
        <Text style={style.h6}>Status: Closed</Text>
        <View style={style.cardButton}>
          <Button title="Update Status" color="#1a1c1b" />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 22,
    margin: 10,
    padding: 10,
    alignSelf: 'flex-start',
    color: '#010614',
  },
  cardView: {
    display: 'flex',
    height: 300,
    margin: 15,
    backgroundColor: 'lightgray',
    padding: 5,
  },
  h1: {
    color: 'black',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    color: 'black',
    margin: 10,
    fontSize: 15,
  },
  h3: {
    color: 'black',
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
  },
  h4: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 15,
    margin: 10,
    color: 'black',
  },
  h6: {
    fontSize: 15,
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  cardButton: {
    width: 160,
    alignSelf: 'center',
  },
});

export default OurJobs;
