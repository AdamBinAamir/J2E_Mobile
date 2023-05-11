import * as React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  Pressable,
} from 'react-native';
import FetchData from '../network/fetchData';
import {useDispatch} from 'react-redux';
import LoadingIndicator from '../Components/LoadingIndicator';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  // const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const [profile, setProfile] = React.useState({
    name: 'John',
    email: 'john@gmail.com',
    contact: '0333-333333',
    education: ['BS', 'MS'],
    skill: [''],
    experience: [''],
  });

  // React.useEffect(() => {
  //   getProfile();
  // }, []);

  const getProfile = async () => {
    setLoading(true);

    try {
      // const profileData = await FetchData.getProfile();
      setTimeout(1000, () => {
        setProfile(profileData);
        setLoading(false);
      });
    } catch (error) {
      ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
    }
  };

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
            navigation.navigate('EditProfile', {profile});
          }}
          color={'#141413'}>
          <Text style={style.text}>Edit</Text>
        </Pressable>
        <Icon style={{marginTop: 8}} name="edit" size={20} color="black" />
      </View>

      <View style={{flex: 1}}></View>
      <Text style={style.heading}>Name: {profile.name}</Text>
      <Text style={style.h1}>Email: {profile.email}</Text>
      <Text style={style.h2}>Contact: {profile.contact}</Text>
      <Text style={style.h3}>Education: </Text>
      <Text style={style.h4}>- BS - Air University</Text>
      <Text style={style.h5}>- MS - In progress</Text>
      <Text style={style.h6}>Skills: {profile.skill}</Text>
      <Text style={style.h7}>- Mysql</Text>
      <Text style={style.h8}>- Python</Text>
      <Text style={style.h9}>- Devops</Text>
      <Text style={style.h10}>Experience: {profile.experience}</Text>
      <Text style={style.h11}>- FrontEnd Developer - Synergy</Text>
      <Text style={style.h12}>- SQA - Techverx</Text>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
  },
  h1: {
    color: 'black',
    margin: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  h2: {
    color: 'black',
    margin: 10,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: 'bold',
  },
  h3: {
    color: 'black',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  h4: {
    color: 'black',
    fontSize: 15,
    marginLeft: 13,
  },
  h5: {
    color: 'black',
    fontSize: 15,
    marginLeft: 13,
  },
  h6: {
    color: 'black',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  h7: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
  },
  h8: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
  },
  h9: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
  },
  h10: {
    color: 'black',
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  h11: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
  },
  h12: {
    color: 'black',
    marginLeft: 13,
    fontSize: 15,
  },
  text: {
    width: 50,
    padding: 5,
    color: 'black',
    fontSize: 18,
  },
});

export default Profile;
