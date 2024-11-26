import { Router } from "express";
//import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});


router.post('/teste/:id', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});
  

export  {router};
