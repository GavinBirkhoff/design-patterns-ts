import { Person, TShirts, BigTrouser } from '../src/decorator'

describe('装饰模式', () => {
  test('扮靓', () => {
    const gavin = new Person('Gavin')
    const dtx = new TShirts()
    const dkk = new BigTrouser()
    dtx.deractor(gavin)
    dkk.deractor(dtx)
    console.log = jest.fn()
    dkk.show()
    //TODO
    expect(console.log).toHaveBeenLastCalledWith('装扮的Gavin')
  })
})
