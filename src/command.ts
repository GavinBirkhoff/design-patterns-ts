abstract class Command {
  protected receiver: Receiver
  constructor(receiver: Receiver) {
    this.receiver = receiver
  }

  public abstract execute(): void
}

class ConcreteCommand extends Command {
  constructor(receiver: Receiver) {
    super(receiver)
  }

  public execute() {
    this.receiver.action()
  }
}

class Invoker {
  private command?: Command
  public setCommand(command: Command) {
    this.command = command
  }

  public executeCommand() {
    this.command?.execute()
  }
}

class Receiver {
  public action() {
    console.log('执行请求')
  }
}

const receiver = new Receiver()
const cc = new ConcreteCommand(receiver)
const i = new Invoker()
i.setCommand(cc)
i.executeCommand()

// 以上是模型

class Barbecuer {
  public bakeMutton() {
    console.log(`烤羊肉串`)
  }
  public bakeChickenWing() {
    console.log(`烤鸡翅`)
  }
}

abstract class Command1 {
  protected receiver: Barbecuer
  constructor(receiver: Barbecuer) {
    this.receiver = receiver
  }

  public abstract executeCommand(): void
  public toString() {
    return `命令模式.${Reflect.getPrototypeOf(this)?.constructor.name}`
  }
}

class BakeMuttonCommand extends Command1 {
  public override executeCommand() {
    this.receiver.bakeMutton()
  }
}

class BakeChickenWingCommand extends Command1 {
  public override executeCommand() {
    this.receiver.bakeChickenWing()
  }
}

class Waiter {
  //   private command?: Command1
  private orders = new Set<Command1>()
  public setOrder(command: Command1) {
    if (command.toString() === '命令模式.BakeChickenWingCommand') {
      console.log(`服务员：鸡翅没有了，请点别的烧烤`)
    } else {
      this.orders.add(command)
      console.log(`增加订单：${command.toString()} 时间：${new Date()}`)
    }
  }
  public cancelOrder(command: Command1) {
    this.orders.delete(command)
    console.log(`取消订单：${command.toString()} 时间：${new Date()}`)
  }
  public notify() {
    this.orders.forEach((order) => {
      order.executeCommand()
    })
  }
}

// // 开店前的准备
// const boy = new Barbecuer()
// const bakeMuttonCommand1 = new BakeMuttonCommand(boy)
// const bakeMuttonCommand2 = new BakeMuttonCommand(boy)
// const bakeChickenWingCommand1 = new BakeChickenWingCommand(boy)
// const girl = new Waiter()
// // 开门营业顾客点餐
// girl.setOrder(bakeMuttonCommand1)
// girl.setOrder(bakeMuttonCommand2)
// girl.setOrder(bakeChickenWingCommand1)

// // 点菜完毕通知后厨
// girl.notify()

export { Barbecuer, BakeMuttonCommand, BakeChickenWingCommand, Waiter }
