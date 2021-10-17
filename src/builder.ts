class Product {
  private parts: string[] = []
  public add(part: string) {
    this.parts.push(part)
  }
  public show() {
    this.parts.forEach((part) => {
      console.log(part)
    })
  }

  public getPartsForTest() {
    return this.parts
  }
}

abstract class Builder {
  public abstract builderPartA(): void
  public abstract builderPartB(): void
  public abstract getProduct(): Product
}

class ConcreteBuilderA extends Builder {
  private product: Product = new Product()
  public override builderPartA() {
    this.product.add('部件A')
  }
  public override builderPartB() {
    this.product.add('部件B')
  }
  public override getProduct() {
    return this.product
  }
}

class ConcreteBuilderB extends Builder {
  private product: Product = new Product()
  public override builderPartA() {
    this.product.add('部件X')
  }
  public override builderPartB() {
    this.product.add('部件Y')
  }
  public override getProduct() {
    return this.product
  }
}

class Director {
  init(builder: Builder) {
    builder.builderPartA()
    builder.builderPartB()
  }
}

export { ConcreteBuilderA, ConcreteBuilderB, Director }
