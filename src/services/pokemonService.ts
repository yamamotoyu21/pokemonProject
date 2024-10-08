import Pokemon from "../models/pokemon";

/**
 * Create new Pokemon
 * @param name name of Pokemon
 * @param pokemonType  type of Pokemon
 * @param level  level of Pokemon
 * @returns
 */
export const createPokemon = async (
  name: string,
  pokemonType: string,
  level: number
) => {
  const pokemon = new Pokemon({ name, pokemonType, level });
  return (await pokemon.save()).toObject();
};

/**
 * Find all the pokemon
 * @returns
 */
export const findAllPokemon = async () => {
  return await Pokemon.find().lean();
};

/**
 * Delete a Pokemon
 */
export const deletePokemon = async (id: string) => {
  return await Pokemon.deleteOne({ _id: id });
};
