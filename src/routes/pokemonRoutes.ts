import express from "express";
import * as pokemonController from "../controllers/pokemonController";
import * as poffinController from "../controllers/poffinController";

const router = express.Router();

router.post("/create", pokemonController.createPokemon);
router.get("/list", pokemonController.getAllPokemon);
router.delete("/delete", pokemonController.deletePokemon);

router.post("/poffin/create", poffinController.createPoffin);
router.post("/poffin/feed", poffinController.feedPoffin);

export default router;
