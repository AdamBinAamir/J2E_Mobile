import React, { useState } from 'react';
import { View, Text, TextInput, Button, ToastAndroid, AsyncStorage } from 'react-native';


const PostJob = ({navigation}) => {
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handlePostJob = async () => {
        const id = await AsyncStorage.getItem('id');
          console.log(id);
    try {
      const response = await fetch('https://e36f-206-84-141-75.ngrok-free.app/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          org_id: id,
          designation: designation,
          location: location,
          salary: salary,
          category: category,
          description: description,
        }),
      });
      const json = await response.json();
       await AsyncStorage.setItem('job_id',JSON.stringify(json.id));
      navigation.navigate('RequiredSkills');
      const job_id = await AsyncStorage.getItem('job_id');
      console.log(json);
     console.log(job_id);
    } catch (error) {
      console.log('invalid Credentials');
      ToastAndroid.show('Invalid Credentials', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Job Details</Text>
      <Text>Designation</Text>
      <TextInput onChangeText={(text) => setDesignation(text)} />
      <Text>location</Text>
      <TextInput onChangeText={(text) => setLocation(text)} />
      <Text>Salary</Text>
      <TextInput onChangeText={(text) => setSalary(text)} />
      <Text>Category</Text>
      <TextInput onChangeText={(text) => setCategory(text)} />
      <Text>Description</Text>
      <TextInput onChangeText={(text) => setDescription(text)} />

      <Button title="Next" onPress={handlePostJob} />
    </View>
  );
};

export default PostJob;


// import React, {useState} from 'react';
// import {Formik} from 'formik';
// import * as Yup from 'yup';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   TextInput,
//   ScrollView,
// } from 'react-native';

// const PostJob = ({navigation}) => {
//   const validate = Yup.object().shape({
//     name: Yup.string().required('Input is Required'),
//     location: Yup.string().required('Input is required'),
//     salary: Yup.number().required('Input is required'),
//     category: Yup.string().required('Input is required'),
//     description: Yup.string().required('Input is required'),
//   });

//   return (
//     <ScrollView style={{backgroundColor: 'white'}}>
//       <View style={[style.container]}>
//         <Text style={style.textTitle}>Job Details</Text>

//         <Formik
//           initialValues={{
//             name: '',
//             location: '',
//             salary: '',
//             category: '',
//             description: '',
//           }}
//           validationSchema={validate}
//           onSubmit={values => console.log(values)}>
//           {({handleChange, handleBlur, handleSubmit, values, errors}) => (
//             <View style={style.textBody}>
//               {console.log('errors;', errors)}
//               <View style={style.postJobFieldContainer}>
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

//               <View style={style.postJobFieldContainer}>
//                 <Icon
//                   name="location-arrow"
//                   size={27}
//                   color="#262222"
//                   style={style.icon}
//                 />
//                 <TextInput
//                   style={{width: 200}}
//                   name="location"
//                   color="#262222"
//                   placeholder="Location"
//                   placeholderTextColor={'black'}
//                   onChangeText={handleChange('location')}
//                   onBlur={handleBlur('location')}
//                   value={values.location}></TextInput>
//               </View>
//               {errors.location && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.location}
//                 </Text>
//               )}

//               <View
//                 style={{
//                   ...style.postJobFieldContainer,
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Icon
//                     name="money"
//                     size={30}
//                     color="#262222"
//                     style={style.icon}
//                   />
//                   <TextInput
//                     style={{width: 200}}
//                     name="salary"
//                     color="#262222"
//                     placeholder="Salary"
//                     placeholderTextColor={'black'}
//                     onChangeText={handleChange('salary')}
//                     onBlur={handleBlur('salary')}
//                     value={values.salary}></TextInput>
//                 </View>
//               </View>
//               {errors.salary && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.salary}
//                 </Text>
//               )}

//               <View
//                 style={{
//                   ...style.postJobFieldContainer,
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Icon
//                     name="reddit"
//                     size={30}
//                     color="#262222"
//                     style={style.icon}
//                   />
//                   <TextInput
//                     style={{width: 200}}
//                     name="category"
//                     color="#262222"
//                     placeholder="Category"
//                     placeholderTextColor={'black'}
//                     onChangeText={handleChange('category')}
//                     onBlur={handleBlur('category')}
//                     value={values.category}></TextInput>
//                 </View>
//               </View>

//               {errors.category && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.category}
//                 </Text>
//               )}
//               <View
//                 style={[
//                   style.descriptionFieldContainer,
//                   {justifyContent: 'space-between'},
//                 ]}>
//                 <View style={{flexDirection: 'row'}}>
//                   <Icon
//                     name="comment"
//                     size={30}
//                     color="#262222"
//                     style={style.icon}
//                   />
//                   <TextInput
//                     style={[style.description, {width: 200}]}
//                     multiline
//                     name="description"
//                     color="#262222"
//                     placeholder="Description"
//                     placeholderTextColor={'black'}
//                     onChangeText={handleChange('description')}
//                     onBlur={handleBlur('description')}
//                     value={values.description}></TextInput>
//                 </View>
//               </View>

//               {errors.description && (
//                 <Text style={{color: 'red', marginLeft: 20}}>
//                   {errors.description}
//                 </Text>
//               )}

//               <Pressable
//                 style={style.Button1}
//                 onPress={() => {
//                   navigation.navigate('Required Skills');
//                 }}
//                 color={'#141413'}>
//                 <Text style={style.text}>Next</Text>
//               </Pressable>

//               <Pressable
//                 style={style.Button2}
//                 onPress={() => {
//                   navigation.navigate('Organization Details');
//                 }}
//                 color={'#141413'}>
//                 <Text style={style.text}>Prev</Text>
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
//     fontSize: 28,
//     marginVertical: 10,
//     marginBottom: 10,
//     marginTop: 15,
//     alignSelf: 'center',
//     color: '#01050d',
//   },
//   Button1: {
//     width: 110,
//     height: 40,
//     borderRadius: 30,
//     marginVertical: 10,
//     marginTop: 5,
//     borderWidth: 2,
//     backgroundColor: '#010614',
//     alignSelf: 'center',
//   },
//   Button2: {
//     width: 110,
//     height: 40,
//     borderRadius: 30,
//     marginVertical: 10,
//     marginTop: 2,
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
//   postJobFieldContainer: {
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
//   descriptionFieldContainer: {
//     display: 'flex',
//     borderWidth: 3,
//     flexDirection: 'row',
//     borderRadius: 30,
//     margin: 10,
//     height: 100,
//     paddingHorizontal: 15,
//     paddingTop: 3,
//     width: 270,
//     color: '#262222',
//   },
//   icon: {
//     marginRight: 5,
//   },
//   description: {
//     marginBottom: 55,
//   },
// });

// export default PostJob;
