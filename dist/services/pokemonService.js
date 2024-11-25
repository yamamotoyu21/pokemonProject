"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePokemon = exports.findAllPokemon = exports.createPokemon = void 0;
const pokemon_1 = __importDefault(require("../models/pokemon"));
/**
 * Create new Pokemon
 * @param name name of Pokemon
 * @param pokemonType  type of Pokemon
 * @param level  level of Pokemon
 * @returns
 */
const createPokemon = (name, pokemonType, level) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemon = new pokemon_1.default({ name, pokemonType, level });
    return (yield pokemon.save()).toObject();
});
exports.createPokemon = createPokemon;
/**
 * Find all the pokemon
 * @returns
 */
const findAllPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield pokemon_1.default.find().lean();
});
exports.findAllPokemon = findAllPokemon;
/**
 * Delete a Pokemon
 */
const deletePokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield pokemon_1.default.deleteOne({ _id: id });
});
exports.deletePokemon = deletePokemon;
