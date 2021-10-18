import { Adapter } from '../src/adapter'
describe('适配器模式', () => {
  test('default', () => {
    console.log = jest.fn()
    const target = new Adapter()
    target.request()
    expect(console.log).toBeCalledWith('特殊请求')
  })
})
