const usersRouter = require('express').Router();
const userCtrl = require('../controllers/User-Cntrl');


usersRouter.put('/:id', userCtrl.putUserId)

usersRouter.delete('/:id', userCtrl.deleteUserId)

module.exports = usersRouter 