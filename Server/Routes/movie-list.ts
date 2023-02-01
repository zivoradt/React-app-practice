import express from 'express';
const router = express.Router();


import { DisplayMovieList, ProccessAddPage, ProccessEditPage, ProccessDeletePage, DisplayEditPage, DisplayAddPage } from '../Controllers/movie-list';

router.get('/movie-list', DisplayMovieList);

router.post('/add', ProccessAddPage);

router.post('/edit/:id', ProccessEditPage);

router.post('/deleted/:id', ProccessDeletePage);

router.get('/edit/:id', DisplayEditPage);

router.get('/add', DisplayAddPage);

export default router;
