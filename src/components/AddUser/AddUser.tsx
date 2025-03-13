import './AddUser.scss';
import React from 'react';
import Input from '../ui/input/input';
import { Button } from '@components/ui/button/button';
import { useUser } from '../../context/user.context';

function AddUser() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const { addUser, users } = useUser();

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      return;
    }

    addUser({
      id: users.length + 1,
      name,
      email,
    });

    // Clear form after submission
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleAddUser}>
      <h3>Agregar Usuario</h3>
      <div className="add-user-container">
        <Input placeholder="Nombre..." value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button text="Agregar Usuario" type="submit" onClick={() => {}} />
      </div>
    </form>
  );
}

export default AddUser;
