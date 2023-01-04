import { format } from 'date-fns'

export function formatValue (value) {
  return (+value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function formatDate (value) {
  return format(new Date(value), 'dd/MM/yyyy')
}
