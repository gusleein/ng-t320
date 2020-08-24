import IElement from "./element.interface";

export default interface ICategory {
  id: number;
  name: string;
  items: IElement[];
}