// Couldn't find the types of request or response because we didn't have
// express here. But importing directly won't fix it, only by using the method
// from express, then it will load all types of the parameters and variables 
// related

import { Response, Request } from 'express';

export function helloWorld(request: Request, response: Response) {
  return response.json({ message: 'Hello GoStack!' });
}