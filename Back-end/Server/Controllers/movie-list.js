"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProccessDeletePage = exports.ProccessEditPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.ProccessAddPage = exports.DisplayMovieList = void 0;
const movie_1 = __importDefault(require("../Models/movie"));
function DisplayMovieList(req, res, next) {
    movie_1.default.find(function (err, moviesCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Movie-List Displayed Successfully', movies: moviesCollection, user: req.user });
    });
}
exports.DisplayMovieList = DisplayMovieList;
function ProccessAddPage(req, res, next) {
    let newMovie = new movie_1.default({
        "Name": req.body.Name,
        "Director": req.body.Director,
        "Year": req.body.Year,
        "Rating": req.body.Rating
    });
    movie_1.default.create(newMovie, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    res.json({ success: true, message: 'Movie Added Successfully', movies: newMovie });
}
exports.ProccessAddPage = ProccessAddPage;
function DisplayAddPage(req, res, next) {
    res.json({ success: true, message: 'Add Page Displayed Successfully' });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    movie_1.default.findOne({ _id: id }, {}, {}, function (err, movieToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.json({ success: true, message: 'Movie Add to Edit Successfully', movies: movieToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProccessEditPage(req, res, next) {
    let id = req.params.id;
    let updateMovie = new movie_1.default({
        "Name": req.body.Name,
        "Director": req.body.Director,
        "Year": req.body.Year,
        "Rating": req.body.Rating
    });
    movie_1.default.updateOne({ _id: id }, updateMovie, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    res.json({ success: true, message: 'Movie Edited Successfully', movies: updateMovie });
}
exports.ProccessEditPage = ProccessEditPage;
function ProccessDeletePage(req, res, next) {
    let id = req.params.id;
    movie_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
    });
    res.json({ success: true, message: 'Movie Deleted Successfully' });
}
exports.ProccessDeletePage = ProccessDeletePage;
//# sourceMappingURL=movie-list.js.map