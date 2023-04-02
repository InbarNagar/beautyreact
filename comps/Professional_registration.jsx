import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Professional_registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    fetch('http://localhost:53758/api/Professional/NewProfessional', {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data; charset=UTF-8', 'Accept': 'multipart/form-data'},
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        phone,
        email,
        street,
        houseNumber,
        city,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <View>
      <TextInput
        placeholder="שם פרטי"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        placeholder="שם משפחה"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        placeholder="מין"
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <TextInput
        placeholder="תאריך לידה"
        value={dateOfBirth}
        onChangeText={(text) => setDateOfBirth(text)}
      />
      <TextInput
        placeholder="פלאפון"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        placeholder="אימייל"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="רחוב"
        value={street}
        onChangeText={(text) => setStreet(text)}
      />
      <TextInput
        placeholder="מספר בית"
        value={houseNumber}
        onChangeText={(text) => setHouseNumber(text)}
      />
      <TextInput
        placeholder="עיר"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TextInput
        placeholder="סיסמה"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="אישור" onPress={handleRegistration}/>
    </View>
    )
}

export default Professional_registration;

