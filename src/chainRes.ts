abstract class Handler {
  protected successor?: Handler
  public setSuccessor(successor: Handler) {
    this.successor = successor
  }

  public abstract handleRequest(request: number): void
}

class ConcreteHandler1 extends Handler {
  public handleRequest(request: number) {
    if (request >= 0 && request < 10) {
      console.log(`${Reflect.getPrototypeOf(this)?.constructor.name} 处理请求 ${request}`)
    } else {
      this.successor?.handleRequest(request)
    }
  }
}

class ConcreteHandler2 extends Handler {
  public handleRequest(request: number) {
    if (request >= 10 && request < 20) {
      console.log(`${Reflect.getPrototypeOf(this)?.constructor.name} 处理请求 ${request}`)
    } else {
      this.successor?.handleRequest(request)
    }
  }
}

class ConcreteHandler3 extends Handler {
  public handleRequest(request: number) {
    if (request >= 20 && request < 30) {
      console.log(`${Reflect.getPrototypeOf(this)?.constructor.name} 处理请求 ${request}`)
    } else {
      this.successor?.handleRequest(request)
    }
  }
}

const c1 = new ConcreteHandler1()
const c2 = new ConcreteHandler2()
const c3 = new ConcreteHandler3()

c1.setSuccessor(c2)
c2.setSuccessor(c3)

const requests = [2, 5, 14, 22, 18, 3, 27, 20]

requests.forEach((request) => {
  c1.handleRequest(request)
})
