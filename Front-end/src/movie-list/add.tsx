import React, {ChangeEvent, useEffect, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MovieListDataService from '../services/movie-list.service';
import MovieModel from '../models/movie';

function AddMovie()
{
    const [ID, setID] = useState('');
    const [Name, setName] = useState('');
    const [Year, setYear] = useState('');
    const [Director, setDirector] = useState('');
    const [Rating, setRating] = useState('');
    const navigate = useNavigate();

    function onChangeName(event: ChangeEvent<HTMLInputElement>)
    {
        setName(event.target.value);
    }
    function onChangeDirector(event: ChangeEvent<HTMLInputElement>)
    {
        setDirector(event.target.value);
    }
    function onChangeYear(event: ChangeEvent<HTMLInputElement>)
    {
        setYear(event.target.value);
    }
    function onChangeRating(event: ChangeEvent<HTMLInputElement>)
    {
        setRating(event.target.value);
    }
    
    function saveMovie(event:any)
    {
        event.preventDefault();

        const data: MovieModel = {
            _id: ID,
            Name: Name,
            Year: Year,
            Director: Director,
            Rating: Rating
        }

        MovieListDataService.create(data)
        .then((response:any)=>{
            setID(response.data.id);
            setName(response.data.Name);
            setDirector(response.data.Director);
            setYear(response.data.Year);
            setRating(response.data.Rating);
        })
        .catch((e:Error)=>{
            console.log(e);
        });

        navigate("/movie-list");
        window.location.reload();

    }




    return(
        <div className="container">
    <h1 className="col-lg-6 col-md-10 col-sm-10">Add Movie</h1>
    <hr/>
    <div id="messageArea"></div>

    <div className="row justify-content-lg-center g-3">
      <form onSubmit={saveMovie} className="col-lg-6 col-md-10 col-sm-10">

        <div className="input-group mb-3">
          <span className="input-group-text">Movie Name</span>
          <input id="movieName" name="movieName" type="text" className="form-control" 
          value={Name} onChange={onChangeName}
          aria-label="Movie Name" aria-describedby="Movie Name Input" required/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Director Name</span>
            <input id="movieDirector" name="movieDirector" type="text" className="form-control" 
            value={Director} onChange={onChangeDirector}
            aria-label="Director Name" aria-describedby="Movie Director Input" required/>
          </div>

        <div className="input-group mb-3">
        <span className="input-group-text">Year Released</span>
        <input id="movieYear" name="movieYear" type="text" className="form-control" 
        value={Year} onChange={onChangeYear}
        aria-label="Movie Year" aria-describedby="Movie Year Input" required/>
        </div>

        <div className="input-group mb-3">
        <span className="input-group-text">Rating</span>
        <input id="movieRating" name="movieRating" type="text" className="form-control" 
        value={Rating} onChange={onChangeRating}
        aria-label="Movie Rating" aria-describedby="Movie Rating Input" required/>
        </div>
        
    
       
        <button id="addButton" type="submit" className="btn btn-primary"><i className="fas fa-plus-circle fa-lg"></i> Add</button>
       
        <Link to={"/movie-list"} id="cancelButton" type="button" className="btn btn-warning"><i className="fas fa-undo fa-lg"></i> Cancel</Link>
      
      </form>

    </div>
</div>

    )
}
export default AddMovie;