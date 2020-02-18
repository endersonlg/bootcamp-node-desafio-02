import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import User from './app/models/User';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'teste',
    email: 'teste@email.com',
    password_hash: 'teste123213',
  });

  return res.json(user);
});

export default routes;