import { useEffect, useState } from 'react';

import CardList from './components/card-list/CardList';
import Input from './components/input/Input';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const fetchUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    };
    fetchUsers();
  }, []);

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  
  const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(inputText.toLowerCase())
  );
  
  return (
    <div className='App'>
      <h1>My AI Friends</h1>
      <Input onChangeHandler={onChangeHandler} placeholder='search' />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default App;
