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
  return await pokemon.save();
};

/**
 * Find all the pokemon
 * @returns
 */
export const findAllPokemon = async () => {
  return await Pokemon.find();
};
