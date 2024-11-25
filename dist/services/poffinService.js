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
exports.givePoffin = exports.createPoffin = void 0;
const pokemon_1 = __importDefault(require("../models/pokemon"));
const poffin_1 = __importDefault(require("../models/poffin"));
const createPoffin = (name, friendshipLoyalty) => __awaiter(void 0, void 0, void 0, function* () {
    const poffin = new poffin_1.default({ name, friendshipLoyalty });
    return (yield poffin.save()).toObject();
});
exports.createPoffin = createPoffin;
const givePoffin = (poffinName, pokemonId) => __awaiter(void 0, void 0, void 0, function* () {
    const poffin = yield poffin_1.default.findOne({ name: poffinName });
    if (!poffin) {
        throw new Error("poffin not found");
    }
    const effect = poffin.friendshipLoyalty;
    const pokemon = yield pokemon_1.default.findById(pokemonId);
    if (!pokemon) {
        throw new Error("pokemon not found");
    }
    pokemon.friendshipLoyalty += effect;
    yield pokemon.save();
    return pokemon.toObject();
});
exports.givePoffin = givePoffin;
