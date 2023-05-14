import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LoadingIndicator from '../Components/LoadingIndicator';
import React, { useState } from 'react';
import { View, Image, Text, TextInput,Pressable, Button, ToastAndroid, AsyncStorage, StyleSheet, TouchableOpacity } from 'react-native';

const SignUp = ({ navigation }) => {
  
  const [hidePass, setHidePass] = useState(true);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmPass] = useState('');
  const error = async () => {
    if(name == '' || email=='' || pass == '' || confirmpass == '')
   {
    ToastAndroid.show('Credentials not Entered', ToastAndroid.LONG);
    
   }
   else{
    if(pass == confirmpass){
    handleSignUp();
   }
   else{
    ToastAndroid.show('Passwords do not match', ToastAndroid.LONG);
   }
   }
  };

  const handleSignUp = async () => {
    
    try {
      setLoading(true);
      const response = await fetch('https://59ec-119-73-100-124.ngrok-free.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          pass: pass,
        }),
      });
      const json = await response.json();
      await AsyncStorage.setItem('id', JSON.stringify(json.id));
      navigation.navigate('GeneralDetails');
      const id = await AsyncStorage.getItem('id');
      console.log(json);
      console.log(id);
      ToastAndroid.show('Credentials Saved', ToastAndroid.SHORT);
    } catch (error) {
      console.log('Invalid Credentials');
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <View style={[style.container]}>
    {loading && <LoadingIndicator />}
    <Text style={style.textTitle}>Applicant Registration</Text>
    <Text style={style.textTitle1}>Create a New Account</Text>
    <View style={style.textBody}>
   
                <View style={style.signupFieldContainer}>
      <Icon name="user" size={30} color="#262222" style={style.icon} />
        <TextInput style={{width: 200}} 
          name="name"
          color="#262222"
          placeholder="Name"
          placeholderTextColor={'black'}
          onChangeText={(text) => setName(text)} />
      </View>
      <View style={style.signupFieldContainer}>
      <Icon
        name="envelope"
        size={27}
        color="#262222"
        style={style.icon}
      />
        <TextInput style={{width: 200}} 
          name="email"
          color="#262222"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={'black'}
          onChangeText={(text) => setEmail(text)} />
      </View>
      <View style={{...style.signupFieldContainer, justifyContent: 'space-between',}}>
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
    secureTextEntry={hidePass ? true : false} 
      onChangeText={(text) => setPass(text)} />
      </View>
      <Icon
              style={style.eyeSlash}
              name={hidePass ? 'eye-slash' : 'eye'}
              size={15}
              color="#262222"
              onPress={() => setHidePass(!hidePass)}
            />
            </View>
            <View style={{...style.signupFieldContainer, justifyContent: 'space-between',}}>
      <View style={{flexDirection: 'row'}}>
              <Icon
                name="lock"
                size={30}
                color="#262222"
                style={style.icon}
              />
    <TextInput
    style={{width: 200}}  
    name="confirmpassword"
    color="#262222"
    placeholder="Confirm Password"
    placeholderTextColor={'black'}
    secureTextEntry={hidePass ? true : false} 
      onChangeText={(text) => setConfirmPass(text)} />
      </View>
      <Icon
              style={style.eyeSlash}
              name={hidePass ? 'eye-slash' : 'eye'}
              size={15}
              color="#262222"
              onPress={() => setHidePass(!hidePass)}
            />
            </View>
    </View>
    <TouchableOpacity
            style={style.Button}
            onPress={error}
            color={'#141413'}>
            <Text style={style.text}>Sign Up</Text>
          </TouchableOpacity>
          <View
      style={{
        flexDirection: 'row',
        marginVertical: 5,
        alignSelf: 'center',
      }}>
      <Text style={style.textBody}>Already have an account? </Text>
      <Text
        style={[style.textBody, {color: 'blue', paddingBottom:3, paddingTop:2, fontWeight:'bold'}]}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Sign In
      </Text>
    </View>
  </View>
);
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 190,
    marginBottom: 10,
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
  textBody: {
    fontFamily: 'Foundation',
    fontSize: 15,
    marginTop: 1,
    marginBottom: 5,
    marginLeft: 2,
    color: '#010614',
    alignSelf: 'center',
  },
  signupFieldContainer: {
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
  Button: {
    padding:"2%",
    paddingLeft:"5%",
    paddingRight:"5%",
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2,
    backgroundColor: '#010614',
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Foundation',
    fontSize: 20,
    padding:'2%',
    marginBottom:1,
    color: 'white',
  },
  eyeSlash: {
    alignSelf: 'center',
    paddingBottom: 5,
  },
  textloading: {
    backgroundColor: 'red',
    color: 'black',
  },
});

export default SignUp;


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
//   TouchableOpacity,
// } from 'react-native';

// const SignUp = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [hidePass, setHidePass] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async values => {
//     setLoading(true);

//     const body = {
//       name: values.name,
//       email: values.email,
//       pass: values.password,
//     };
//     try {
//       await dispatch(FetchData.Signup(body));
//       navigation.navigate('GeneralDetails');
//     } catch (error) {
//       console.log('ERRRRR', error);
//       console.log('Error: ', body);
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
//   });

//   return (
    
//     <ScrollView style={{backgroundColor: 'white'}}>
//       <View style={[style.container]}>
//         {loading && <LoadingIndicator />}
//         <Text style={style.textTitle}>Applicant SignUp</Text>
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

//               <Pressable
//                 style={style.Button}
//                 onPress={handleSubmit}
//                 color={'#141413'}>
//                 <Text style={style.text}>Sign Up</Text>
//               </Pressable>
//               <Text style={style.text1}>Already have an account?</Text>
//               <Pressable
//                 style={style.Button1}
//                 onPress={() => navigation.navigate('Login')}
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
//   text1: {
//     alignSelf: 'center',
//     fontFamily: 'Foundation',
//     fontSize: 16,
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
// });

// export default SignUp;
