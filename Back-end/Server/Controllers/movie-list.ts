import express from 'express';
import { CallbackError } from 'mongoose';

import Movie from '../Models/movie';


export function DisplayMovieList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Movie.find(function(err, moviesCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
    
        res.json({success: true, message: 'Movie-List Displayed Successfully', movies: moviesCollection, user: req.user});
    });
}

export function ProccessAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let newMovie = new Movie({
        "Name" : req.body.Name,
        "Director": req.body.Director,
        "Year": req.body.Year,
        "Rating": req.body.Rating

    });

    // Insert the new Movie object into the database (movie collection)

    Movie.create(newMovie, function(err:CallbackError){
        if (err) {
            console.error(err);
            res.end(err);
        }

    })
        // New Movie has been added to list
        res.json({success: true, message: 'Movie Added Successfully', movies: newMovie});
    
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.json({success: true, message : 'Add Page Displayed Successfully'});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let id = req.params.id;

    Movie.findOne({_id: id}, {}, {}, function(err, movieToEdit){
        if (err) {
            console.error(err);
            res.end(err);
        }
        // Movie has been added to list from database
        res.json({success: true, message: 'Movie Add to Edit Successfully', movies: movieToEdit});
    })
    
}

export function ProccessEditPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let id = req.params.id;

    let updateMovie = new Movie({
        "Name" : req.body.Name,
        "Director": req.body.Director,
        "Year": req.body.Year,
        "Rating": req.body.Rating

    });

    // Edit the Movie object into the database (movie collection)

    Movie.updateOne({_id: id}, updateMovie, function(err:CallbackError){
        if (err) {
            console.error(err);
            res.end(err);
        }

    })
        // New Movie has been added to list
        res.json({success: true, message: 'Movie Edited Successfully', movies: updateMovie});
    
}

export function ProccessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    let id = req.params.id;

    
    // Remove the Movie object from the database (movie collection)

    Movie.remove({_id: id}, function(err:CallbackError){
        if (err) {
            console.error(err);
            res.end(err);
        }

    })
        // New Movie has been added to list
        res.json({success: true, message: 'Movie Deleted Successfully'});
    
}