import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Crud from './Crud';

function App() {
  const [compo,setCompo]=useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 onClick={()=>setCompo('cruds')}> List Of Posts</h3>
        {compo==='cruds'?<Crud/>:null}
      </header>
    </div>
  );
}

export default App;