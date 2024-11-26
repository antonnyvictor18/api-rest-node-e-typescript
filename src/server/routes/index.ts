import { Router, Request, Response } from "express";
import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.post(
    '/cidades', 
    CidadesController.createValidation,
    CidadesController.create);

export { router };