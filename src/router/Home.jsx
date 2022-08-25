import { RepositoryFactory } from '../repositories/RepositoryFactory';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const userRepository = RepositoryFactory.get('users');

const userResponse = async () => {
  const showResponse = await userRepository.show(2);
  console.log('show', showResponse);

  // const indexResponse = await userRepository.index();
  // console.log('index', indexResponse);

  // const deleteResponse = await userRepository.delete(1);
  // console.log('delete', deleteResponse);
};

userResponse();

export default Home;
