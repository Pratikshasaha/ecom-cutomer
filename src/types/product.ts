export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  details: string;
  imagePath: string;
  vendorLocation: string;
  category: string;
  vendorName: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  description: string;
  title: string;
}

export type ApiResponse = Product[]; // Direct array per feedback

