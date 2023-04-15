import { useState } from 'react';
import './App.css';
import JsonFile from './mackaroo.json';

function App() {
  //setting the hook wich is string type
  const [ serachTerm, setSearchTerm] = useState("");
  return (
    <div className='App'>
      <input type='text' placeholder='Search...' 
      onChange={(event) => {setSearchTerm(event.target.value)}}/>
      
      {/*Using the filter function to filter the input */}
      {JsonFile.filter((val)=>{
        if (serachTerm === ""){
          return val;
        } else if (val.first_name.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase())) { 
          return val
        }
      }).map((val, key) => {
        return (
          <div className='user' key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
