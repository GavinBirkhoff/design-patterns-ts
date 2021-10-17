class SubSystemOne {
  public methodOne() {
    console.log(`子系统方法一`)
  }
}
class SubSystemTwo {
  public methodTwo() {
    console.log(`子系统方法二`)
  }
}
class SubSystemThree {
  public methodThree() {
    console.log(`子系统方法三`)
  }
}
class SubSystemFour {
  public methodFour() {
    console.log(`子系统方法四`)
  }
}

class Facade {
  one: SubSystemOne = new SubSystemOne()
  two: SubSystemTwo = new SubSystemTwo()
  three: SubSystemThree = new SubSystemThree()
  four: SubSystemFour = new SubSystemFour()
  public methodA() {
    this.one.methodOne()
    this.three.methodThree()
    this.four.methodFour()
  }
  public methodB() {
    this.two.methodTwo()
    this.three.methodThree()
  }
}

export { Facade }
