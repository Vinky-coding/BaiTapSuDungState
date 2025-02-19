import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newMessage, newColor) => {
    this.setState({ message: newMessage, backgroundColor: newColor });
    Alert.alert(newMessage);
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <TitleComponent title="" color="blue" />
        <ButtonComponent
          backgroundColor="green"
          onClick={this.handleButtonClick}
          colorChange="#008000" 
          text="GREEN"
        />
         <ButtonComponent
          backgroundColor="blue"
          onClick={this.handleButtonClick}
          colorChange="#0018F9" // blue
          text="BLUE   "
        />
        <ButtonComponent
          backgroundColor="brown"
          onClick={this.handleButtonClick}
          colorChange="#964B00" // brown
          text="BROWN"
        />
        <ButtonComponent
          backgroundColor="yellow"
          onClick={this.handleButtonClick}
          colorChange="#FFFF00" 
          text="YELLOW"
        />
        <ButtonComponent
          backgroundColor="red"
          onClick={this.handleButtonClick}
          colorChange="#FF0000" 
          text="RED    "
        />
        <ButtonComponent
          backgroundColor="black"
          onClick={this.handleButtonClick}
          colorChange="#000000" 
          text="BLACK"
        />
        {this.state.message && <Text style={styles.message}>{this.state.message}</Text>}
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange, text } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(message, colorChange)}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
     paddingVertical: 10,
    paddingHorizontal: 20, // Consistent padding for all buttons
    borderRadius: 5,
    marginVertical: 10,
    minWidth: 300, // Ensures all buttons have at least this width
    alignItems: 'center', // Centers text inside button
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
