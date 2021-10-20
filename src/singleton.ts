class Singleton {
  private static instance: Singleton | null = null
  private constructor() {}
  public static getInstance(): Singleton {
    if (this.instance === null) {
      this.instance = new Singleton()
    }
    return this.instance
  }
}

export { Singleton }
