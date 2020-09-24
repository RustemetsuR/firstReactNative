import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './components/Button/Button';


export default function App() {

  const [inputVal, setInputVal] = useState('');

  const numbers = [1,2,3,4,5,6,7,8,9];
  const symbols = ['+', 0, '-', '*', '/'];

  const changeInput = value => {
    setInputVal(value);
  };

  const addToInput = val => {
    setInputVal(inputVal + val);
  }

  const solve = () => {
    if (inputVal !== '') {
      try {
        const finalNum = eval(inputVal.toString());
        setInputVal(finalNum.toString());
      } catch (e) {
        setInputVal("Error");
        setTimeout(() => {
          setInputVal('');
        }, 500);
      }
    }

  };

  const deleteLastValue = () => {
    setInputVal(inputVal.slice(0, -1));
  }

  const clear = () => {
    setInputVal("");
  };

  return (
    <View style={styles.container}>

      <View style={styles.controls}>
        <TextInput
          style={styles.textInput}
          value={inputVal}
          onChangeText={changeInput}
          editable={false} />
      </View>

      <View style={styles.buttons}>
        <Button text='C' pressed={clear} />
        <Button text='=' pressed={solve} />
        <Button text='&lt;' pressed={deleteLastValue} />

        {numbers.map(n => (
          <Button text={n} pressed={() => addToInput(n)} />
        ))}

        {symbols.map(s => (
          <Button text={s} pressed={() => addToInput(s)}/>
        ))}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  textInput: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    textAlign: 'right',
    color: 'white',
    paddingVertical: 10
  },
  controls: {
    flexDirection: "row",
    marginTop: 50,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: "center",
    marginTop: 10,
  },
});
