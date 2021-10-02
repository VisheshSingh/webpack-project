import { useState } from 'react';

const poha = {
  oil: '3 tsp',
  jeera: '1 tsp',
  onions: '1 finely choped',
  'green chillies': '4-5 cut small',
  tomatoes: '1 diced',
  tumeric: '1 pinch',
  poha: 'soaked',
};

const upma = {
  rava: '1 cup light roasted',
  oil: '2 tsp',
  jeera: '1 tsp',
  onions: '1 finely choped',
  'green chillies': '4-5 cut small',
  tomatoes: '2 diced',
  corainder: 'chopped',
  lemon: 'half squeezed',
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <>
      <button onClick={() => setRecipe(poha)}>Make Poha</button>
      <button onClick={() => setRecipe(upma)}>Make Upma</button>

      <ul>
        {Object.keys(recipe).map((ing, i) => (
          <li key={i}>
            {ing}: {recipe[ing]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Recipes;
