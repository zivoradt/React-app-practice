import http  from '../components/http-common';
import MovieModel from "../models/movie";
import AuthHeader from './auth-header';

class MovieListDataService
{
    readAll()
    {
        
        return http.get<Array<MovieModel>>("/movie-list", AuthHeader());
        
    }

    create(data: MovieModel)
    {
        return http.post<MovieModel>("/add", data, AuthHeader())
        .then(response=>{
            return response.data;
        })
    }

    // For Edit
    readOne(id:any)
    {
        return http.get<MovieModel>(`/edit${id}`, AuthHeader());
    }

    // Update Movie

    update(data: MovieModel, id:any)
    {
        return http.post(`/edit${id}`, data, AuthHeader());
    }

    // Delete Movie

    delete(id:any)
    {
        return http.post(`/delete${id}`, AuthHeader());
    }
    
}

export default new MovieListDataService();
