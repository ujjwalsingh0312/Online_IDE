import express from "express";
const ideRoutes = express.Router();
ideRoutes.post('/compile')
ideRoutes.post('/execute')
ideRoutes.get('/question')
ideRoutes.get('/questions')

export default ideRoutes;