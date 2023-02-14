export class accesosModel {
    id: number;
    name: string;
    detail: string;
    images: string;
    icono: string[];
    link: string;
    role: string[];
}

export const accesosList: accesosModel[] = [
    {
        id: 1,
        name: 'Realizar una venta',
        detail: 'Hacer una venta al contado o al credito',
        images: 'assets/images/product/img-1.png',
        icono: ['uil-invoice', 'uno'],
        link: '/sale/addsale',
        role: ['Admin','Vendedor']
    },
    {
        id: 2,
        name: 'Lista de Monturas',
        detail: 'Registrar, eliminar o actualizar detalles de productos',
        images: 'assets/images/product/img-2.png',
        icono: ['uil-box', 'dos'],
        link: '/products/monturas',
        role: ['Admin','Vendedor']
    },
    {
        id: 3,
        name: 'Mis clientes',
        detail: 'Registrar, eliminar o actualizar detalles de clientes',
        images: 'assets/images/product/img-3.png',
        icono: ['uil-users-alt', 'tres'],
        link: '/customer/listcustomers',
        role: ['Admin','Vendedor']
    },
    {
        id: 4,
        name: 'Usuarios',
        detail: 'Registrar, eliminar o actualizar detalles de Usuarios',
        images: 'assets/images/product/img-6.png',
        icono: ['uil-user-circle', 'ocho'],
        link: '/user/listusers',
        role: ['Admin']
    },
    {
        id: 5,
        name: 'Caja',
        detail: 'Registrar una salida o entrada de efectivo',
        images: 'assets/images/product/img-5.png',
        icono: ['uil-money-bill-stack', 'cinco'],
        link: '/cash/cashregister',
        role: ['Admin','Vendedor']
    },
    {
        id: 6,
        name: 'Tiendas',
        detail: 'Registrar, eliminar detalles de Tiendas',
        images: 'assets/images/product/img-4.png',
        icono: ['uil-shop', 'cuatro'],
        link: '/store/liststores',
        role: ['Admin']
    },
/*     {
        id: 7,
        name: 'Escritorio',
        detail: 'Resumen de todos los movimientos de su tienda',
        images: 'assets/images/product/img-6.png',
        icono: ['uil-adobe', 'seis'],
        link: ''
    },
    {
        id: 8,
        name: 'Gráficas',
        detail: 'Compare ventas, vea los productos más vendidos y mucho más',
        images: 'assets/images/product/img-6.png',
        icono: ['uil-chart', 'siete'],
        link: ''
    }, */
];
