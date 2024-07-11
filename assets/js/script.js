const propiedadesVenta = [
    {
nombre: 'Casa en venta Vitacura',
src: 'assets/img/propiedad-venta1.jpg',
descripcion: 'Espectacular casa en hormigón armado del afamado arquitecto Christian de Groote con espectacular vista a la cordillera.',
ubicacion: 'Vitacura, RM',
superficie: '1.300 m2',
habitaciones: 5,
costo: '4,973,000',
smoke: true,
pets: true
},

{
nombre: 'Casa de alto standing Viña del Mar',
src: 'assets/img/propiedad-venta2.jpg',
descripcion: 'Espectacular casa de estilo mediterráneo de 1.187 metros cuadrados emplazada en un terreno único de 2.720 metros cuadrados.',
ubicacion: 'Viña del Mar, RV',
superficie: '1.187 m2',
habitaciones: 7,
costo: '2,866,200',
smoke: true,
pets: true
},

{
nombre: 'Casa en venta Las Condes',
src: 'assets/img/propiedad-venta3.jpg',
descripcion: 'Extraordinaria casa contemporánea en el exclusivo barrio San Damián en Las Condes, del destacado arquitecto Christian de Groote.',
ubicacion: 'Las Condes, RM',
superficie: '1.425 m2',
habitaciones: 6,
costo: '3,889,500',
smoke: true,
pets: true
},

{
nombre: 'Exclusiva Villa/Chalet en Lo Barnechea',
src: 'assets/img/propiedad-venta4.jpg',
descripcion: 'Casa italiana del arquitecto Jaime Burgos, ubicada en sector Los Nogales, con finas terminaciones y grandes espacios.',
ubicacion: 'Lo Barnechea, RM',
superficie: '675 m2',
habitaciones: 6,
costo: '1,957,100',
smoke: true,
pets: false
},

{
nombre: 'Casa de alto standing en venta Las Condes',
src: 'assets/img/propiedad-venta5.jpg',
descripcion: 'Casa de estilo Inglés, con materiales nobles como madera pino Oregón, ladrillos y piedra laja. Con gran jardín formado y grandes árboles.',
ubicacion: 'Las Condes, RM',
superficie: '590 m2',
habitaciones: 5,
costo: '1,871,600',
smoke: true,
pets: true
},

{
nombre: 'Mansión en venta Vitacura, Chile',
src: 'assets/img/propiedad-venta6.jpg',
descripcion: 'Casa del destacado arquitecto Jorge Figueroa, con privilegiada vista a las canchas y a la ciudad, emplazada a los pies del cerro Manquehue.',
ubicacion: 'Vitacura, RM',
superficie: '1.064 m2',
habitaciones: 5,
costo: '2,957,100',
smoke: true,
pets: true
}
];

const propiedadesAlquiler = [
    {
nombre: 'Piso exclusivo en alquiler en Vitacura',
src: 'assets/img/propiedad-alquiler1.jpg',
descripcion: 'Edificio de finas terminacion Departamento duplex, penthouse de un edificio de 11 pisos. Es un departamento que está diseñado por profesionales.',
ubicacion: 'Vitacura, RM',
superficie: '555 m2',
habitaciones: 6,
costo: '2,417,000',
smoke: false,
pets: true
},

{
nombre: 'Casa en alquiler en Las Condes',
src: 'assets/img/propiedad-alquiler2.jpg',
descripcion: 'Diseñada por el arquitecto Carlos Alberto Cruz, esta propiedad de Estilo Europeo en Lo Curro disfruta de una imponente vista panorámica de la ciudad y la cordillera.',
ubicacion: 'Las Condes, RM',
superficie: '1.605 m2',
habitaciones: 4,
costo: '2,235,000',
smoke: false,
pets: false
},

{
nombre: 'Exclusiva casa en alquiler en Vitacura',
src: 'assets/img/propiedad-alquiler3.jpg',
descripcion: 'Casa en gran terreno, parque con vista y senderos de piedra, de construcción solida de 2 pisos, además de un subterráneo con luz natural.',
ubicacion: 'Vitacura, RM',
superficie: '750 m2',
habitaciones: 6,
costo: '3,379,990',
smoke: true,
pets: true
},

{
nombre: 'Casa en Barrio Jardín del Este Vitacura',
src: 'assets/img/propiedad-alquiler4.jpg',
descripcion: 'Icónica casa ubicada en pleno barrio Jardín del Este en Vitacura, de arquitectura moderna de los años ’70, obra del reconocido arquitecto chileno-francés Mauricio Despuy.',
ubicacion: 'Vitacura, RM',
superficie: '405 m2',
habitaciones: 5,
costo: '1,679,700',
smoke: false,
pets: true
},

{
nombre: 'Casa de alto standing en alquiler Las Condes',
src: 'assets/img/propiedad-alquiler5.jpg',
descripcion: 'Increíble casa tradicional, con Hall de entrada con acceso a amplio living y comedor separados, salida a terraza y a gran jardín con piscina.',
ubicacion: 'Las Condes, RM',
superficie: '435 m2',
habitaciones: 4,
costo: '2,250,100',
smoke: true,
pets: false
},

{
nombre: 'Exclusiva casa en alquiler Las Condes',
src: 'assets/img/propiedad-alquiler6.jpg',
descripcion: 'Linda casa estilo Inglesa ubicada en un pasaje cerrado de 3 casas, excelente conectividad e inigualable ubicación. Destaca por sus amplios espacios.',
ubicacion: 'Las Condes, RM',
superficie: '420 m2',
habitaciones: 6,
costo: '1,363,660',
smoke: false,
pets: false
}
];

function fichaPropiedades(propiedades, numPropiedades, contenedorClase) {
    const divFicha = document.querySelector(contenedorClase);
    
    let template = '';
    for (const propiedad of propiedades.slice(0, numPropiedades)) {
        let smokeColor = propiedad.smoke ? 'green' : 'red';
        let petsColor = propiedad.pets ? 'green' : 'red';

        template += `
        <div class="propiedad-template">
            <img src="${propiedad.src}" class="img-template">
            <div class="propiedad-contenido">
                <p class="propiedad-ubicacion">${propiedad.ubicacion}</p>
                <h4>${propiedad.nombre}</h4>
                <p class="propiedad-sup-hab">
                <span><i class="fa-solid fa-house"></i> ${propiedad.superficie}</span>
                <span><i class="fa-solid fa-bed"></i> ${propiedad.habitaciones} Habitaciones</span>
                </p>
                <p class="propiedad-descripcion">${propiedad.descripcion}</p>
                <hr>
                <span class="propiedad-pets-smoke">
                    <span style="color: ${smokeColor}"><i class="fa-solid fa-smoking"></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</span>
                    <span style="color: ${petsColor}"><i class="fa-solid fa-paw"></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</span>
                </span>
            </div>
        </div>
        `;
    }
    
    divFicha.innerHTML = template;
};

document.addEventListener('DOMContentLoaded', async () => {
    const path = window.location.pathname;

    const obtenerPropiedadesVenta = async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(propiedadesVenta), 1000);
        });
    };

    const obtenerPropiedadesAlquiler = async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(propiedadesAlquiler), 1000);
        });
    };

    if (path.includes('index.html')) {
        const propiedadesVenta = await obtenerPropiedadesVenta();
        const propiedadesAlquiler = await obtenerPropiedadesAlquiler();
        fichaPropiedades(propiedadesVenta, 3, ".ficha-venta");
        fichaPropiedades(propiedadesAlquiler, 3, ".ficha-alquiler");
    } else if (path.includes('propiedades_venta.html')) {
        const propiedadesVenta = await obtenerPropiedadesVenta();
        fichaPropiedades(propiedadesVenta, 6, ".ficha-venta");
    } else if (path.includes('propiedades_alquiler.html')) {
        const propiedadesAlquiler = await obtenerPropiedadesAlquiler();
        fichaPropiedades(propiedadesAlquiler, 6, ".ficha-alquiler");
    }
});