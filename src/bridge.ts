abstract class Implementor {
  public abstract operator(): void
}

class ConcreteImplementorA extends Implementor {
  public operator() {
    console.log(`具体实现A的方法执行`)
  }
}

class ConcreteImplementorB extends Implementor {
  public operator() {
    console.log(`具体实现B的方法执行`)
  }
}

class Abstraction {
  protected implementor?: Implementor
  public setImplementor(implementor: Implementor) {
    this.implementor = implementor
  }
  public operator() {
    this.implementor?.operator()
  }
}

class RefinedAbstraction extends Abstraction {
  public override operator() {
    this.implementor?.operator()
  }
}

const ab = new RefinedAbstraction()
ab.setImplementor(new ConcreteImplementorA())
ab.operator()

ab.setImplementor(new ConcreteImplementorB())
ab.operator()
