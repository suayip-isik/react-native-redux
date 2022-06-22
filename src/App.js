import React, { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TodoCard from './components/TodoCard';
import { addTodo, toggle, destroy } from './redux/todos/todoSlice';
import styles from "./App.style";

const App = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  // console.log();
  // console.log(items.length);
  const todoAdd = () => {
    todo === ''
      ? console.log('boş değer girilemez')
      : dispatch(addTodo({ id: items.length, title: todo, completed: true })),
      setTodo('');
  }
  const deleteTodo = (id) => dispatch(destroy(id));
  const getTodo =() => {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i])
    }
  }

  const renderItem = ({ item }) => {
    return (
      <TodoCard
        onPress={() => { dispatch(toggle({ id: item.id })) }}
        deleteButtonOnPress={() => deleteTodo(item.id)}
        style={item.completed == false ? styles.textLine : styles.text}
        title={item.title}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.addView}>
        <TextInput
          style={styles.textInput}
          placeholder='Yapılacakları giriniz...'
          value={todo}
          onChangeText={setTodo}
          onSubmitEditing={todoAdd}
        />

        <TouchableOpacity style={styles.button} onPress={todoAdd}>
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title='get' onPress={getTodo} />
    </View>
  );
}
export default App;

