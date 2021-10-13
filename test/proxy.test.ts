import { Proxy1 } from '../src/proxy'
describe('代理模式', () => {
  test('Proxy1', () => {
    const proxy1 = new Proxy1()
    console.log = jest.fn()
    proxy1.request()
    expect(console.log).toBeCalledWith('真实的请求')
  })
})
