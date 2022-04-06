export interface IContinent {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  slug: string;
  content: IContinentContent;
}

export interface IContinentContent {
    imageUrl: string;
    description: string;
    countries: number;
    languages: number;
    cities: ICity[];
}

export interface ICity {
  id: number;
  name: string;
  capital: string;
  image: string;
  flagImage: string;
}