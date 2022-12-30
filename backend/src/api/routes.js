const express = require('express');
const routes = express.Router();
const { OrdersController } = require('../database/controller/OrdersController');

const ordersController = new OrdersController();

routes.get('/orders', (req, res ) => ordersController.getOrders(req, res));


module.exports = { routes };