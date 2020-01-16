import React, {useState} from 'react';
import List from './List.jsx';

const App = () => {
  const [todos, setTodos] = useState('js공부');
  return (
    <div>
      <h1>todo 애플리케이션</h1>
      <form action="">
        <input type="text"/>
        <button> 할일추가 </button>
      </form>
      <List />
    </div>
  )
}

export default App;
