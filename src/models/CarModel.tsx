export interface Car {
  model_features: ModelFeature[];
  model_highlights: ModelHighlight[];
  id: number;
  name: string;
  segment?: string;
  year?: number;
  price: number;
  thumbnail?: string;
  photo?: string;
  description?: string;
}

export interface CarCardProps {
  car: Car;
}

export type Params = Record<string, string | undefined>;

export interface ModelFeature {
  name: string;
  description: string;
  image: string;
}

export interface ModelHighlight {
  title: string;
  content: string;
  image: string;
}
