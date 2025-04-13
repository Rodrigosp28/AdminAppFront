import { NgClass, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  imports: [NgIf, NgClass, NgFor, NavbarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  activeMenu: string | null = null;
  encabezadoShow = signal<boolean>(true);
  toencabezado:any;
  menuItems = [
    {
      title: 'Dashboard',
      icon: 'fas fa-home',
      active: false,
      submenu: []
    },
    {
      title: 'Productos',
      icon: 'fas fa-box',
      active: false,
      submenu: [
        { title: 'Lista de Productos' },
        { title: 'Categorías' },
        { title: 'Inventario' }
      ]
    },
    {
      title: 'Ventas',
      icon: 'fas fa-shopping-cart',
      active: false,
      submenu: [
        { title: 'Nueva Venta' },
        { title: 'Historial' },
        { title: 'Reportes' }
      ]
    },
    {
      title: 'Clientes',
      icon: 'fas fa-users',
      active: false,
      submenu: [
        { title: 'Lista de Clientes' },
        { title: 'Segmentos' }
      ]
    },
    {
      title: 'Configuración',
      icon: 'fas fa-cog',
      active: false,
      submenu: [
        { title: 'Usuarios' },
        { title: 'Permisos' },
        { title: 'Ajustes' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;

    const collap = this.isCollapsed;
    this.toencabezado=null;
    this.toencabezado = setTimeout(() => {
      console.log(this.encabezadoShow())
      this.encabezadoShow.set(!this.isCollapsed);
      console.log(this.encabezadoShow())
    }, 100);
  }

  toggleMenu(menuTitle: string): void {
    if (this.activeMenu === menuTitle) {
      this.activeMenu = null;
    } else {
      this.activeMenu = menuTitle;
    }
  }

}
