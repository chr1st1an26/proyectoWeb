import { Component } from '@angular/core';

interface Producto {
  titulo: string;
  imagen: string;
  precio: string;
  contenido: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  styles: [`
  .product-container {
    position: absolute;
    top: 60%; /* Ajustar la distancia desde la parte superior */
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20%;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 110%; /* Ajustar el ancho */
    height: 98%; /* Ajustar la altura */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centrar verticalmente */
    align-items: center; /* Centrar horizontalmente */
  }
  
  
  

    .product-container img.product-img {
      width: 100%;
      max-width: 100px;
      height: auto;
    }
  `]
})
export class ProductosComponent {
  productos: Producto[] = [
    {
      titulo: "Manual Redes V1",
      imagen: "../../../assets/img/Productos/Manual 1.jpg",
      precio: "$15.000",
      contenido: "Manual de redes para principiantes, conviértete en un experto."
    },
    {
      titulo: "Manual Redes V2",
      imagen: "../../../assets/img/Productos/Manual 2.jpg",
      precio: "$25.000",
      contenido: "Descripción del producto para el manual V2"
    },
    {
      titulo: "Manual Redes V3",
      imagen: "../../../assets/img/Productos/Manual 3.png",
      precio: "$35.000",
      contenido: "Descripción del producto para el manual V3"
    },
    {
      titulo: "Curso Angular principiante",
      imagen: "../../../assets/img/Productos/an.png",
      precio: "$18.000",
      contenido: "Descripción del producto para el curso Angular principiante"
    },
    {
      titulo: "Curso front-end Básico",
      imagen: "../../../assets/img/Productos/front.png",
      precio: "$32.000",
      contenido: "Descripción del producto para el curso front-end básico"
    },
    {
      titulo: "Curso Experiencia de Usuario",
      imagen: "../../../assets/img/Productos/experiencia.png",
      precio: "$54.000",
      contenido: "Descripción del producto para el curso Experiencia de Usuario"
    },
    {
      titulo: "Curso React js Principiante",
      imagen: "../../../assets/img/Productos/js.png",
      precio: "$18.000",
      contenido: "Descripción del producto para el curso React js Principiante"
    },
    {
      titulo: "Calcas de nuestra empresa",
      imagen: "../../../assets/img/logoN.png",
      precio: "$32.000",
      contenido: "Descripción del producto para las calcas de nuestra empresa"
    }
  ];

  contenidoVisible: number | null = null;

  mostrarContenido(index: number): void {
    // Si se ha clicado otro botón, se muestra solo el contenido del botón clicado
    if (this.contenidoVisible !== index) {
      this.contenidoVisible = index;
    } else {
      // Si se ha clicado el mismo botón, se oculta todo el contenido
      this.contenidoVisible = null;
    }
  }
}
