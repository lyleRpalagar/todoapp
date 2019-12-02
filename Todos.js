import React, { useState } from "react";
import { ScrollView, Text, KeyboardAvoidingView } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { Appbar, TextInput, Button } from "react-native-paper";

function Todos() {
  const [todo, setTodo] = useState("");
  const ref = firestore().collection("todos");
  // ...
  async function addTodo() {
    console.log('i have been clicked');
    await ref.add({
      title: todo,
      complete: false
    });
    setTodo("");
  }
  return (
    <>
      <Appbar>
        <Appbar.Content title={"TODOs List"} />
      </Appbar>
      <ScrollView style={{ flex: 1 }}>
        <Text>List of TODOs!</Text>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" enabled>
      <TextInput label={"New Todo"} value={todo} onChangeText={setTodo} />
      </KeyboardAvoidingView>
      <Button onPress={() => addTodo()}>Add TODO</Button>
    </>
  );
}

export default Todos;
