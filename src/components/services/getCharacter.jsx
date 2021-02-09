export const getCharacter = async(id) => {
  return await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    .then((res) => res.json());
};
