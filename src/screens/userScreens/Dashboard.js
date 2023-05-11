import * as React from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoggedInAction} from '../../redux/reduxSlice/user';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const Separator = () => <View style={style.separator} />;
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={[style.container]}>
        <Text style={style.textTitle}>"Hii there!!"</Text>
      </View>
      <View style={style.styleLoginBtn}>
        <Button style={style.styleBtn}
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Applicant"
          color={'#14130f'}
        />
        <Separator />
        <Button
          onPress={() => {
            navigation.navigate('Login_Org');
          }}
          title="Organization"
          color={'#14130f'}
        />
        
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontStyle: 'italic',
    fontSize: 28,
    marginVertical: '5%',
    marginBottom: '28%',
    marginTop: '22%',
    alignSelf: 'center',
    color: '#01050d',
  },
  separator: {
    marginVertical: '3%',
  },
  styleLoginBtn: {
    width: '72%',
    marginTop: '5%',
    marginLeft: '14%',
    marginRight: '14%',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'black', //button background/border color
    overflow: 'hidden',
    marginBottom: '10%',
    justifyContent: 'center',
  },
});

export default Dashboard;
