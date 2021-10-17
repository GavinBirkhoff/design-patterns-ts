abstract class AbstractClass {
  public abstract primitiveOperation1(): void
  public abstract primitiveOperation2(): void
  public templateMethod() {
    this.primitiveOperation1()
    this.primitiveOperation2()
  }
}

class ConcreteClassA extends AbstractClass {
  public primitiveOperation1() {
    console.log('具体A类方法1实现')
  }
  public primitiveOperation2() {
    console.log('具体A类方法2实现')
  }
}

class ConcreteClassB extends AbstractClass {
  public primitiveOperation1() {
    console.log('具体B类方法1实现')
  }
  public primitiveOperation2() {
    console.log('具体B类方法2实现')
  }
}

export { ConcreteClassA, ConcreteClassB }
