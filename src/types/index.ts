export interface ProductProp {
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
    products: ProductProp[]; 
}

export interface HeadingWithBadgeProps {
    subHeading: string;
    mainHeading: string;
    countdownTarget?: string;
  }

export interface ArrowProps {
    onClick?: () => void;
  }
  