import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LoadingIndicator from '../Components/LoadingIndicator';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  ToastAndroid, Button
} from 'react-native';


const SignUp_Org = ({navigation}) => {
  const [hidePass, setHidePass] = useState(true);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const [website, setWebsite] = useState('');
  const [about, setAbout] = useState('');

  const handleSignUpOrg = async () => {
    try {
      const response = await fetch('https://4be6-206-84-141-94.ngrok-free.app/organizations/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          pass: pass,
          website: website,
          about: about,
        }),
      });
      console.log(response);
      // const json = await response.json();
      //  await AsyncStorage.setItem('id',JSON.stringify(json.id));
      navigation.navigate('Org_Verify');
    //   const id = await AsyncStorage.getItem('id');
      // console.log(json);
    //  console.log(id);
    } catch (error) {
      console.log('invalid Credentials');
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
           <View style={[style.container]}>
             {loading && <LoadingIndicator />}
             <Text style={style.textTitle}>Organization Sign Up</Text>
             <Text style={style.textTitle1}>Create a New Account</Text>
             <View style={{marginTop: 10}} />
                <View style={style.textBody}>
                  <View style={style.signUpFieldContainer}>
                    <Icon
                      name="user"
                      size={30}
                      color="#262222"
                      style={style.icon}
                    />
                    <TextInput
                      style={{width: 200}}
                      name="name"
                      color="#262222"
                      placeholder="Name"
                      placeholderTextColor={'black'}
                      onChangeText={(text) => setName(text)}
                      ></TextInput>
                  </View>
                  
    
                  <View style={style.signUpFieldContainer}>
                    <Icon
                      name="envelope"
                      size={27}
                      color="#262222"
                      style={style.icon}
                    />
                    <TextInput
                      style={{width: 200}}
                      name="email"
                      color="#262222"
                      placeholder="Email"
                      placeholderTextColor={'black'}
                      onChangeText={(text) => setEmail(text)}
                      ></TextInput>
                  </View>
                 
    
                  <View
                    style={{
                      ...style.signUpFieldContainer,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="lock"
                        size={30}
                        color="#262222"
                        style={style.icon}
                      />
                      <TextInput
                        style={{width: 200}}
                        name="password"
                        color="#262222"
                        placeholder="Password"
                        placeholderTextColor={'black'}
                        onChangeText={(text) => setPass(text)}
                        secureTextEntry={hidePass ? true : false}></TextInput>
                    </View>
                    <Icon
                      style={style.eyeSlash}
                      name={hidePass ? 'eye-slash' : 'eye'}
                      size={15}
                      color="#262222"
                      onPress={() => setHidePass(!hidePass)}
                    />
                  </View>
                  
    
                  <View
                    style={{
                      ...style.signUpFieldContainer,
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        name="lock"
                        size={30}
                        color="#262222"
                        style={style.icon}
                      />
                      <TextInput
                        style={{width: 200}}
                        name="confirmPassword"
                        color="#262222"
                        placeholder="Confirm Password"
                        placeholderTextColor={'black'}
                        onChangeText={(text) => setConfirmPass(text)}
                        secureTextEntry={hidePass ? true : false}></TextInput>
                    </View>
                    <Icon
                      style={style.eyeSlash}
                      name={hidePass ? 'eye-slash' : 'eye'}
                      size={15}
                      color="#262222"
                      onPress={() => setHidePass(!hidePass)}
                    />
                  </View>
    
                  
                  <View style={style.profileFieldContainer}>
                  <Icon name="globe" size={30} color="#262222" style={style.icon} />
                  <TextInput
                    style={{width: 200}}
                    name="website"
                    color="black"
                    placeholder="Website"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setWebsite(text)}
                    ></TextInput>
                </View>
               
                <View style={style.aboutFieldContainer}>
                  <Icon
                    name="comment"
                    size={30}
                    color="#262222"
                    style={style.icon}
                  />
                  <TextInput
                    style={style.about}
                    name="about"
                    multiline={true}
                    color="black"
                    placeholder="About"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setAbout(text)}
                    ></TextInput>
                </View>
    
                  <Pressable
                    style={style.Button}
                    onPress={handleSignUpOrg}
                    color={'#141413'}>
                    <Text style={style.text}>Sign Up</Text>
                  </Pressable>
                  <Text style={style.textBody}>Don't Have an account? </Text>
      <Text
        style={[style.textBody, {color: 'blue', paddingBottom:3, paddingTop:2, fontWeight:'bold'}]}
        onPress={() => {
          navigation.navigate('Login_Org');
        }}>
        Sign In
      </Text>
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
        backgroundColor: 'white',
      },
      
      textBody: {
        fontFamily: 'Foundation',
    fontSize: 15,
    marginTop: 1,
    marginBottom: 5,
    marginLeft: 2,
    color: '#010614',
    alignSelf: 'center',
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
        marginTop: 45,
        alignSelf: 'center',
        color: 'white',
        marginBottom: '3%',
      },
      textTitle1: {
        fontFamily: 'Foundation',
        fontSize: 28,
        marginVertical: 10,
        marginBottom: '2%',
         paddingBottom: '3%',
        marginTop: 15,
        alignSelf: 'center',
        color: '#01050d',
      },
      Button: {
        paddingRight:'8%',
        paddingLeft:'8%',
        paddingBottom:'2%',
        borderRadius: 30,
        marginVertical: 10,
        marginBottom: 20,
        alignSelf: 'center',
        backgroundColor: '#010614',
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
      text: {
        alignSelf: 'center',
        fontFamily: 'Foundation',
        fontSize: 22,
        marginTop: 10,
        paddingBottom: '1%',
        color: 'white',
      },
      signUpFieldContainer: {
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
      },
      icon: {
        marginRight: 5,
      },
      eyeSlash: {
        alignSelf: 'center',
        paddingBottom: 5,
      },
      //
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 5,
      },
      text1: {
        alignSelf: 'center',
        fontFamily: 'Foundation',
        fontSize: 16,
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
      aboutFieldContainer: {
        display: 'flex',
        borderWidth: 3,
        flexDirection: 'row',
        borderRadius: 30,
        margin: 10,
        height: 150,
        paddingHorizontal: 15,
        paddingTop: 3,
        width: 270,
        color: '#262222',
        alignSelf: 'center',
        alignContent: 'flex-start',
      },
      about: {
        width: 200,
        height: 150,
        textAlignVertical: 'top',
      },
      icon: {
        marginRight: 5,
      },
    });
    
export default SignUp_Org;

// import React, {useState} from 'react';
// import axios from 'axios';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {useDispatch} from 'react-redux';
// import FetchData from '../network/fetchData';
// import LoadingIndicator from '../Components/LoadingIndicator';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   TextInput,
//   ScrollView,
//   ToastAndroid,
// } from 'react-native';

// const SignUp_Org = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [hidePass, setHidePass] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async values => {
//     setLoading(true);

//     const body = {
//       name: values.name,
//       email: values.email,
//       pass: values.password,
//       website: values.website,
//       about: values.about,
//     };
//     try {
//       await dispatch(FetchData.Org_Signup(body));
//     } catch (error) {
//       console.log('ERRRRR', error);
//       console.log(body);
//       ToastAndroid.show('InValid Credentials', ToastAndroid.SHORT);
//     }
//     setLoading(false);
//   };

//   const validate = Yup.object().shape({
//     name: Yup.string()
//       .max(15, 'Must be 15 characters or less')
//       .required('Required'),
//     email: Yup.string().required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Password must match')
//       .required('Confirm password is required'),
//       website: Yup.string()
//       .matches(
//         /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
//         'Enter correct url!',
//       )
//       .required('Please enter website'),
//   });

//   return (
//     <ScrollView style={{backgroundColor: 'white'}}>
      
//       <View style={[style.container]}>
//         {loading && <LoadingIndicator />}
//         <Text style={style.textTitle}>Organization SignUp</Text>
//         <Text style={style.textTitle1}>Create New Account</Text>
//         <View style={{marginTop: 10}} />
//         <Formik
//           initialValues={{
//             name: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//           }}
//           validationSchema={validate}
//           onSubmit={handleSubmit}>
//           {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//             <View style={style.textBody}>
//               {/* {console.log('errors;', errors)} */}
//               <View style={style.signUpFieldContainer}>
//                 <Icon
//                   name="user"
//                   size={30}
//                   color="#262222"
//                   style={style.icon}
//                 />
//                 <TextInput
//                   style={{width: 200}}
//                   name="name"
//                   color="#262222"
//                   placeholder="Name"
//                   placeholderTextColor={'black'}
//                   onChangeText={handleChange('name')}
//                   onBlur={handleBlur('name')}
//                   value={values.name}></TextInput>
//               </View>
//               {errors.name && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.name}
//                 </Text>
//               )}

//               <View style={style.signUpFieldContainer}>
//                 <Icon
//                   name="envelope"
//                   size={27}
//                   color="#262222"
//                   style={style.icon}
//                 />
//                 <TextInput
//                   style={{width: 200}}
//                   name="email"
//                   color="#262222"
//                   placeholder="Email"
//                   placeholderTextColor={'black'}
//                   onChangeText={handleChange('email')}
//                   onBlur={handleBlur('email')}
//                   value={values.email}></TextInput>
//               </View>
//               {errors.email && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.email}
//                 </Text>
//               )}

//               <View
//                 style={{
//                   ...style.signUpFieldContainer,
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Icon
//                     name="lock"
//                     size={30}
//                     color="#262222"
//                     style={style.icon}
//                   />
//                   <TextInput
//                     style={{width: 200}}
//                     name="password"
//                     color="#262222"
//                     placeholder="Password"
//                     placeholderTextColor={'black'}
//                     onChangeText={handleChange('password')}
//                     onBlur={handleBlur('password')}
//                     value={values.password}
//                     secureTextEntry={hidePass ? true : false}></TextInput>
//                 </View>
//                 <Icon
//                   style={style.eyeSlash}
//                   name={hidePass ? 'eye-slash' : 'eye'}
//                   size={15}
//                   color="#262222"
//                   onPress={() => setHidePass(!hidePass)}
//                 />
//               </View>
//               {errors.password && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.password}
//                 </Text>
//               )}

//               <View
//                 style={{
//                   ...style.signUpFieldContainer,
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Icon
//                     name="lock"
//                     size={30}
//                     color="#262222"
//                     style={style.icon}
//                   />
//                   <TextInput
//                     style={{width: 200}}
//                     name="confirmPassword"
//                     color="#262222"
//                     placeholder="Confirm Password"
//                     placeholderTextColor={'black'}
//                     onChangeText={handleChange('confirmPassword')}
//                     onBlur={handleBlur('confirmPassword')}
//                     value={values.confirmPassword}
//                     secureTextEntry={hidePass ? true : false}></TextInput>
//                 </View>
//                 <Icon
//                   style={style.eyeSlash}
//                   name={hidePass ? 'eye-slash' : 'eye'}
//                   size={15}
//                   color="#262222"
//                   onPress={() => setHidePass(!hidePass)}
//                 />
//               </View>

//               {errors.confirmPassword && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.confirmPassword}
//                 </Text>
//               )}
//               <View style={style.profileFieldContainer}>
//               <Icon name="globe" size={30} color="#262222" style={style.icon} />
//               <TextInput
//                 style={{width: 200}}
//                 name="website"
//                 color="black"
//                 placeholder="Website"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('website')}
//                 onBlur={handleBlur('website')}
//                 value={values.website}></TextInput>
//             </View>
//             {errors.website && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.website}
//               </Text>
//             )}
//             <View style={style.aboutFieldContainer}>
//               <Icon
//                 name="comment"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={style.about}
//                 name="about"
//                 multiline={true}
//                 color="black"
//                 placeholder="About"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('about')}
//                 onBlur={handleBlur('about')}
//                 value={values.about}></TextInput>
//             </View>
//             {errors.about && (
//               <Text style={{color: 'red', marginLeft: 50}}>{errors.about}</Text>
//             )}

//               <Pressable
//                 style={style.Button}
//                 onPress={handleSubmit}
//                 color={'#141413'}>
//                 <Text style={style.text}>Sign Up</Text>
//               </Pressable>
//               <Text style={style.text1}>Already have an account?</Text>
//               <Pressable
//                 style={style.Button1}
//                 onPress={() => navigation.navigate('Login_Org')}
//                 color={'#141413'}>
//                 <Text style={style.text}>Login</Text>
//               </Pressable>
//             </View>
//           )}
//         </Formik>
//       </View>
//     </ScrollView>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 10,
//   },
  
//   textBody: {
//     fontFamily: 20,
//   },
//   textTitle: {
//     fontFamily: 'Foundation',
//     backgroundColor: '#010614',
//     borderRadius: 30,
//     fontSize: 28,
//     paddingLeft: '10%',
//     paddingRight: '10%',
//     paddingTop: '5%',
//     paddingBottom: '5%',
//     marginTop: 45,
//     alignSelf: 'center',
//     color: 'white',
//   },
//   textTitle1: {
//     fontFamily: 'Foundation',
//     fontSize: 28,
//     marginVertical: 10,
//     marginBottom: 30,
//     marginTop: 15,
//     alignSelf: 'center',
//     color: '#01050d',
//   },
//   Button: {
//     paddingRight:'8%',
//     paddingLeft:'8%',
//     paddingBottom:'2%',
//     borderRadius: 30,
//     marginVertical: 10,
//     marginBottom: 20,
//     alignSelf: 'center',
//     backgroundColor: '#010614',
//   },
//   Button1: {
//     paddingRight:'8%',
//     paddingLeft:'8%',
//     paddingBottom:'2%',
//     borderRadius: 30,
//     marginVertical: 10,
//     marginBottom: 20,
//     alignSelf: 'center',
//     backgroundColor: 'darkblue',
//   },
//   text: {
//     alignSelf: 'center',
//     fontFamily: 'Foundation',
//     fontSize: 22,
//     marginTop: 10,
//     paddingBottom: '1%',
//     color: 'white',
//   },
//   signUpFieldContainer: {
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
//   eyeSlash: {
//     alignSelf: 'center',
//     paddingBottom: 5,
//   },
//   //
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginVertical: 5,
//   },
//   text1: {
//     alignSelf: 'center',
//     fontFamily: 'Foundation',
//     fontSize: 16,
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
//   aboutFieldContainer: {
//     display: 'flex',
//     borderWidth: 3,
//     flexDirection: 'row',
//     borderRadius: 30,
//     margin: 10,
//     height: 150,
//     paddingHorizontal: 15,
//     paddingTop: 3,
//     width: 270,
//     color: '#262222',
//     alignSelf: 'center',
//     alignContent: 'flex-start',
//   },
//   about: {
//     width: 200,
//     height: 150,
//     textAlignVertical: 'top',
//   },
//   icon: {
//     marginRight: 5,
//   },
// });

// export default SignUp_Org;
