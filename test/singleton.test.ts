import { Singleton } from '../src/singleton'
describe('单例模式', () => {
  test('default', () => {
    const s1 = Singleton.getInstance()
    const s2 = Singleton.getInstance()

    expect(s1).toEqual(s2)
  })
})
