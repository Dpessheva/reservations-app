import React from 'react';
import './App.css';
import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      <Home></Home>
      <Rooms></Rooms>
      <SingleRoom></SingleRoom>
      <ErrorPage></ErrorPage>
   </>
  );
}

export default App;
