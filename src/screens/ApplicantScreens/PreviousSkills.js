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
const PreviousSkills = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState('');

  const handleRequiredSkills = async () => {
    setLoading(true);
    const id = await AsyncStorage.getItem('id');
    try {
      const response = await fetch('https://59ec-119-73-100-124.ngrok-free.app/profile/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: id,
          skills: skills,
        }),
      });
      const body = {user_id: id, skills: skills}; 
      console.log('data',body);
      console.log('user_id:', id);
      setLoading(false);
      ToastAndroid.show('Skills Saved', ToastAndroid.SHORT);
      navigation.navigate('App_Verify');
    } catch (error) {
      console.log('invalid Credentials');
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  const addSkill = () => {
    if (skill.trim() === '') {
      return;
    }
    setSkills([...skills, skill]);
    setSkill('');
  };

  return (
<ScrollView style={[style.container ,{ backgroundColor: 'white' }]}>
  {loading && <LoadingIndicator />}
  <Text style={style.textTitle}>Skills</Text>
  <View style={{ marginTop: 20 }} />
  <View >
  {skills.map((skill, index) => (
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
    marginBottom: '2%',}} key={index}>{skill}</Text>
  ))}
</View>
  
    <View style={style.profileFieldContainer}>
      <Icon name="history" size={30} color="#262222" style={style.icon} />
      <TextInput
        style={{ width: 200 }}
        name="skill1"
        color="black"
        placeholder="Skill"
        placeholderTextColor={'black'}
        onChangeText={(text) => setSkill(text)} 
        value={skill}
      />
    </View>
    <Pressable style={style.Button12} onPress={addSkill} color={'#141413'}>
      <Text style={style.text}>Add Skill</Text>
    </Pressable>
    <Pressable style={style.Button1} onPress={handleRequiredSkills} color={'#141413'}>
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


export default PreviousSkills;

// import React, { useState } from 'react';
// import { Stylesheet, View, Text, TextInput, Button, ToastAndroid, AsyncStorage } from 'react-native';
// import {useDispatch} from 'react-redux';

// const PreviousSkills = ({navigation}) => {

//   const [skills, setSkills] = useState('');

//   const handleSkills = async () => {
    
//     const id = await AsyncStorage.getItem('id');
//     try {
//       const response = await fetch('https://4be6-206-84-141-94.ngrok-free.app/profile/skills', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           user_id: id,
//           skill: skills,
//         }),
//       });
//       navigation.navigate('App_Verify');
//      console.log('id:',id);
//     } catch (error) {
//       console.log('invalid Credentials');
//       ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
//       console.error(error);
//     }
//   };

//   return (
//     <View>
//       <Text>Applicant Previous Skills</Text>
//       <Text>Skill</Text>
//       <TextInput onChangeText={(text) => setSkills(text)} />
//       <Button title="Next" onPress={handleSkills} />
//     </View>
//   );
// };

// export default PreviousSkills;


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

// const PreviousSkills = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);

//   const validate = Yup.object().shape({
//     skill1: Yup.string().required('Input is required'),
//     skill2: Yup.string().required('Input is required'),
//     skill3: Yup.string().required('Input is required'),
//   });

//   const submitApplicantData = async values => {
//     setLoading(true);

//     const body = {
//       skill: values.skill,
//     };
//     try {
//       // await dispatch(FetchData.Skill(body));
//       navigation.navigate('App_Verify');
//     } catch (error) {
//       ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
//     }
//     setLoading(false);

//     console.log(values);
//   };

//   return (
//     <ScrollView style={{backgroundColor: 'white'}}>
//       {loading && <LoadingIndicator />}
//       <Text style={style.textTitle}>Previous Skills</Text>
//       <View style={{marginTop: 20}} />
//       <Formik
//         initialValues={{
//           skill1: '',
//           skill2: '',
//           skill3: '',
//         }}
//         // validationSchema={validate}
//         onSubmit={submitApplicantData}>
//         {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//           <View style={style.textBody}>
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="smile-o"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={{width: 200}}
//                 name="skill1"
//                 color="black"
//                 placeholder="Skill 1"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('skill1')}
//                 onBlur={handleBlur('skill1')}
//                 value={values.skill1}></TextInput>
//             </View>
//             {errors.skill1 && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.skill1}
//               </Text>
//             )}
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="smile-o"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={{width: 200}}
//                 name="skill2"
//                 color="black"
//                 placeholder="Skill 2"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('skill2')}
//                 onBlur={handleBlur('skill2')}
//                 value={values.skill2}></TextInput>
//             </View>
//             {errors.skill2 && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.skill2}
//               </Text>
//             )}
//             <View style={style.profileFieldContainer}>
//               <Icon
//                 name="smile-o"
//                 size={30}
//                 color="#262222"
//                 style={style.icon}
//               />
//               <TextInput
//                 style={{width: 200}}
//                 name="skill3"
//                 color="black"
//                 placeholder="Skill 3"
//                 placeholderTextColor={'black'}
//                 onChangeText={handleChange('skill3')}
//                 onBlur={handleBlur('skill3')}
//                 value={values.skill3}></TextInput>
//             </View>
//             {errors.skill3 && (
//               <Text style={{color: 'red', marginLeft: 50}}>
//                 {errors.skill3}
//               </Text>
//             )}

//             <Pressable
//               style={style.Button1}
//               onPress={handleSubmit}
//               color={'#141413'}>
//               <Text style={style.text}>Submit</Text>
//             </Pressable>
//             <Pressable
//               style={style.Button2}
//               onPress={() => {
//                 navigation.navigate('Previous Experience');
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

// export default PreviousSkills;
