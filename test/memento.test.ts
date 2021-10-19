import { Originator, Caretaker, Memento } from '../src/memento'
describe('备忘录模式', () => {
  test('default', () => {
    const o = new Originator()
    o.setState('On')
    // o.show()
    expect(o.getState()).toBe('On')
    const c = new Caretaker()
    c.setMemento(o.createMemento())
    o.setState('Off')
    // o.show()
    expect(o.getState()).toBe('Off')
    o.setMemento(c.getMemento() as Memento)
    // o.show()
    expect(o.getState()).toBe('On')
  })
})
