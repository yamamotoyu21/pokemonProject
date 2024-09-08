import Pokemon from "../models/pokemon";
import Poffin from "../models/poffin";

export const createPoffin = async (name: string, friendshipLoyalty: number) => {
  const poffin = new Poffin({ name, friendshipLoyalty });
  return (await poffin.save()).toObject();
};

export const givePoffin = async (poffinName: string, pokemonId: string) => {
  const poffin = await Poffin.findOne({ name: poffinName });

  if (!poffin) {
    throw new Error("poffin not found");
  }

  const effect = poffin.friendshipLoyalty;

  const pokemon = await Pokemon.findById(pokemonId);

  if (!pokemon) {
    throw new Error("pokemon not found");
  }

  pokemon.friendshipLoyalty += effect;

  await pokemon.save();
  return pokemon.toObject();
};
