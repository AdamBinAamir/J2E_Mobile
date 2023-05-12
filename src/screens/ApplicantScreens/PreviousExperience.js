import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid, AsyncStorage } from 'react-native';
import {useDispatch} from 'react-redux';

const PreviousExperience = ({navigation}) => {

  const [experience, setExperience] = useState('');

  const handleExperience = async () => {
    
    const id = await AsyncStorage.getItem('id');
    try {
      const response = await fetch('https://e36f-206-84-141-75.ngrok-free.app/profile/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: id,
          experience: experience,
        }),
      });
      navigation.navigate('PreviousSkills');
     console.log('id:',id);
    } catch (error) {
      console.log('invalid Credentials');
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Applicant Previous Experience</Text>
      <Text>Experience</Text>
      <TextInput onChangeText={(text) => setExperience(text)} />
      <Button title="Next" onPress={handleExperience} />
    </View>
  );
};

export default PreviousExperience;


// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   TextInput,
//   ScrollView,
//   ToastAndroid,
// } from 'react-native';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import {useDispatch} from 'react-redux';
// import FetchData from '../../network/fetchData';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import LoadingIndicator from '../../Components/LoadingIndicator';

// const PreviousExperience = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async values => {
//     setLoading(true);

//     const body = {
//       experience: values.experience,
//     };
//     try {
//       // await dispatch(FetchData.Experience(body));
//       navigation.navigate('PreviousSkills');
//     } catch (error) {
//       ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
//     }
//     setLoading(false);

//     console.log(values);
//   };

//   const validate = Yup.object().shape({
//     experience1: Yup.string().required('Input is required'),
//     experience2: Yup.string().required('Input is required'),
//     experience3: Yup.string().required('Input is required'),
//   });

//   return (
//     <ScrollView style={{backgroundColor: 'white'}}>
//       {loading && <LoadingIndicator />}
//       <Text style={style.textTitle}>Previous Experience</Text>
//       <View style={{marginTop: 20}} />
//       <Formik
//         initialValues={{
//           experience1: '',
//           experience2: '',
//           experience3: '',
//         }}
//         // validationSchema={validate}
//         onSubmit={handleSubmit}>
//         {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//           <View style={style.textBody}>
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="history"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={{width: 200}}
//                 name="experience1"
//                 color="black"
//                 placeholder="Experience 1"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('experience1')}
//                 onBlur={handleBlur('experience1')}
//                 value={values.experience1}></TextInput>
//             </View>
//             {errors.experience1 && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.experience1}
//               </Text>
//             )}
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="history"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={{width: 200}}
//                 name="experience2"
//                 color="black"
//                 placeholder="Experience 2"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('experience2')}
//                 onBlur={handleBlur('experience2')}
//                 value={values.experience2}></TextInput>
//             </View>
//             {errors.experience2 && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.experience2}
//               </Text>
//             )}
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="history"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={{width: 200}}
//                 name="experience3"
//                 color="black"
//                 placeholder="Experience 3"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('experience3')}
//                 onBlur={handleBlur('experience3')}
//                 value={values.experience3}></TextInput>
//             </View>
//             {errors.experience3 && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.experience3}
//               </Text>
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
//                 navigation.navigate('General Details');
//               }}
//               color={'#141413'}>
//               <Text style={style.text}>Prev</Text>
//             </Pressable>
//           </View>
//         )}
//       </Formik>
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
//     marginTop: 30,
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
// });

// export default PreviousExperience;
