export const getCharacters = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json)
    .then((characters) => characters.map(character => ({
      name: character.name,
      japaneseName: character.japaneseName,
      image: character.image,
      quote: character.quote,
      personality: character.personality,
      species: character.species,
      skill: character.skill,
      goal: character.goal,
      roast: characters.coffee.roast,
      milk: characters.coffee.milk,
      sugar: characters.coffee.sugar
    })));
};
