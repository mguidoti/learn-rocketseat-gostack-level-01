// Couldn't find the types of request or response because we didn't have
// express here. But importing directly won't fix it, only by using the method
// from express, then it will load all types of the parameters and variables 
// related

import { Response, Request } from 'express';

import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {

  // Because of TypeScript, if I uncomment the line bellow, I'll get an error
  // due to the lack of required parameters
  // const user = createUser();

  // Due to TypeScript, the line bellow will also accuse an error in the last
  // parameter for not complying with the correct type
  // const user = createUser('Marcus', 'mguidoti@gmail.com', 123124);

  const user = createUser({
    email: 'mguidoti@gmail.com',
    password: '123456',
    techs: [
      'NodeJS', 
      'React',
      { title: 'JavaScript', experience: 100 },
    ]
  });

  return response.json({ message: user });

}