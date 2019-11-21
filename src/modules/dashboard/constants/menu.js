const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'Inicio',
    to: '/dashboard',
  },
  {
    id: 'sales',
    icon: 'iconsminds-dollar',
    label: 'Ventas',
    to: '/dashboard/sales',
  },
  {
    id: 'shopping',
    icon: 'iconsminds-basket-coins',
    label: 'Compras',
    to: '/dashboard/shopping',
  },
  {
    id: 'inventories',
    icon: 'iconsminds-box-close',
    label: 'Inventarios',
    to: '/dashboard/products',
    subs: [
      {
        icon: 'iconsminds-tag-3',
        label: 'Productos',
        to: '/dashboard/products',
      },
      {
        icon: 'iconsminds-folders',
        label: 'Categorias',
        to: '/dashboard/categories',
      },
      {
        icon: 'iconsminds-notepad',
        label: 'Existencias',
        to: '/dashboard/stock',
      }
    ],
  },
  {
    id: 'reports',
    icon: 'iconsminds-address-book-2',
    label: 'Reportes',
    to: '/dashboard/reports',
  },
  {
    id: 'users',
    icon: 'iconsminds-user',
    label: 'Usuarios',
    to: '/dashboard/users',
    subs: [
      {
        icon: 'iconsminds-id-card',
        label: 'Cuentas',
        to: '/dashboard/users',
      },
      {
        icon: 'iconsminds-mens',
        label: 'Permisos',
        to: '/dashboard/permissions',
      }
    ],
  },
  {
    id: 'options',
    icon: 'iconsminds-gear',
    label: 'Opciones',
    to: '/dashboard/pin',
    subs: [
      {
        id: 'pin',
        icon: 'iconsminds-type-pass',
        label: 'PIN',
        to: '/dashboard/pin',
      },
      {
        id: 'company',
        icon: 'iconsminds-office',
        label: 'Empresa / Comercio',
        to: '/dashboard/company',
      },
      {
        id: 'printers',
        icon: 'iconsminds-printer',
        label: 'Impresoras',
        to: '/dashboard/printers',
      }
    ],
  }
];
export default data;
