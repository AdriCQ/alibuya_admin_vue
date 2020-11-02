/**
 * 
 */
export default class Storage {
  private name!: string;
  private data!: unknown

  /**
   * constructor
   * @param name string: Define name on localStorage
   */
  constructor(name: string) {
    this.name = 'storage/' + name;
  }

  /**
   * Store data on localStorage
   * @param data any
   */
  public store(data: unknown): void {
    this.data = data;
    localStorage.setItem(this.name, JSON.stringify(this.data))
  }

  /**
   * Get data from localStorage
   * @returns any
   */
  public get() {
    const data = localStorage.getItem(this.name);
    return data ? JSON.parse(data) : null
  }

  /**
   * Clear all data
   */
  public clear() {
    this.data = {};
    this.store(this.data);
  }
}