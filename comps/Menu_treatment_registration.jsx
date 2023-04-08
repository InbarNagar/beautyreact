import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const TreatmentForm = () => {
  const [treatments, setTreatments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState([{ treatment: '', category: '', price: '', duration: '' }]);

  useEffect(() => {
    // Fetch treatments from the database
    fetch('https://localhost:53758/api/Type_Treatment/AllCategory')
      .then(response => response.json())
      .then(data => setTreatments(data))
      .catch(error => console.error(error));
    // Fetch categories from the database
    fetch('https://localhost:53758/api/Category/AllCategory')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  const handleAddForm = () => {
    setFormData([...formData, { treatment: '', category: '', price: '', duration: '' }]);
  };

  const handleFormChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  const handleSubmit = () => {
    // Send form data to the server
    formData.forEach(form => {
      const { category, treatment, price, duration } = form;
      fetch('https://localhost:53758/api/treatments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8', 'Accept': 'application/json'
        },
        body: JSON.stringify({
          category_id: category,
          treatment_id: treatment,
          price: price,
          duration: duration,
        }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Treatment Form</Text>
      {formData.map((form, index) => (
        <View key={index}>
          <Text style={styles.label}>Treatment {index + 1}</Text>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Treatment:</Text>
            <TextInput
              style={styles.input}
              value={form.treatment}
              onChangeText={value => handleFormChange(index, 'treatment', value)}
              placeholder="Select a treatment"
            />
            <Button title="Choose" onPress={() => console.log('Choose treatment')} />
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Category:</Text>
            <TextInput
              style={styles.input}
              value={form.category}
              onChangeText={value => handleFormChange(index, 'category', value)}
              placeholder="Select a category"
            />
            <Button title="Choose" onPress={() => console.log('Choose category')} />
          </View>
          </View>
      )
      )
      }</ScrollView>)
    }
      

