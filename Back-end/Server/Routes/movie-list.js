"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const movie_list_1 = require("../Controllers/movie-list");
router.get('/movie-list', movie_list_1.DisplayMovieList);
router.post('/add', movie_list_1.ProccessAddPage);
router.post('/edit/:id', movie_list_1.ProccessEditPage);
router.post('/deleted/:id', movie_list_1.ProccessDeletePage);
router.get('/edit/:id', movie_list_1.DisplayEditPage);
router.get('/add', movie_list_1.DisplayAddPage);
exports.default = router;
//# sourceMappingURL=movie-list.js.map