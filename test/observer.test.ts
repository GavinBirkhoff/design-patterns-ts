import { ConcreteSubject, ConcreteObserver } from '../src/observer'

describe('观察者模式', () => {
  test('default', () => {
    const subject = new ConcreteSubject()
    subject.attach(new ConcreteObserver(subject, 'X'))
    subject.attach(new ConcreteObserver(subject, 'Y'))
    subject.attach(new ConcreteObserver(subject, 'Z'))
    subject.setSubjectState('ABC')
    console.log = jest.fn()
    subject.notify()
    expect(console.log).toBeCalledTimes(3)
  })
})
