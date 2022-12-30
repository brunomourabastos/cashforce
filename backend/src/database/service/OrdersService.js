let initModels = require('../models/init-models')
const { sequelize } = require('../models/index')

let models = initModels(sequelize)

class OrdersService {
  constructor() {
    this.orders = models.orders
  }

  async getOrders() {
    const orders = await this.orders.findAll()
    return orders
  }
}

module.exports = { OrdersService }