import * as React from 'react';
import LoadingIndicator from '../Components/LoadingIndicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';

const OrganizationProfile = ({navigation}) => {
  const [loading, setLoading] = React.useState(false);
  const [organizationProfile, setOrganizationProfile] = React.useState();
  const [organizationName, setOrganizationName] = React.useState({
    name: 'ABCD',
  });
  const [organizationWebsite, setOrganizationWebsite] = React.useState({
    website: 'www.dummy.com',
  });
  const [organizationAbout, setOrganizationAbout] = React.useState({
    about: 'We work in mobile app development and web development.',
  });

  return loading ? (
    <LoadingIndicator />
  ) : (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={[
          {
            flexDirection: 'row',
            padding: 2,
            margin: 5,
            marginLeft: 280,
            justifyContent: 'flex-end',
            borderWidth: 1,
            borderRadius: 5,
            width: 70,
          },
        ]}>
        <Pressable
          onPress={() => {
            navigation.navigate('EditProfile');
          }}
          color={'#141413'}>
          <Text style={style.text}>Edit</Text>
        </Pressable>
        <Icon style={{marginTop: 8}} name="edit" size={20} color="black" />
      </View>
      <View style={{flex: 1}}></View>
      <Text style={style.heading}>Name: {organizationName.name}</Text>
      <Text style={style.h1}>Website: {organizationWebsite.website}</Text>
      {/* <Text style={style.h2}>Contact: dummy@mail.com</Text> */}
      <Text style={style.h3}>About: {organizationAbout.about}</Text>
      {/* <Text style={style.h4}>
        We are an international company looking to contribute in modern
        technology. If you think of yourself as a hard working developer, please
        do contact us.
      </Text>
      <Text style={style.h5}>
        We work in mobile app development and web development.
      </Text> */}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    margin: 15,
  },
  h1: {
    color: 'black',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  // h2: {
  //   color: 'black',
  //   margin: 10,
  //   marginBottom: 5,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  h3: {
    color: 'black',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  h4: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
    padding: 5,
  },
  h5: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
    padding: 5,
    justifyContent: 'center',
  },
  text: {
    width: 50,
    padding: 5,
    color: 'black',
    fontSize: 18,
  },
});

export default OrganizationProfile;
