import React from 'react';
import { useState } from 'react';

export function App(props) {
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${address}`)
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label>Enter wallet address: </label>
          <input type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)}/>
          <input type="submit"/>
      </form>
    </div>
    

  );
}

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
