import api from '..'

const getAllOrders = async () => api.get('/orders')

export default getAllOrders
