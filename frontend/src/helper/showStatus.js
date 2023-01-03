export function showStatus (status) {
  switch (status) {
    case '0':
      return 'Pendente de confirmação'
    case '1':
      return 'Pedido confirmado'
    case '2':
      return 'Não reconhece o pedido'
    case '3':
      return 'Mercadoria não recebida'
    case '4':
      return 'Recebida com avaria'
    case '5':
      return 'Devolvida'
    case '6':
      return 'Recebida com devolução parcial'
    case '7':
      return 'Recebida e confirmada'
    case '8':
      return 'Recebida e confirmada'
    default:
      break
  }
}
