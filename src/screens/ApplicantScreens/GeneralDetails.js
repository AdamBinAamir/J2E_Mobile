import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
  ScrollView,
  ToastAndroid,AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LoadingIndicator from '../../Components/LoadingIndicator';

  const GeneralDetails = ({navigation}) => {
    
    const [hidePass, setHidePass] = useState(true);
    const [loading, setLoading] = useState(false);
  const [education, setEducation] = useState('');
  const [phone, setPhone] = useState('');

  const handleDetails = async () => {
    setLoading(true);
    const id = await AsyncStorage.getItem('id');
    try {
      const response = await fetch('https://4be6-206-84-141-94.ngrok-free.app/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: id,
          education: education,
          phone: phone,
        }),
      });
      setLoading(false);
      navigation.navigate('PreviousExperience');
     console.log('id:',id);
    } catch (error) {
      console.log('invalid Credentials');
      setLoading(false);
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  return (
    <View style={[style.container,{backgroundColor: 'white'}]}>
           {loading && <LoadingIndicator />}
           <Text style={style.textTitle}>General Details</Text>
           <View style={{marginTop: '3%'}} />
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
                    onChangeText={(text) => setEducation(text)}
                    ></TextInput>
                </View>
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
                    onChangeText={(text) => setPhone(text)}
                    ></TextInput>
                </View>
              
                <Pressable
                  style={style.Button1}
                  onPress={handleDetails}
                  color={'#141413'}>
                  <Text style={style.text}>Next</Text>
                </Pressable>
          </View>
        </View>
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


// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   Image,
//   View,
//   Pressable,
//   TextInput,
//   ToastAndroid,
// } from 'react-native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {setLoggedInAction} from '../redux/reduxSlice/user';
// import {useDispatch} from 'react-redux';
// import FetchData from '../network/fetchData';
// import LoadingIndicator from '../Components/LoadingIndicator';
// const Login = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [hidePass, setHidePass] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async values => {
//     setLoading(true);

//     const body = {
//       email: values.email,
//       pass: values.password,
//     };
//     try {
//       const res = await dispatch(FetchData.login(body));
//       console.log(res)
//       // await dispatch(FetchData.login(body));
//       // await AsyncStorage.setItem('token', value);
//     } catch (error) {
//       ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
//     }

//     setLoading(false);
//   };

//   const validate = Yup.object().shape({
//     email: Yup.string().email('Email is invalid').required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   return (
//     <View style={style.container}>
//       <Image
//         source={require('../assets/login.png')}
//         resizeMode="center"
//         style={style.image}
//       />
//       {loading && <LoadingIndicator />}
//       <Text style={style.textTitle}>Welcome</Text>
//       <Formik
//         initialValues={{
//           email: '',
//           password: '',
//         }}
//         validationSchema={validate}
//         onSubmit={handleSubmit}>
//         {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//           <View style={style.textBody}>
//             <View style={style.loginFieldContainer}>
//               <Icon name="user" size={30} color="#262222" style={style.icon} />
//               <TextInput
//                 style={{width: 200}}
//                 name="email"
//                 color="#262222"
//                 placeholder="Email"
//                 keyboardType="email-address"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('email')}
//                 onBlur={handleBlur('email')}
//                 value={values.email}></TextInput>
//             </View>
//             {errors.email && (
//               <Text style={{color: 'red', marginLeft: 20}}>{errors.email}</Text>
//             )}
//             <View
//               style={{
//                 ...style.loginFieldContainer,
//                 justifyContent: 'space-between',
//               }}>
//               <View style={{flexDirection: 'row'}}>
//                 <Icon
//                   name="lock"
//                   size={30}
//                   color="#262222"
//                   style={style.icon}
//                 />
//                 <TextInput
//                   style={{width: 200}}
//                   name="password"
//                   color="#262222"
//                   placeholder="Password"
//                   placeholderTextColor={'black'}
//                   onChangeText={handleChange('password')}
//                   onBlur={handleBlur('password')}
//                   value={values.password}
//                   secureTextEntry={hidePass ? true : false}></TextInput>
//               </View>
//               <Icon
//                 style={style.eyeSlash}
//                 name={hidePass ? 'eye-slash' : 'eye'}
//                 size={15}
//                 color="#262222"
//                 onPress={() => setHidePass(!hidePass)}
//               />
//             </View>
//             {errors.password && (
//               <Text style={{color: 'red', marginLeft: 20}}>
//                 {errors.password}
//               </Text>
//             )}

//             <Pressable
//               style={style.Button}
//               onPress={handleSubmit}
//               color={'#141413'}>
//               <Text style={style.text}>Sign In</Text>
//             </Pressable>
//           </View>
//         )}
//       </Formik>
//       <View style={{width: '50%'}}>
//         <Text
//           style={style.textBody}
//           onPress={() => {
//             navigation.navigate('Forgot Password?');
//           }}>
//           Forgot Password?
//         </Text>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           marginVertical: 5,
//           alignSelf: 'center',
//         }}>
//         <Text style={style.textBody}>Don't Have an account</Text>
//         <Text
//           style={[style.textBody, {color: 'blue'}]}
//           onPress={() => {
//             navigation.navigate('SignUp');
//           }}>
//           Sign Up
//         </Text>
//       </View>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   image: {
//     width: 200,
//     height: 190,
//     marginBottom: 10,
//   },
//   textTitle: {
//     fontFamily: 'Foundation',
//     fontSize: 40,
//     marginVertical: 10,
//     marginBottom: 30,
//     color: '#01050d',
//   },
//   textBody: {
//     fontFamily: 'Foundation',
//     fontSize: 15,
//     marginTop: 1,
//     marginBottom: 5,
//     marginLeft: 2,
//     color: '#010614',
//     alignSelf: 'center',
//   },
//   loginFieldContainer: {
//     display: 'flex',
//     borderWidth: 3,
//     flexDirection: 'row',
//     borderRadius: 30,
//     margin: 10,
//     height: 45,
//     paddingHorizontal: 15,
//     paddingTop: 3,
//     width: 270,
//     color: '#262222',
//   },
//   icon: {
//     marginRight: 5,
//   },
//   Button: {
//     width: 200,
//     height: 45,
//     borderRadius: 30,
//     marginVertical: 10,
//     marginBottom: 20,
//     borderWidth: 2,
//     backgroundColor: '#010614',
//     alignSelf: 'center',
//   },
//   text: {
//     alignSelf: 'center',
//     fontFamily: 'Foundation',
//     fontSize: 22,
//     marginTop: 10,
//     color: 'white',
//   },
//   eyeSlash: {
//     alignSelf: 'center',
//     paddingBottom: 5,
//   },
//   textloading: {
//     backgroundColor: 'red',
//     color: 'black',
//   },
// });

// export default Login;


// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Pressable,
//   TextInput,
//   ScrollView,
//   ToastAndroid,AsyncStorage
// } from 'react-native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import {useDispatch} from 'react-redux';
// import FetchData from '../../network/fetchData';
// import DocumentPicker, {types} from 'react-native-document-picker';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import LoadingIndicator from '../../Components/LoadingIndicator';
// import axios from 'axios';

// const GeneralDetails = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [fileResponse, setfileResponse] = useState([]);

//   const handleSubmit = async values => {
//     setLoading(true);

//     const body = {
//       education: values.education,
//       phone: values.phone,
//     };
//     try {
//       const id1 = await AsyncStorage.getItem('id');
//       // await dispatch(FetchData.profile(body));
//       navigation.navigate('PreviousExperience');
//     } catch (error) {
//       ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
//     }
//     setLoading(false);

//     console.log(values);
//   };

//   const phoneRegExp =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
//   const validate = Yup.object().shape({
//     education: Yup.string().required('Education is required'),
//     phone: Yup.string()
//       .required('Phone Number is required')
//       .matches(phoneRegExp, 'Phone number is not valid')
//       .min(10, 'to short')
//       .max(10, 'to long'),
//   });

//   //FUNCTION OF GETTING FILE FROM PHONE

//   const uploadFile = async () => {
//     try {
//       const response = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       ToastAndroid.show('Files is Added', ToastAndroid.SHORT);
//       setfileResponse(response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   //API OF UPLOAD FILES TO SERVER

//   const sendFile = async () => {
//     const data = new FormData();
//     for (const res of fileResponse) {
//       //Printing the log realted to the file
//       // console.log('res : ' + JSON.stringify(res));
//       var urii = res.uri;
//       var namee = res.name;
//       var typee = res.type;
//       console.log('Type : ' + res.type);
//       console.log('File Name : ' + res.name);
//       console.log('File Size : ' + res.size);
//       data.append('myFile', {
//         name: namee,
//         type: typee,
//         uri: urii,
//       });
//     }
//     console.log(JSON.stringify(data));

//     try {
//       const id = await AsyncStorage.getItem('id');
//     console.log('id',id);
//       await fetch(`https://e36f-206-84-141-75.ngrok-free.app/upload?user_id=${id}`, {
//         method: 'post',
//         body: data,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       ToastAndroid.show('Upload Successfully', ToastAndroid.SHORT);
//       navigation.navigate('App_Verify');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <ScrollView style={{backgroundColor: 'white'}}>
//       {loading && <LoadingIndicator />}
//       <Text style={style.textTitle}>General Details</Text>
//       <View style={{marginTop: '3%'}} />
//       <Formik
//         initialValues={{
//           education: '',
//           phone: '',
//         }}
//         // validationSchema={validate}
//         onSubmit={handleSubmit}>
//         {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//           <View style={style.textBody}>
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="mortar-board"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />

//               <TextInput
//                 style={{width: 200}}
//                 name="education"
//                 color="black"
//                 placeholder="Education"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('education')}
//                 onBlur={handleBlur('education')}
//                 value={values.email}></TextInput>
//             </View>
//             {errors.education && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.education}
//               </Text>
//             )}
//             <View style={style.profileFieldContainer}>
//               <Icon name="phone" size={30} color="#262222" style={style.icon} />

//               <Text style={{color: 'black', paddingTop: 6}}>+92</Text>
//               <TextInput
//                 style={{width: 200}}
//                 name="phone"
//                 color="black"
//                 placeholder="Phone Number"
//                 keyboardType="phone-pad"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('phone')}
//                 onBlur={handleBlur('phone')}
//                 value={values.phone}></TextInput>
//             </View>
//             {errors.phone && (
//               <Text style={{color: 'red', marginLeft: 50}}>{errors.phone}</Text>
//             )}
//             <Pressable
//               style={style.Button1}
//               onPress={handleSubmit}
//               color={'#141413'}>
//               <Text style={style.text}>Next</Text>
//             </Pressable>
//             <Pressable
//               style={style.Button2}
//               onPress={() => {
//                 navigation.navigate('Dashboard');
//               }}
//               color={'#141413'}>
//               <Text style={style.text}>Cancel</Text>
//             </Pressable>
//             <View>
//               <Text
//                 style={{
//                   color: 'black',
//                   marginLeft: '46%',
//                   fontStyle: 'italic',
//                 }}>
//                 Or
//               </Text>
//               <Text
//                 style={{
//                   color: 'black',
//                   marginLeft: '25%',
//                   fontStyle: 'italic',
//                 }}>
//                 You can also upload your CV
//               </Text>
//             </View>
//           </View>
//         )}
//       </Formik>

//       {fileResponse.map((file, index) => (
//         <Text
//           key={index.toString()}
//           // style={styles.uri}
//           numberOfLines={1}
//           ellipsizeMode={'middle'}>
//           {file?.uri}
//         </Text>
//       ))}
//       <View
//         style={[
//           {
//             width: '50%',
//             height: '50%',
//             marginLeft: '5%',
//             marginTop: '7%',
//             alignSelf: 'center',
//             flexDirection: 'row',
//           },
//         ]}>
//         <Button
//           title="Upload CV"
//           enctype="multipart/form-data"
//           method="post"
//           color={'black'}
//           onPress={uploadFile}
//         />

//         <View style={style.submitButton}>
//           <Button title="Submit" color={'black'} onPress={sendFile} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginVertical: 10,
//   },
//   textTitle: {
//     fontFamily: 'Foundation',
//     fontSize: 28,
//     marginVertical: 10,
//     marginBottom: 30,
//     marginTop: 55,
//     alignSelf: 'center',
//     color: '#010614',
//   },
//   TextInput: {
//     width: 270,
//     height: 45,
//     margin: 10,
//     borderWidth: 3,
//     padding: 10,
//     color: '#02050d',
//     borderRadius: 50,
//     alignSelf: 'center',
//   },
//   Button1: {
//     width: 200,
//     height: 45,
//     borderRadius: 30,
//     marginVertical: 10,
//     marginBottom: 20,
//     marginTop: 35,
//     borderWidth: 2,
//     backgroundColor: '#010614',
//     alignSelf: 'center',
//   },
//   Button2: {
//     width: 200,
//     height: 45,
//     borderRadius: 30,
//     marginVertical: 10,
//     marginBottom: 20,
//     marginTop: 5,
//     borderWidth: 2,
//     backgroundColor: '#010614',
//     alignSelf: 'center',
//   },
//   text: {
//     alignSelf: 'center',
//     fontFamily: 'Foundation',
//     fontSize: 22,
//     marginTop: 10,
//     color: 'white',
//   },
//   profileFieldContainer: {
//     display: 'flex',
//     borderWidth: 3,
//     flexDirection: 'row',
//     borderRadius: 30,
//     margin: 10,
//     height: 45,
//     paddingHorizontal: 15,
//     paddingTop: 3,
//     width: 270,
//     color: '#262222',
//     alignSelf: 'center',
//   },
//   icon: {
//     marginRight: 5,
//   },
//   submitButton: {
//     marginLeft: '5%',
//   },
//   textStyle: {
//     color: 'black',
//   },
// });

// export default GeneralDetails;
