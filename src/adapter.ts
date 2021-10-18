class Target {
  public request() {
    console.log('普通请求')
  }
}

class Adaptee {
  public specificRequest() {
    console.log('特殊请求')
  }
}

class Adapter extends Target {
  adaptee: Adaptee = new Adaptee()
  public request() {
    this.adaptee.specificRequest()
  }
}

// const target = new Adapter()
// target.request()

export { Adapter }
