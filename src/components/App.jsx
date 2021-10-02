import '../styles/index.scss';
import Recipes from './Recipes';
import webpackLogo from '../images/wp-logo.svg';

const App = () => {
  return (
    <div className='container'>
      <section className='hero'></section>
      <h1 className='center'>Oh hai, from React🎃</h1>
      <img
        src={webpackLogo}
        alt='logo'
        width={250}
        height={100}
        className='center'
      />
      <Recipes />
    </div>
  );
};

export default App;
