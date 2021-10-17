import { ConcreteBuilderA, ConcreteBuilderB, Director } from '../src/builder'
describe('建造者模式', () => {
  test('default', () => {
    const director = new Director()
    const builderA = new ConcreteBuilderA()
    const builderB = new ConcreteBuilderB()

    director.init(builderA)
    const productA = builderA.getProduct()
    expect(productA).toEqual({ parts: ['部件A', '部件B'] })
    director.init(builderB)
    const productB = builderB.getProduct()
    expect(productB).toEqual({ parts: ['部件X', '部件Y'] })
  })
})
