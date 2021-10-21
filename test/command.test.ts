import { Barbecuer, BakeMuttonCommand, BakeChickenWingCommand, Waiter } from '../src/command'
describe('命令模式', () => {
  test('烤串', () => {
    // 开店前的准备
    const boy = new Barbecuer()
    const bakeMuttonCommand1 = new BakeMuttonCommand(boy)
    const bakeMuttonCommand2 = new BakeMuttonCommand(boy)
    const bakeChickenWingCommand1 = new BakeChickenWingCommand(boy)
    const girl = new Waiter()
    // 开门营业顾客点餐
    girl.setOrder(bakeMuttonCommand1)
    girl.setOrder(bakeMuttonCommand2)
    girl.setOrder(bakeChickenWingCommand1)

    // 点菜完毕通知后厨
    girl.notify()

    // expect TODO
  })
})
