export interface Product {
    id: number;
    name: string;
    price:  number;
    originalPrice:  number;
    discount :  string | null;
    rating:  number;
    totalReviews: number,
    imageUrl:  string;
    isInStock: boolean;
}

export interface ProductCarouselProps {
    products: Product[]; 
}

export interface HeadingWithBadgeProps {
    subHeading: string;
    mainHeading: string;
    countdownTarget?: string;
  }

export interface ArrowProps {
    onClick?: () => void;
  }
  

export interface ApiResponse {
  statusCode: number;
	message: string;
	data: unknown;
}