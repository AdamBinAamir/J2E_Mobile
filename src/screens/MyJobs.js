import * as React from 'react';
import {useDispatch} from 'react-redux';
import LoadingIndicator from '../Components/LoadingIndicator';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
  ToastAndroid,
} from 'react-native';

const MyJobs = () => {
  const dispatch = useDispatch();
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      // const res = await dispatch();
      setJobs(res);
    } catch (error) {
      // ToastAndroid.show();
    }
    setLoading(false);
  };

  const Data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      jobDescription: 'Software Engineer',
      description: 'We need a software engineer to work in paced environment.',
      location: 'Islamabad',
      salary: '50,000',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      jobDescription: 'Developer',
      description: 'We need a developer to work in paced environment.',
      location: 'Lahore',
      salary: '10,000',
    },
  ];

  const itemRender = ({item}) => (
    <>
      <View style={{marginTop: 0}} />
      <View style={style.cardView}>
        <Text style={style.h1}>{item.jobDescription}</Text>
        <Text style={style.h2}>{item.location}</Text>
        <Text style={style.h3}>Salary: {item.salary}</Text>
        <Text style={style.h4}>Description: </Text>
        <Text style={style.h5}>{item.description}</Text>
        <View style={style.cardButton}>
          <Button
            style={style.cardButton}
            title="Update Status"
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
      <Text style={style.textTitle}>Jobs of *Username*</Text>

      <FlatList
        data={Data}
        renderItem={itemRender}
        keyExtractor={item => item.id}
      />

      {/* <View style={style.cardView}>
        <Text style={style.h1}>Software Engineer</Text>
        <Text style={style.h2}>Islamabad</Text>
        <Text style={style.h3}>Salary: 50,000</Text>
        <Text style={style.h4}>Description:</Text>
        <Text style={style.h5}>
          We need a software Engineer to work in paced environment.
        </Text>
        <Text style={style.h6}>Status: Hired</Text>
        <View style={style.cardButton}>
          <Button title="Update Status" color="#1a1c1b" />
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
        <Text style={style.h6}>Status: Rejected</Text>
        <View style={style.cardButton}>
          <Button title="Update Status" color="#1a1c1b" />
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
    fontSize: 22,
    margin: 10,
    padding: 10,
    alignSelf: 'flex-start',
    color: '#010614',
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
  h6: {
    fontSize: 15,
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  cardButton: {
    width: 160,
    alignSelf: 'center',
  },
});

export default MyJobs;
