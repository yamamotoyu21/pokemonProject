import { program } from "commander";
import mongoose from "mongoose";
import dotenv from "dotenv";
import * as pokemonService from "./src/services/pokemonService";

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/pokemon-game"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

program.version("1.0.0").description("Pokemon Game CLI");

program
  .command("create <name> <type> <level>")
  .description("Create a new Pokemon")
  .action(async (name, type, level) => {
    await connectToDatabase();
    try {
      const pokemon = await pokemonService.createPokemon(
        name,
        type,
        parseInt(level)
      );
      console.log("Pokemon created:", pokemon);
    } catch (error) {
      console.error("Error creating Pokemon:", error);
    } finally {
      await mongoose.disconnect();
    }
  });

program
  .command("list")
  .description("List all Pokemon")
  .action(async () => {
    await connectToDatabase();
    try {
      const pokemons = await pokemonService.findAllPokemon();
      console.table(pokemons);
    } catch (error) {
      console.error("Error listing Pokemon:", error);
    } finally {
      await mongoose.disconnect();
    }
  });

program
  .command("delete <id>")
  .description("delete one pokemon")
  .action(async (id) => {
    await connectToDatabase();
    try {
      await pokemonService.deletePokemon(id);
      console.log("pokemon was successsfully deleted");
    } catch (error) {
      console.log("Error deleting Pokemon", error);
    } finally {
      await mongoose.disconnect();
    }
  });

program.parse(process.argv);
