import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, AsyncStorage } from 'react-native';

const OrganizationProfile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data from API
    fetchUserProfile()
      .then((data) => setUserProfile(data))
      .catch((error) => console.error(error));
  }, []);

  const fetchUserProfile = async () => {
    const id = await AsyncStorage.getItem('id');
    try {
      const response = await fetch(`https://59ec-119-73-100-124.ngrok-free.app/organizations/profile?id=${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch user profile data');
    }
  };

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
       <View style={style.container}>
       <Text style={[style.name,{fontWeight:'bold',fontSize:24, backgroundColor:'black',padding:'2%',borderRadius:10}]}>Organization Profile</Text>
        <Text style={style.name}>Name: {userProfile.name}</Text>
        <Text style={style.education}>About: {userProfile.about}</Text>
        <Text style={style.phone}>Website: {userProfile.website}</Text>
        <Text style={style.skills}>Email: {userProfile.email}</Text>
        <Text style={style.experiences}>Created At: {userProfile.CreatedAt}</Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    borderRadius:30,
    marginVertical:'10%',
    marginHorizontal:'10%',
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#38393b',

    color:'white'
  },
  name: {
    color:'white',
    flexDirection: 'row',
    fontSize: 18,
    marginTop:'5%',
    marginBottom: '5%',
  },
  education: {
    color:'white',
    flexDirection: 'row',
    fontSize: 18,
    marginBottom: '5%',
  },
  phone: {
    color:'white',
    flexDirection: 'row',
    fontSize: 18,
    marginBottom: '5%',
  },
  skills: {
    color:'white',
    flexDirection: 'row',
    fontSize: 18,
    marginBottom: '5%',
  },
  experiences: {
    color:'white',
    flexDirection: 'row',
    fontSize: 18,
    marginBottom: '5%',
  },
  submitButton:{
    borderRadius:10,
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

export default OrganizationProfile;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Organization Profile</Text>
//       <Text style={styles.name}>Name: {userProfile.name}</Text>
//       <Text style={styles.about}>About: {userProfile.about}</Text>
//       <Text style={styles.website}>Website: {userProfile.website}</Text>
//       <Text style={styles.email}>Email: {userProfile.email}</Text>
//       <Text style={styles.create}>Created At: {userProfile.CreatedAt}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     container: {
//       borderRadius:30,
//       marginVertical:'10%',
//       marginHorizontal:'10%',
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: '#38393b',
//       color:'white'
//     },
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   name: {
//     color:'white',
//     flexDirection: 'row',
//     fontSize: 18,
//     marginTop:'5%',
//     marginBottom: '5%',
//   },
//   about: {
//     color:'white',
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: '5%',
//   },
//   website: {
//     color:'white',
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: '5%',
//   },
//   email: {
//     color:'white',
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: '5%',
//   },
//   create: {
//     color:'white',
//     flexDirection: 'row',
//     fontSize: 18,
//     marginBottom: '5%',
//   },
// });


// import * as React from 'react';
// import LoadingIndicator from '../Components/LoadingIndicator';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {View, Text, ScrollView, StyleSheet, Pressable} from 'react-native';

// const OrganizationProfile = ({navigation}) => {
//   const [loading, setLoading] = React.useState(false);
//   const [organizationProfile, setOrganizationProfile] = React.useState();
//   const [organizationName, setOrganizationName] = React.useState({
//     name: 'ABCD',
//   });
//   const [organizationWebsite, setOrganizationWebsite] = React.useState({
//     website: 'www.dummy.com',
//   });
//   const [organizationAbout, setOrganizationAbout] = React.useState({
//     about: 'We work in mobile app development and web development.',
//   });

//   return loading ? (
//     <LoadingIndicator />
//   ) : (
//     <ScrollView style={{backgroundColor: 'white'}}>
//       <View
//         style={[
//           {
//             flexDirection: 'row',
//             padding: 2,
//             margin: 5,
//             marginLeft: 280,
//             justifyContent: 'flex-end',
//             borderWidth: 1,
//             borderRadius: 5,
//             width: 70,
//           },
//         ]}>
//         <Pressable
//           onPress={() => {
//             navigation.navigate('EditProfile');
//           }}
//           color={'#141413'}>
//           <Text style={style.text}>Edit</Text>
//         </Pressable>
//         <Icon style={{marginTop: 8}} name="edit" size={20} color="black" />
//       </View>
//       <View style={{flex: 1}}></View>
//       <Text style={style.heading}>Name: {organizationName.name}</Text>
//       <Text style={style.h1}>Website: {organizationWebsite.website}</Text>
//       {/* <Text style={style.h2}>Contact: dummy@mail.com</Text> */}
//       <Text style={style.h3}>About: {organizationAbout.about}</Text>
//       {/* <Text style={style.h4}>
//         We are an international company looking to contribute in modern
//         technology. If you think of yourself as a hard working developer, please
//         do contact us.
//       </Text>
//       <Text style={style.h5}>
//         We work in mobile app development and web development.
//       </Text> */}
//     </ScrollView>
//   );
// };

// const style = StyleSheet.create({
//   heading: {
//     fontSize: 25,
//     color: 'black',
//     fontWeight: 'bold',
//     margin: 15,
//   },
//   h1: {
//     color: 'black',
//     margin: 10,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   // h2: {
//   //   color: 'black',
//   //   margin: 10,
//   //   marginBottom: 5,
//   //   fontSize: 18,
//   //   fontWeight: 'bold',
//   // },
//   h3: {
//     color: 'black',
//     margin: 15,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   h4: {
//     color: 'black',
//     marginLeft: 13,
//     fontSize: 15,
//     padding: 5,
//   },
//   h5: {
//     color: 'black',
//     marginLeft: 13,
//     fontSize: 15,
//     padding: 5,
//     justifyContent: 'center',
//   },
//   text: {
//     width: 50,
//     padding: 5,
//     color: 'black',
//     fontSize: 18,
//   },
// });

// export default OrganizationProfile;
