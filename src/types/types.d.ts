export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  views: number;
  discount: number;
  category: string;
  material: string;
  sizes: string[];
  colours: string[];
  rating: number;
}

export interface ProductFilters {
  category: string[];
  materials: string[];
  sizes: string[];
  colours: string[];
  discount: number[];
}
