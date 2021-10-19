abstract class Component {
  protected name: string
  constructor(name: string) {
    this.name = name
  }

  public abstract add(c: Component): void
  public abstract remove(c: Component): void
  public abstract display(depth: number): void
}

class Leaf extends Component {
  constructor(name: string) {
    super(name)
  }
  public add(c: Component) {
    console.log(`Cannot add to a leaf`)
  }
  public remove(c: Component) {
    console.log(`Cannot remove from a leaf`)
  }
  public display(depth: number) {
    console.log(`${'-'.repeat(depth)} ${this.name}`)
  }
}

class Composite extends Component {
  private children = new Set<Component>()
  constructor(name: string) {
    super(name)
  }
  public add(c: Component) {
    this.children.add(c)
  }
  public remove(c: Component) {
    this.children.delete(c)
  }
  public display(depth: number) {
    console.log(`${'-'.repeat(depth)} ${this.name}`)
    this.children.forEach((c) => {
      c.display(depth + 2)
    })
  }
}

const root = new Composite('root')
root.add(new Leaf('Leaf A'))
root.add(new Leaf('Leaf B'))

const comp = new Composite('Composite X')
comp.add(new Leaf('Leaf XA'))
comp.add(new Leaf('Leaf XB'))

root.add(comp)

const comp2 = new Composite('Composite XY')
comp.add(new Leaf('Leaf XYA'))
comp.add(new Leaf('Leaf XYB'))
comp.add(comp2)

root.add(new Leaf('Leaf C'))
const leaf = new Leaf('Leaf D')
root.add(leaf)
root.remove(leaf)

root.display(1)
