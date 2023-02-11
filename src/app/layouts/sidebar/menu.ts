import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true,
        role: ['Admin','Vendedor'],
        subItems: []
    },
    {
        id: 2,
        label: 'MENUITEMS.HOME.TEXT',
        icon: 'uil-home-alt',
        link: '/home',
        role: ['Admin','Vendedor'],
        subItems: []
    },
    {
        id: 3,
        label: 'MENUITEMS.CLIENT.TEXT',
        icon: 'uil-users-alt',
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.CLIENT.LIST.ADDCLIENT',
                link: '/customer/addcustomer',
                parentId: 3,
                role: ['Admin']
            }, 
            {
                id: 5,
                label: 'MENUITEMS.CLIENT.LIST.LISTCLIENTS',
                link: '/customer/listcustomers',
                parentId: 3,
                role: ['Admin']
            }, 
        ],
        role: ['Admin']
    },
    {
        id: 6,
        label: 'MENUITEMS.USER.TEXT',
        icon: 'uil-user-circle',
        subItems: [
            {
                id: 7,
                label: 'MENUITEMS.USER.LIST.ADDUSER',
                link: '/user/adduser',
                parentId: 6,
                role: ['Admin']
            }, 
            {
                id: 8,
                label: 'MENUITEMS.USER.LIST.LISTUSERS',
                link: '/user/listusers',
                parentId: 6,
                role: ['Admin']
            }, 
        ],
        link: '/users',
        role: ['Admin']
    },
    {
        id: 9,
        label: 'MENUITEMS.PRODUCTS.TEXT',
        icon: 'uil-box',
        role: ['Admin','Vendedor'],
        subItems: [
            {
                id: 10,
                label: 'MENUITEMS.PRODUCTS.LIST.MONTURAS',
                link: '/products/monturas',
                parentId: 9,
                role: ['Admin','Vendedor']
            },
            {
                id: 11,
                label: 'MENUITEMS.PRODUCTS.LIST.LENTES',
                link: '/products/lunas',
                parentId: 9,
                role: ['Admin','Vendedor']
            }, 
            {
                id: 12,
                label: 'MENUITEMS.PRODUCTS.LIST.ACCESORIOS',
                link: '/products/accesorios',
                parentId: 9,
                role: ['Admin','Vendedor']
            }, 
            {
                id: 13,
                label: 'MENUITEMS.PRODUCTS.LIST.ADDPRODUCTS',
                link: '/products/addproducts',
                parentId: 9,
                role: ['Admin']
            },
            {
                id: 14,
                label: 'MENUITEMS.PRODUCTS.LIST.UPDATEEXCEL',
                link: '/products/updateexcel',
                parentId: 9,
                role: ['Admin']
            },
            {
                id: 15,
                label: 'MENUITEMS.PRODUCTS.LIST.INVENTARIO',
                link: '/products/inventario',
                parentId: 9,
                role: ['Admin']
            },
        ],
        link: '/products',
    },
    {
        id: 16,
        label: 'MENUITEMS.STORES.TEXT',
        icon: 'uil-shop',
        role: ['Admin','Vendedor'],
        subItems: [
            {
                id: 17,
                label: 'MENUITEMS.STORES.LIST.STORES',
                link: '/store/liststores',
                parentId: 16,
                role: ['Admin', 'Vendedor']
            }, 
            {
                id: 18,
                label: 'MENUITEMS.STORES.LIST.ADDSTORES',
                link: '/store/addstore',
                parentId: 16,
                role: ['Admin', 'Vendedor']
            },
        ],
        link: '/store',
    },
    {
        id: 19,
        label: 'MENUITEMS.SALES.TEXT',
        icon: 'uil-invoice',
        subItems: [
            {
                id: 20,
                label: 'MENUITEMS.SALES.LIST.SALES',
                link: '/sale/listsales',
                parentId: 19,
                role: ['Admin']
            }, 
            {
                id: 21,
                label: 'MENUITEMS.SALES.LIST.ADDSALES',
                link: '/sale/addsale',
                parentId: 19,
                role: ['Admin']
            },
        ],
        link: '/sale',
        role: ['Admin','Vendedor']
    },
    {
        id: 22,
        label: 'MENUITEMS.CASHREGISTER.TEXT',
        icon: 'uil-invoice',
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CASHREGISTER.LIST.CASHREGISTER',
                link: '/cash/cashregister',
                parentId: 22,
                role: ['Admin','Vendedor']
            }, 
            {
                id: 24,
                label: 'MENUITEMS.CASHREGISTER.LIST.LISTCASH',
                link: '/cash/listcash',
                parentId: 22,
                role: ['Admin']
            },
        ],
        link: '/cash',
        role: ['Admin','Vendedor']
    },
];

