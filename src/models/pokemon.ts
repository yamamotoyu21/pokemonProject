import mongoose, { Document, Schema } from "mongoose";

/**
 * List of pokemon types
 */
const PokemonTypes = [
  "Normal",
  "Fire",
  "Water",
  "Electric",
  "Grass",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
] as const;

type PokemonType = (typeof PokemonTypes)[number];

/**
 * Basic Schema for Pokemon
 */
interface IPokemon extends Document {
  name: string;
  pokemonType: PokemonType;
  level: number;
}
const PokemonSchema: Schema = new Schema<IPokemon>({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 8,
  },
  pokemonType: {
    type: String,
    required: true,
    enum: PokemonTypes,
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
});

const Pokemon = mongoose.model<IPokemon>("Pokemon", PokemonSchema);
export default Pokemon;
