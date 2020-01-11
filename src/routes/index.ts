import { Router, NextFunction, Request, Response } from 'express';
import UserRouter from './Users';
import Home from './Home'

// Init router and path
const router = Router();

let authorized = true

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (authorized){
    next()
  } else {
    res.status(403).send('Unauthorized!')
    return
  }
}

// Add sub-routes
router.use('/users', UserRouter);
router.use('/home', checkAuth, Home)
router.use(function(req, res){
  console.log('404 man')
  return res.status(404).json({error: {message: '404 API endpoint Not Found'}})
})

// Export the base-router
export default router;
