import * as React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import FetchData from '../network/fetchData';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LoadingIndicator from '../Components/LoadingIndicator';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  Button,
  ToastAndroid,
  FlatList,
} from 'react-native';

const FindJobs = ({navigation}) => {
  const dispatch = useDispatch();
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  // fetchJobs();
  // }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await dispatch(FetchData.getAllJobs());
      setJobs(res);
    } catch (error) {
      ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
    }
    setLoading(false);
  };
  const handleSubmit = async values => {
    setLoading(true);

    try {
      const res = await dispatch(FetchData.searchJobs(values.search));
      setJobs(res);
    } catch (error) {
      ToastAndroid.show('Something has wrong', ToastAndroid.SHORT);
    }

    setLoading(false);

    console.log(values);
  };

  // const validate = Yup.object().shape({
  //   search: Yup.string().required('Input is empty'),
  // });

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      jobDescription: 'Developer',
      description: 'We need a developer to work in paced environment.',
      location: 'Islamabad',
      salary: '50,000',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      jobDescription: 'QA',
      description: 'We need a QA to work in paced environment.',
      location: 'Lahore',
      salary: '10,000',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      jobDescription: 'Sales',
      description: 'We need a Sales to work in paced environment.',
      location: 'Multan',
      salary: '30,000',
    },
  ];
  const itemRender = ({item}) => (
    <>
      <View style={{marginTop: 5}} />
      <View style={style.cardView}>
        <Text style={style.h1}>{item.jobDescription}</Text>
        <Text style={style.h2}>{item.location}</Text>
        <Text style={style.h3}>Salary: {item.salary}</Text>
        <Text style={style.h4}>Description: </Text>
        <Text style={style.h5}>{item.description}</Text>
        <View style={[style.cardButton, {justifyContent: 'space-between'}]}>
          <Button title="Apply" color="#1a1c1b" />
          <Button
            onPress={() => {
              navigation.navigate('Chat');
            }}
            title="Message"
            color="#1a1c1b"
          />
        </View>
      </View>
    </>
  );

  return (
    <View style={{backgroundColor: 'white'}}>
      {loading && <LoadingIndicator />}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
      <View style={{marginTop: 15}} />
      <Formik
        initialValues={{
          search: '',
        }}
        // validationSchema={validate}
        onSubmit={handleSubmit}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={style.textBody}>
            <View style={style.inputwrapper}>
              <View style={style.searchFieldContainer}>
                <Icon
                  name="search"
                  size={30}
                  color="#262222"
                  style={style.icon}
                />
                <TextInput
                  style={{width: 200}}
                  name="search"
                  color="black"
                  placeholder="Job title, Category"
                  placeholderTextColor={'black'}
                  onChangeText={handleChange('search')}
                  onBlur={handleBlur('search')}
                  value={values.search}></TextInput>
              </View>
              {errors.search && (
                <Text style={{color: 'red', marginLeft: 30}}>
                  {errors.search}
                </Text>
              )}
            </View>

            <Pressable
              style={style.Button}
              onPress={handleSubmit}
              color={'#141413'}>
              <Text style={style.text}>Search</Text>
            </Pressable>
          </View>
        )}
      </Formik>

      <FlatList
        style={{marginBottom: '25%'}}
        data={DATA}
        renderItem={itemRender}
        keyExtractor={item => item.id}
      />
      {/* <View style={{marginTop: 15}} />
      <View style={style.cardView}>
        <Text style={style.h1}>Software Engineer</Text>
        <Text style={style.h2}>Islamabad</Text>
        <Text style={style.h3}>Salary: 50,000</Text>
        <Text style={style.h4}>Description:</Text>
        <Text style={style.h5}>
          We need a software Engineer to work in paced environment.
        </Text>
        <View style={style.cardButton}>
          <Button title="Apply" color="#1a1c1b" />
        </View>
      </View>
      <View style={{marginTop: 0}} />
      <View style={style.cardView}>
        <Text style={style.h1}>Developer</Text>
        <Text style={style.h2}>Islamabad</Text>
        <Text style={style.h3}>Salary: 50,000</Text>
        <Text style={style.h4}>Description:</Text>
        <Text style={style.h5}>
          We need a developer to work in paced environment.
        </Text>
        <View style={style.cardButton}>
          <Button title="Apply" color="#1a1c1b" />
        </View>
      </View> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
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
  inputwrapper: {
    width: '50%',
  },
  textBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  Button: {
    width: '30%',
    height: 45,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: '#010614',
    alignSelf: 'flex-end',
    marginRight: 15,
    marginBottom: 10,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Foundation',
    fontSize: 22,
    marginTop: 10,
    color: 'white',
  },
  searchFieldContainer: {
    display: 'flex',
    borderWidth: 3,
    flexDirection: 'row',
    borderRadius: 30,
    margin: 10,
    height: 45,
    paddingHorizontal: 15,
    paddingTop: 3,
    width: '120%',
    color: '#262222',
    alignSelf: 'flex-start',
  },
  icon: {
    marginRight: 5,
  },
  cardView: {
    display: 'flex',
    height: 270,
    margin: 15,
    backgroundColor: 'lightgray',
    padding: 5,
  },
  h1: {
    color: 'black',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    color: 'black',
    margin: 10,
    fontSize: 15,
  },
  h3: {
    color: 'black',
    fontSize: 15,
    marginBottom: 20,
    marginLeft: 10,
  },
  h4: {
    color: 'black',
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 15,
    margin: 10,
    color: 'black',
  },
  cardButton: {
    width: '45%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 10,
    padding: 2,
  },
});

export default FindJobs;
