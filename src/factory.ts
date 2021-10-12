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
  public getResult(): number {
    let result = 0
    result = this.getNumberA() + this.getNumberB()
    return result
  }
}

class OperationSub extends Operation {
  public getResult(): number {
    let result = 0
    result = this.getNumberA() - this.getNumberB()
    return result
  }
}

class OperationMul extends Operation {
  public getResult(): number {
    let result = 0
    result = this.getNumberA() * this.getNumberB()
    return result
  }
}

class OperationDiv extends Operation {
  public getResult(): number {
    let result = 0
    if (this.getNumberB() === 0) throw new Error('除数不能为0')
    result = this.getNumberA() / this.getNumberB()
    return result
  }
}

class OperationFactory {
  public static createOperate(operate: string): Operation | null {
    let operation: Operation | null = null
    switch (operate) {
      case '+':
        operation = new OperationAdd()
        break
      case '-':
        operation = new OperationSub()
        break
      case '*':
        operation = new OperationMul()
        break
      case '/':
        operation = new OperationDiv()
        break
    }
    return operation
  }
}

export { Operation, OperationFactory }
