import { Work } from '../src/state'
describe('状态模式', () => {
  test('工作状态', () => {
    const w = new Work()
    w.hour = 9
    w.writeProgram()
    w.hour = 10
    w.writeProgram()
    w.hour = 12
    w.writeProgram()
    w.hour = 13
    w.writeProgram()
    w.hour = 14
    w.writeProgram()
    w.hour = 17
    w.taskFinished = false
    w.writeProgram()
    w.hour = 19
    w.writeProgram()
    w.hour = 22
    w.writeProgram()
    expect(Reflect.getPrototypeOf(w.getState())?.constructor.name).toBe('SleepingState')
  })
})
