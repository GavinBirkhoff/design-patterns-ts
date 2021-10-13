import { switchCase } from '@babel/types'

abstract class Strategy {
  // 算法方法
  public abstract algorithmInterface(): void
}

class ConcreteStrategyA extends Strategy {
  public algorithmInterface() {}
}
class ConcreteStrategyB extends Strategy {
  public algorithmInterface() {}
}
class ConcreteStrategyC extends Strategy {
  public algorithmInterface() {}
}

// 上下文
class Context {
  strategy: Strategy
  // 初始化传入具体的策略对象
  constructor(strategy: Strategy) {
    this.strategy = strategy
  }
  // 上下文接口
  public contextInterface() {
    // 根据具体的策略对象调用其算法对象
    this.strategy.algorithmInterface()
  }
}

let context = new Context(new ConcreteStrategyA())
context.contextInterface()
// 以上是模型

abstract class CashSuper {
  public abstract acceptCash(money: number): number
}

class CashNormal extends CashSuper {
  public acceptCash(money: number): number {
    return money
  }
}

class CashRebate extends CashSuper {
  private moneyRebate = 1
  constructor(moneyRebate: string) {
    super()
    this.moneyRebate = parseFloat(moneyRebate)
  }
  public acceptCash(money: number): number {
    return money * this.moneyRebate
  }
}

class CashReturn extends CashSuper {
  private moneyCondition = 0.0
  private moneyReturn = 0.0
  constructor(moneyCondition: string, moneyReturn: string) {
    super()
    this.moneyCondition = parseFloat(moneyCondition)
    this.moneyReturn = parseFloat(moneyReturn)
  }
  public acceptCash(money: number): number {
    let result = money
    if (money >= this.moneyCondition) {
      result = money - Math.floor(money / this.moneyCondition) * this.moneyReturn
    }
    return result
  }
}

class CashContext {
  private cs: CashSuper | undefined
  constructor(type: string) {
    switch (type) {
      case '正常收费':
        this.cs = new CashNormal()
        break
      case '满300返100':
        this.cs = new CashReturn('300', '100')
        break
      case '打8折':
        this.cs = new CashRebate('0.8')
        break
      default:
        new Error('必须先选好策略')
        break
    }
  }
  public getResult(money: number): number {
    return this.cs!.acceptCash(money)
  }
}

export { CashContext }
