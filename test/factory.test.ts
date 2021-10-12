import { Operation, OperationFactory } from '../src/factory'
describe('简单工程模式', () => {
  const calc = (operate: string) => (numA: number) => (numB: number) => {
    const operation = OperationFactory.createOperate(operate)
    if (operation === null) return null
    operation.setNumberA(numA)
    operation.setNumberB(numB)
    const re = operation.getResult()
    return re
  }
  test('2+3=5', () => {
    const re = calc('+')(2)(3)
    expect(re).toBe(5)
  })
  test('3-2=1', () => {
    const re = calc('-')(3)(2)
    expect(re).toBe(1)
  })
  test('2*3=5', () => {
    const re = calc('*')(2)(3)
    expect(re).toBe(6)
  })
  test('5/2=2.5', () => {
    const re = calc('/')(5)(2)
    expect(re).toBe(2.5)
  })
  test('5/0=?', () => {
    expect(() => {
      calc('/')(5)(0)
    }).toThrowError('除数不能为0')
  })
})
