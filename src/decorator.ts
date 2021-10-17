const { log } = console

abstract class Component {
  public abstract operation(): void
}

class ConcreteComponent extends Component {
  public operation() {
    console.log('具体对象的操作')
  }
}

abstract class Decorator extends Component {
  protected component: Component | null = null
  public setComponet(component: Component) {
    this.component = component
  }
  public override operation() {
    if (this.component !== null) {
      this.component?.operation()
    }
  }
}

class ConcreteDecoratorA extends Decorator {
  // 本类独有区别其他类
  private addedState = ''
  public override operation() {
    super.operation()
    this.addedState = 'new state'
    console.log('具体装饰器A的操作')
  }
}

class ConcreteDecoratorB extends Decorator {
  public override operation() {
    super.operation()
    this.addedBehavior()
    console.log('具体装饰器B的操作')
  }

  /**
   * B类独有的方法
   */
  public addedBehavior() {}
}

const c = new ConcreteComponent()
const d1 = new ConcreteDecoratorA()
const d2 = new ConcreteDecoratorB()

d1.setComponet(c)
d2.setComponet(d1)
d2.operation()

// 以上是模型

// ConcreteComponent
class Person {
  private name?: string
  constructor(name?: string) {
    this.name = name
  }
  public show() {
    console.log(`装扮的${this.name}`)
  }
}

// Decorator
class Finery extends Person {
  protected component: Person | null = null
  public deractor(component: Person) {
    this.component = component
  }
  public override show() {
    this.component?.show()
  }
}

class TShirts extends Finery {
  public override show() {
    console.log('大T恤')
    super.show()
  }
}

class BigTrouser extends Finery {
  public override show() {
    console.log('大垮裤')
    super.show()
  }
}

export { Person, TShirts, BigTrouser }
