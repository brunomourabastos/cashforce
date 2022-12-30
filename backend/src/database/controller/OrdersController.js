const { StatusCodes } = require('http-status-codes');
const { OrdersService } = require('../service/OrdersService');

class OrdersController {
  constructor() {
    this.ordersService = new OrdersService();
  }

  async getOrders(_req, res) {
    try {
      const orders = await this.ordersService.getOrders();
      res.status(StatusCodes.OK).json(orders);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
}

module.exports = { OrdersController };