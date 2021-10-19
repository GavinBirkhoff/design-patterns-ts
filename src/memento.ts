class Memento {
  private state: string
  constructor(state: string) {
    this.state = state
  }

  public getState() {
    return this.state
  }
}

class Originator {
  private state?: string

  public setState(state: string) {
    this.state = state
  }
  public getState() {
    return this.state
  }

  public createMemento() {
    return new Memento(this.state as string)
  }

  public setMemento(memento: Memento) {
    this.state = memento.getState()
  }

  public show() {
    console.log(`State:${this.getState()}`)
  }
}

class Caretaker {
  private memento?: Memento
  setMemento(memento: Memento) {
    this.memento = memento
  }
  getMemento() {
    return this, this.memento
  }
}

// const o = new Originator()
// o.setState('On')
// o.show()

// const c = new Caretaker()
// c.setMemento(o.createMemento())

// o.setState('Off')
// o.show()

// o.setMemento(c.getMemento() as Memento)
// o.show()

export { Originator, Caretaker, Memento }
