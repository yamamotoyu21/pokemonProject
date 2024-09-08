import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";

export const createPokemon = async (req: Request, res: Response) => {
  try {
    const { name, pokemonType, level } = req.body;
    const pokemon = pokemonService.createPokemon(name, pokemonType, level);
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: "failed to create pokemon" });
  }
};

export const getAllPokemon = async (req: Request, res: Response) => {
  try {
    const pokemons = await pokemonService.findAllPokemon();
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: "Failed to find pokemon" });
  }
};

export const deletePokemon = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    await pokemonService.deletePokemon(id);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: `Failed to delete pokemon` });
  }
};
