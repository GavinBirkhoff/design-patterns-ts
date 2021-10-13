import { CashContext } from '../src/strategy'
describe('策略模式', () => {
  test('正常收费', () => {
    const csuper = new CashContext('正常收费')
    expect(csuper.getResult(100)).toBe(100)
  })
  test('满300返100', () => {
    const csuper = new CashContext('满300返100')
    expect(csuper.getResult(600)).toBe(400)
  })
  test('打8折', () => {
    const csuper = new CashContext('打8折')
    expect(csuper.getResult(600)).toBe(480)
  })
})
