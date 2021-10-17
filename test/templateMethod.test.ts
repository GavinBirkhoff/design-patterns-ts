import { ConcreteClassA, ConcreteClassB } from '../src/templateMethod'
describe('模版方法模式', () => {
  test('模版方法', () => {
    console.log = jest.fn()
    const c1 = new ConcreteClassA()
    c1.templateMethod()
    const c2 = new ConcreteClassB()
    c2.templateMethod()
    expect(console.log).toBeCalledTimes(4)
  })
})
