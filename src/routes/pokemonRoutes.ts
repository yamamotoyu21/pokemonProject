import express from "express";
import * as pokemonController from "../controllers/pokemonController";

const router = express.Router();

router.post("/create", pokemonController.createPokemon);
router.get("/", pokemonController.getAllPokemon);
router.delete("/delete", pokemonController.deletePokemon);

export default router;
