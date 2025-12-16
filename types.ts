export interface Product {
    id: number;
    name: string;
    sku: string;
    slug: string;
    category: 'Lighting' | 'Utility' | 'Office Utility' | 'Home Decor';
    price: number;
    salePrice?: number;
    discount?: number;
    images: string[];
    colorImages?: { [key: string]: string[] };
    availableColors: string[];
    availableSize?: 'Small' | 'Large' | 'LARGE' | 'Standard Size' | null;
    materials: string[];
    sellingPoint: string;
    description: string;
    specifications: {
        height: string;
        width: string;
    };
    stock: 'In Stock' | 'Out of Stock' | 'Pre-Order';
    tags: ('Hot' | 'New' | 'Sale')[];
    rating: number;
    reviewCount: number;
}

export interface CartItem extends Product {
    quantity: number;
    selectedColor?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    text: string;
    role: string;
}

export interface BlogPost {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    date: string;
    content: string;
    author: string;
    readTime: string;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: 'Processing' | 'Shipped' | 'Delivered';
}