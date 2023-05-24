/**
 * @module utils/formatters
 */

/**
 * Format the salary
 * @function formatSalary
 * @param value - salary value
 */
function formatSalary(value: number | undefined): string {
  if (value === undefined) {
    return ''
  }
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export { formatSalary }
