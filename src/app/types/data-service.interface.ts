export default interface DataService<T extends {id: number}> {
  get(id: number): Promise<T>;
  query(): Promise<T[]>;
  delete(id: number): Promise<void>
}