import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import {useState} from 'react';
import {TouchableWithoutFeedback,Animated,Easing} from 'react-native';

export default function Calculator(){

  const [currentInput,setCurrentInput] = useState('0');
  const [firstOperator,setFirstOperator] = useState(false);
  const [secondOperator,setSecondOperator] = useState(false);

  const isoperator = (value)=>{
    switch(value){
      case '+':
      case '-':
      case '/':
      case '*':
      case '%':
        return true;
    }
    return false;
  }

  const handlePress = (value) => {
    setSecondOperator(firstOperator && isoperator(value));
    setFirstOperator(isoperator(value));

    if (value === 'C') {
      setSecondOperator(true);
      setFirstOperator(true)
      setCurrentInput('0');
    }else if (value === '=') {
      setCurrentInput(eval(currentInput));
    } else {
      if (currentInput==='0') {
        setCurrentInput(value);
      } else {
        setCurrentInput(currentInput+value);
      }
    }
  };

   const animatedValue = new Animated.Value(0)

    const animatedValueInterpolateScale = animatedValue.interpolate({
       inputRange:[0,0.5,1,1.5,2,2.5,3],
      outputRange:[0,-15,0,15,0,-10,0]
      })

      const style={
        transform:[
          {translateX:animatedValueInterpolateScale}
        ]
      }

    const pressInHandler = () => {
      animatedValue.setValue(0);
        Animated.timing(
           animatedValue,
            {
                toValue: 3,
                duration: 400,
                ease : Easing.bounce
            }
        ).start()
    }

    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{currentInput}</Text>
  </View>
        <View style={styles.buttonContainer}>
          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('C');}}
            >
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('.')}}
            >
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('%')}}
            >
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => {handlePress('/')}}
            >
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </Animatable.View>


          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('7')}}
            >
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('8')}}
            >
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('9')}}
            >
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
             onPress={() => {handlePress('*')}}
            >
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('4')}}
            >
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('5')}}
            >
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('6')}}
            >
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => {handlePress('-')}}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('1')}}
            >
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('2')}}
            >
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('3')}}
            >
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => {handlePress('+')}}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </Animatable.View>


          <Animatable.View style={styles.buttonRow} animation="fadeIn">
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('(')}}
            >
              <Text style={styles.buttonText}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress('0')}}
            >
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {handlePress(')')}}
            >
              <Text style={styles.buttonText}>)</Text>
            </TouchableOpacity>
            {secondOperator?
            <TouchableOpacity onPressIn={pressInHandler}>
             <TouchableWithoutFeedback >
              <Animated.View style={[styles.button, styles.operatorButton , {transform:[{ rotateZ:animatedValueInterpolateScale }]}]}
            ><Text style={styles.buttonText}>=</Text>
            </Animated.View>
             </TouchableWithoutFeedback>
            </TouchableOpacity>
            :<TouchableOpacity
              style={[styles.button, styles.operatorButton]}
              onPress={() => {handlePress('=')}}
            >
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>}
          </Animatable.View>

         </View>
         </View>
    )
}


