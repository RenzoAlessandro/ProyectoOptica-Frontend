// tslint:disable-next-line: class-name
export class arrayModel {
    key: string;
    value: string;
}

// tslint:disable-next-line: class-name
export class productModel {
    id: number;
    brand?: string;
    category: string;
    name: string;
    ratings = 0;
    reviewCount = 0;
    status?: string;
    discount: number;
    oriRate: number;
    disRate: number;
    feature?: string[];
    specification?: arrayModel[];
    images: string[];
    colorVariant: arrayModel[];
}

// tslint:disable-next-line: class-name
export class filterObject {
    discountRates: number[];
    maxVal: number;
    minVal: number;
}

export const productList: productModel[] = [
    {
        id: 1,
        brand: 'Nike',
        category: 'Shoes',
        name: 'Nike N012 Shoes',
        ratings: 4.2,
        reviewCount: 234,
        status: 'Trending',
        discount: 0,
        oriRate: 280,
        disRate: 260,
        specification: [{
            key: 'color',
            value: 'Gray'
        }],
        images: ['assets/images/product/img-1.png', 'assets/images/product/img-2.png', 'assets/images/product/img-3.png','assets/images/product/img-6.png'],
        colorVariant: [{
            key: 'Black',
            value: 'dark'
        },{
            key: 'White',
            value: 'light'
        },{
            key: 'Blue',
            value: 'primary'
        }]
    },
    {
        id: 2,
        brand: 'Adidas',
        category: 'Shoes',
        name: 'Adidas Running Shoes',
        ratings: 3,
        reviewCount: 100,
        discount: 20,
        oriRate: 250,
        disRate: 240,
        specification: [{
            key: 'color',
            value: 'Black'
        }],
        images: ['assets/images/product/img-2.png'],
        colorVariant: [{
            key: 'red',
            value: 'danger'
        },{
            key: 'black',
            value: 'dark'
        },{
            key: 'white',
            value: 'light'
        }]
    },
    {
        id: 3,
        brand: 'Puma',
        category: 'Shoes',
        name: 'Puma P103 Shoes',
        ratings: 3.2,
        reviewCount: 50,
        discount: 0,
        oriRate: 260,
        disRate: 250,
        specification: [{
            key: 'color',
            value: 'Purple'
        }],
        images: ['assets/images/product/img-3.png'],
        colorVariant: [{
            key: 'Purple',
            value: 'purple'
        },{
            key: 'White',
            value: 'light'
        },{
            key: 'Black',
            value: 'dark'
        }]
    },
    {
        id: 4,
        brand: 'General',
        category: 'Shoes',
        name: 'Sports S120 Shoes',
        ratings: 2.5,
        reviewCount: 75,
        discount: 0,
        oriRate: 240,
        disRate: 230,
        specification: [{
            key: 'color',
            value: 'Cyan'
        }],
        images: ['assets/images/product/img-4.png'],
        colorVariant: [{
            key: 'Sky',
            value: 'info'
        },{
            key: 'Green',
            value: 'success'
        }]
    },
    {
        id: 5,
        brand: 'Adidas',
        category: 'Shoes',
        name: 'Adidas AB23 Shoes',
        ratings: 4.9,
        reviewCount: 504,
        discount: 0,
        oriRate: 240,
        disRate: 250,
        specification: [{
            key: 'color',
            value: 'Blue'
        }],
        images: ['assets/images/product/img-5.png'],
        colorVariant: [{
            key: 'Black',
            value: 'dark'
        },{
            key: 'White',
            value: 'light'
        },{
            key: 'Blue',
            value: 'primary'
        }]
    },
    {
        id: 6,
        brand: 'Nike',
        category: 'Shoes',
        name: 'Nike N012 Shoes',
        ratings: 2.8,
        reviewCount: 29,
        discount: 20,
        oriRate: 270,
        disRate: 260,
        specification: [{
            key: 'color',
            value: 'Gray'
        }],
        images: ['assets/images/product/img-6.png'],
        colorVariant: [{
            key: 'White',
            value: 'light'
        },{
            key: 'Black',
            value: 'dark'
        }]
    }
];
