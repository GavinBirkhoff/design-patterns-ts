import { Facade } from '../src/facade'
describe('外观模式', () => {
  test('default', () => {
    console.log = jest.fn()
    const facade = new Facade()
    facade.methodA()
    facade.methodB()
    expect(console.log).toBeCalledTimes(5)
  })
})
