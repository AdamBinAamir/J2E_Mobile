import React, {useState} from 'react';
import {
  Button,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ToastAndroid,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LoadingIndicator from '../../Components/LoadingIndicator';

const PreviousExperience = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [experiences, setExperiences] = useState([]);
  const [experience, setExperience] = useState('');

  const error = async () => {
    if(experiences == '')
   {
    ToastAndroid.show('No data Entered', ToastAndroid.LONG);
    
   }
   else{
    handleRequiredExperiences();
   }
  };

  const handleRequiredExperiences = async () => {
    setLoading(true);
    const id = await AsyncStorage.getItem('id');
    try {
      const response = await fetch('https://59ec-119-73-100-124.ngrok-free.app/profile/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: id,
          experiences: experiences,
        }),
      });
      const body = {user_id: id, experiences: experiences}; 
      console.log('data',body);
      console.log('user_id:', id);
      setLoading(false);
      ToastAndroid.show('Experiences Saved', ToastAndroid.SHORT);
      navigation.navigate('PreviousSkills');
    } catch (error) {
      console.log('invalid Credentials');
      setLoading(false);
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  const addExperience = () => {
    if (experience.trim() === '') {
      return;
    }
    setExperiences([...experiences, experience]); // Make sure experience is a string
    setExperience('');
  };

  return (
<ScrollView style={[style.container ,{ backgroundColor: 'white' }]}>
  {loading && <LoadingIndicator />}
  <Text style={style.textTitle}>Previous Experience</Text>
  <View style={{ marginTop: 20 }} />
  <View >
  {experiences.map((experience, index) => (
    <Text style={{ fontFamily: 'Foundation',
    backgroundColor: 'darkblue',
        borderRadius: 5,
    fontSize: 16,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
    color:'white',
    alignSelf: 'center',
    marginBottom: '3%',}} key={index}>{experience}</Text>
  ))}
</View>
  
    <View style={style.profileFieldContainer}>
      <Icon name="history" size={30} color="#262222" style={style.icon} />
      <TextInput
        style={{ width: 200 }}
        name="experience1"
        color="black"
        placeholder="Experience"
        placeholderTextColor={'black'}
        onChangeText={(text) => setExperience(text)} 
        value={experience}
      />
    </View>
    <Pressable style={style.Button12} onPress={addExperience} color={'#141413'}>
      <Text style={style.text}>Add Experience</Text>
    </Pressable>
    <Pressable style={style.Button1} onPress={error} color={'#141413'}>
      <Text style={style.text}>Next</Text>
    </Pressable>
</ScrollView>
        );
      };
    const style = StyleSheet.create({
      container: {
        flex: 1,
        marginVertical: 10,
      },
      textTitle: {
        fontFamily: 'Foundation',
      backgroundColor: '#010614',
      borderRadius: 10,
      fontSize: 28,
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: '5%',
      paddingBottom: '5%',
      marginTop: 15,
      alignSelf: 'center',
      color: 'white',
      marginBottom: '3%',
      },
      TextInput: {
        width: 270,
        height: 45,
        margin: 10,
        borderWidth: 3,
        padding: 10,
        color: '#02050d',
        borderRadius: 50,
        alignSelf: 'center',
      },
      Button1: {
        width: 150,
        height: 45,
        borderRadius: 30,
        marginVertical: 10,
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 2,
        backgroundColor: '#010614',
        alignSelf: 'center',
      },
      Button12: {
        width: 200,
        height: 45,
        borderRadius: 30,
        marginTop: 20,
        borderWidth: 2,
        backgroundColor: '#010614',
        alignSelf: 'center',
      },
      Button2: {
        width: 200,
        height: 45,
        borderRadius: 30,
        marginVertical: 10,
        marginBottom: 20,
        marginTop: 5,
        borderWidth: 2,
        backgroundColor: '#010614',
        alignSelf: 'center',
      },
      text: {
        alignSelf: 'center',
        fontFamily: 'Foundation',
        fontSize: 22,
        marginTop: 10,
        color: 'white',
      },
      profileFieldContainer: {
        display: 'flex',
        borderWidth: 3,
        flexDirection: 'row',
        borderRadius: 30,
        margin: 10,
        height: 45,
        paddingHorizontal: 15,
        paddingTop: 3,
        width: 270,
        color: '#262222',
        alignSelf: 'center',
      },
      icon: {
        marginRight: 5,
      },
    });

export default PreviousExperience;