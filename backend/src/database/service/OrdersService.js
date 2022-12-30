let initModels = require('../models/init-models')
const { sequelize } = require('../models/index')

let models = initModels(sequelize)

class OrdersService {
  constructor() {
    this.orders = models.orders
  }

  async getOrders() {
    const orders = await this.orders.findAll({
      include: [
        {
          model: models.cnpjs, as : 'cnpj',
          attributes: ['cnpj'],
        },
        {
          model: models.users, as : 'user',
          attributes: ['name'],
        },
        {
          model: models.buyers, as : 'buyer',
          attributes: ['name'],
        },
        {
          model: models.providers, as : 'provider',
          attributes: ['name'],
        }
      ]
      })
    return orders
  }
}

module.exports = { OrdersService }