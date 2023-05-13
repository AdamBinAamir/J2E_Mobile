import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import axios from 'axios';

const Shorlisted = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const item = await AsyncStorage.getItem('itemid');
    console.log('Itemid: ', item);
    try {
      const response = await axios.get(`https://4be6-206-84-141-94.ngrok-free.app/application?job_id=${item}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer} key={item.user_id}>
      <Text style={styles.name}>Applicant Name: {item.name}</Text>
      <Text style={styles.name}>Email: {item.email}</Text>
      <Text style={styles.name}>Status: {item.status}</Text>
      <Text style={styles.name}>Education: {item.education}</Text>
      <Text style={styles.name}>Phone: {item.phone}</Text>
      <Text style={styles.name}>Skills: {item.skills}</Text>
      <Text style={styles.name}>Experience: {item.experiences}</Text>
    </View>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Users found.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.user_id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Shorlisted;
