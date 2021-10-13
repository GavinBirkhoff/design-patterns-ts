abstract class Subject {
  public abstract request(): void
}

class RealSubject extends Subject {
  public request() {
    console.log('真实的请求')
  }
}

class Proxy1 extends Subject {
  realSubject: Subject | null = null
  public request() {
    if (this.realSubject === null) {
      this.realSubject = new RealSubject()
    }
    this.realSubject.request()
  }
}

export { Proxy1 }
