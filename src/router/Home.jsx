import { RepositoryFactory } from '../repositories/RepositoryFactory';
import { useEffect, useState } from 'react';
function Home() {
  const [x, set] = useState('');
  const userRepository = RepositoryFactory.get('users');

  useEffect(() => {
    const userResponse = async () => {
      const response = await userRepository.show(2);
      console.log(response.data);
      //const json = JSON.stringify(response.data);
      set(response.data);
    };
    userResponse();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>{x.id}</p>
      <p>{x.name}</p>
      <p>{x.phone}</p>
      <p>{x.username}</p>
      <p>{x.website}</p>
      <p>{x.email}</p>
    </div>
  );
}

export default Home;
