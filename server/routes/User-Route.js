const usersRouter = require('express').Router();
const userCtrl = require('../controllers/User-Cntrl');


usersRouter.get('/', userCtrl.getAllUsers)

usersRouter.get('/:id', userCtrl.getUserId)

usersRouter.post('/', userCtrl.postUser)

usersRouter.put('/:id', userCtrl.putUserId)

usersRouter.delete('/:id', userCtrl.deleteUserId)

module.exports = usersRouter 