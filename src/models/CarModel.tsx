export interface Car {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

export type Params = Record<string, string | undefined>;
