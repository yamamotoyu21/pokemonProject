import { Request, Response } from "express";
import * as poffinService from "../services/poffinService";

export const createPoffin = async (req: Request, res: Response) => {
  try {
    const { name, friendshipLoyalty } = req.body;
    const poffin = await poffinService.createPoffin(name, friendshipLoyalty);
    res.status(201).json(poffin);
  } catch (error) {
    res.status(500).json({ error: "failed to create poffin" });
  }
};

export const feedPoffin = async (req: Request, res: Response) => {
  try {
    const { poffinName, pokemonId } = req.body;
    const pokemon = await poffinService.givePoffin(poffinName, pokemonId);
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: "failed to feed poffin" });
  }
};
