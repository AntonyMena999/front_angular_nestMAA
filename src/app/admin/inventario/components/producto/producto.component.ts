import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
  ];
  cols: any[]=[];


  openNew(){

  }
  editProduct(prod:any){

  }

  deleteProduct(prod:any){

  }


}
