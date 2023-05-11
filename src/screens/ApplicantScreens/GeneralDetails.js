import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import FetchData from '../../network/fetchData';
import DocumentPicker, {types} from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LoadingIndicator from '../../Components/LoadingIndicator';
import axios from 'axios';

const GeneralDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [fileResponse, setfileResponse] = useState([]);

  const handleSubmit = async values => {
    setLoading(true);

    const body = {
      education: values.education,
      phone: values.phone,
    };
    try {
      // await dispatch(FetchData.profile(body));
      navigation.navigate('Previous Experience');
    } catch (error) {
      ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
    }
    setLoading(false);

    console.log(values);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validate = Yup.object().shape({
    education: Yup.string().required('Education is required'),
    phone: Yup.string()
      .required('Phone Number is required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'to short')
      .max(10, 'to long'),
  });

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
      await fetch('https://7daf-119-73-124-179.ap.ngrok.io/upload', {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      ToastAndroid.show('Upload Successfully', ToastAndroid.SHORT);
      navigation.navigate('Applicant Bottom Tab', {navigatedFrom: 'applicant'});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      {loading && <LoadingIndicator />}
      <Text style={style.textTitle}>General Details</Text>
      <View style={{marginTop: '3%'}} />
      <Formik
        initialValues={{
          education: '',
          phone: '',
        }}
        // validationSchema={validate}
        onSubmit={handleSubmit}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={style.textBody}>
            <View style={style.profileFieldContainer}>
              <Icon
                name="mortar-board"
                size={30}
                color="#262222"
                style={style.icon}
              />

              <TextInput
                style={{width: 200}}
                name="education"
                color="black"
                placeholder="Education"
                placeholderTextColor={'black'}
                onChangeText={handleChange('education')}
                onBlur={handleBlur('education')}
                value={values.email}></TextInput>
            </View>
            {errors.education && (
              <Text style={{color: 'red', marginLeft: 50}}>
                {errors.education}
              </Text>
            )}
            <View style={style.profileFieldContainer}>
              <Icon name="phone" size={30} color="#262222" style={style.icon} />

              <Text style={{color: 'black', paddingTop: 6}}>+92</Text>
              <TextInput
                style={{width: 200}}
                name="phone"
                color="black"
                placeholder="Phone Number"
                keyboardType="phone-pad"
                placeholderTextColor={'black'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}></TextInput>
            </View>
            {errors.phone && (
              <Text style={{color: 'red', marginLeft: 50}}>{errors.phone}</Text>
            )}
            <Pressable
              style={style.Button1}
              onPress={handleSubmit}
              color={'#141413'}>
              <Text style={style.text}>Next</Text>
            </Pressable>
            <Pressable
              style={style.Button2}
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
              color={'#141413'}>
              <Text style={style.text}>Cancel</Text>
            </Pressable>
            <View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: '46%',
                  fontStyle: 'italic',
                }}>
                Or
              </Text>
              <Text
                style={{
                  color: 'black',
                  marginLeft: '25%',
                  fontStyle: 'italic',
                }}>
                You can also upload your CV
              </Text>
            </View>
          </View>
        )}
      </Formik>

      {fileResponse.map((file, index) => (
        <Text
          key={index.toString()}
          // style={styles.uri}
          numberOfLines={1}
          ellipsizeMode={'middle'}>
          {file?.uri}
        </Text>
      ))}
      <View
        style={[
          {
            width: '50%',
            height: '50%',
            marginLeft: '5%',
            marginTop: '7%',
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
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 10,
  },
  textTitle: {
    fontFamily: 'Foundation',
    fontSize: 28,
    marginVertical: 10,
    marginBottom: 30,
    marginTop: 55,
    alignSelf: 'center',
    color: '#010614',
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
    width: 200,
    height: 45,
    borderRadius: 30,
    marginVertical: 10,
    marginBottom: 20,
    marginTop: 35,
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
  submitButton: {
    marginLeft: '5%',
  },
  textStyle: {
    color: 'black',
  },
});

export default GeneralDetails;
