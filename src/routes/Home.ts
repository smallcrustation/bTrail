import express, {Router, json, Request, Response, NextFunction} from 'express'

const HomeRouter = Router()
// const jsonParser = json()

HomeRouter.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API Home Hello'
  })
})


export default HomeRouter