abstract class Observer {
  public abstract update(): void
}

abstract class Subject {
  private observers = new Set<Observer>()
  // 添加观察者
  public attach(observer: Observer) {
    this.observers.add(observer)
  }
  // 移除观察者
  public detach(observer: Observer) {
    this.observers.delete(observer)
  }
  // 通知
  public notify() {
    for (const o of this.observers) {
      o.update()
    }
  }
}

class ConcreteSubject extends Subject {
  private subjectState?: string
  public setSubjectState(state: string) {
    this.subjectState = state
  }
  public getSubjectState() {
    return this.subjectState
  }
}

class ConcreteObserver extends Observer {
  private name: string
  private observerState?: string
  private concreteSubject: ConcreteSubject
  constructor(subject: ConcreteSubject, name: string) {
    super()
    this.concreteSubject = subject
    this.name = name
  }
  public override update() {
    this.observerState = this.concreteSubject.getSubjectState()
    console.log(`观察者${this.name}的新状态的是${this.observerState}`)
  }
}

export { ConcreteSubject, ConcreteObserver }
