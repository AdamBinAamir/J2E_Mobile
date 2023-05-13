import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  Pressable,
  Button,
  AsyncStorage,
} from 'react-native';
import LoadingIndicator from '../Components/LoadingIndicator';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

const Profile = ({ navigation }) => {
    const [fileResponse, setfileResponse] = useState([]);
   //FUNCTION OF GETTING FILE FROM PHONE

   const uploadFile = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      ToastAndroid.show('Files is Added', ToastAndroid.SHORT);
      setfileResponse(response);
    } catch (error) {
      console.log(error);
    }
  };
//API OF UPLOAD FILES TO SERVER

const sendFile = async () => {
  const data = new FormData();
  for (const res of fileResponse) {
    //Printing the log realted to the file
    // console.log('res : ' + JSON.stringify(res));
    var urii = res.uri;
    var namee = res.name;
    var typee = res.type;
    console.log('Type : ' + res.type);
    console.log('File Name : ' + res.name);
    console.log('File Size : ' + res.size);
    data.append('myFile', {
      name: namee,
      type: typee,
      uri: urii,
    });
  }
  console.log(JSON.stringify(data));

  try {
    const id = await AsyncStorage.getItem('id');
    console.log('id',id);
    await fetch(`https://4be6-206-84-141-94.ngrok-free.app/upload?user_id=${id}`, {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    ToastAndroid.show('Upload Successfully', ToastAndroid.SHORT);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};


  const [userProfile, setUserProfile] = useState(null);

  const fetchUserProfile = async () => {
    const id = await AsyncStorage.getItem('id');
    try {
      const response = await fetch(`https://4be6-206-84-141-94.ngrok-free.app/profile?user_id=${id}`);
      const data = await response.json();
      setUserProfile(data);
    } catch (error) {
      console.error('Failed to fetch user profile data', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  if (!userProfile) {
    // Render loading indicator while fetching data
    return (
      <View style={style.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
       <View
        style={[
          {
            flexDirection: 'row',
            padding: '0%',
            margin: '2%',
            alignSelf:'flex-end',
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
      
      {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          style={style.name}
          numberOfLines={3}
          ellipsizeMode={'middle'}>
          {file?.name}
        </Text>
      ))}
      <View
        style={[
          {
            marginTop: '3%',
            alignSelf: 'center',
            flexDirection: 'row',
          },
        ]}>
          
        <Button
          title="Upload CV"
          enctype="multipart/form-data"
          method="post"
          color={'black'}
          onPress={uploadFile}
        />

        <View style={style.submitButton}>
          <Button title="Submit" color={'black'} onPress={sendFile} />
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.title}>User Profile</Text>
        <Text>Name: {userProfile.name}</Text>
        <Text>Education: {userProfile.education}</Text>
        <Text>Phone: {userProfile.phone}</Text>
        <Text>Skills: {userProfile.skills}</Text>
        <Text>Experiences: {userProfile.experiences}</Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name:{
    alignSelf: 'center',
    flexDirection: 'row',
  },
  submitButton:{
    marginLeft:'3%',
  },
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
    color: 'white',
    backgroundColor:'black',
    fontSize: 18,
  },
});

export default Profile;
