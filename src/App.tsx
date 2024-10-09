import {Person} from './person';
import {useState} from 'react';
function App() {
  return (
    <div>
      <Person name="John" age={25} isMarried={true}/>
    </div>
  )
}

export default App
