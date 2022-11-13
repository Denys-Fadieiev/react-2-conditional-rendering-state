import React from 'react';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <>
      <Message author='John' textMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'/>
      <Message author='Ann' textMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'/>
    </>
  );
}

export default App;
