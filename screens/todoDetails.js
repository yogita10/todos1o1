import React,{useEffect, useState} from 'react'
import {SafeAreaView, View,  TextInput, Stylesheet, Text} from 'react-native'
import axios from 'axios';
function TodoDetails({route}) {
    const [todo, setTodo] = useState({}) ; 


    useEffect(()=>{
        axios
          .get(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`)
          .then(function (response) {
            // handle success
            // alert(JSON.stringify(response.data));
            setTodo(response.data);
            console.log(response.data) ;  
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            // alert('Finally called');
          });
    
    
        }, [])


    return (
        <View>
            <Text>{todo.userId}</Text>
            <Text>{todo.id}</Text>
            <Text>{todo.title}</Text>
            <Text>{todo.completed? "completed" : "false"}</Text>
        </View>
    )
}

export default TodoDetails
