abstract class Operation {
  private _numberA = 0
  private _numberB = 0
  public setNumberA(val: number) {
    this._numberA = val
  }
  public setNumberB(val: number) {
    this._numberB = val
  }
  public getNumberA() {
    return this._numberA
  }
  public getNumberB() {
    return this._numberB
  }
  public abstract getResult(): number
}
class OperationAdd extends Operation {
  public override getResult(): number {
    let result = 0
    result = this.getNumberA() + this.getNumberB()
    return result
  }
}

class OperationSub extends Operation {
  public override getResult(): number {
    let result = 0
    result = this.getNumberA() - this.getNumberB()
    return result
  }
}

class OperationMul extends Operation {
  public override getResult(): number {
    let result = 0
    result = this.getNumberA() * this.getNumberB()
    return result
  }
}

class OperationDiv extends Operation {
  public override getResult(): number {
    let result = 0
    if (this.getNumberB() === 0) throw new Error('除数不能为0')
    result = this.getNumberA() / this.getNumberB()
    return result
  }
}

interface IFactory {
  createOperation(): Operation
}

class AddFactory implements IFactory {
  createOperation(): Operation {
    return new OperationAdd()
  }
}

class SubFactory implements IFactory {
  createOperation(): Operation {
    return new OperationSub()
  }
}

class MulFactory implements IFactory {
  createOperation(): Operation {
    return new OperationMul()
  }
}

class DivFactory implements IFactory {
  createOperation(): Operation {
    return new OperationDiv()
  }
}

export { AddFactory, SubFactory, MulFactory, DivFactory, Operation }
