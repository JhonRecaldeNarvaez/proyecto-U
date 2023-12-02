

const data = [
  {
    id: 1,
    img: "IMG/rosas.jpg.jpeg",
    Nombredeflor: "Rosa",
    precio: 32000,
    categoria: "Silver",
    cantidadUnidades: 50,
    descripcion: "La rosa es una flor clásica y elegante, símbolo de amor y pasión. Perfecta para expresar tus sentimientos en cualquier ocasión."
  },
  {
    id: 2,
    img: "IMG/LIRIO.jpg",
    Nombredeflor: "Lirio",
    precio: 25500,
    categoria: "Silver",
    cantidadUnidades: 30,
    descripcion: "El lirio es una flor majestuosa que simboliza la pureza y la renovación. Ideal para regalar en momentos de celebración y esperanza."
  },
  {
    id: 3,
    img: "IMG/TULIPAN.webp",
    Nombredeflor: "Tulipán",
    precio: 55000,
    categoria: "Gold",
    cantidadUnidades: 10,
    descripcion: "El tulipán es conocido por su belleza y variedad de colores. Representa la elegancia y la prosperidad, haciendo de él un regalo encantador."
  },
  {
    id: 4,
    img: "IMG/ORQUIDEA.jpg",
    Nombredeflor: "Orquídea",
    precio: 78000,
    categoria: "Platinum",
    cantidadUnidades: 20,
    descripcion: "La orquídea es una flor exótica y sofisticada que simboliza la belleza, la fuerza y la nobleza. Un regalo perfecto para ocasiones especiales."
  },
  {
    id: 5,
    img: "IMG/GIRASOL.JPG",
    Nombredeflor: "Girasol",
    precio: 42000,
    categoria: "Gold",
    cantidadUnidades: 15,
    descripcion: "El girasol es una flor vibrante que representa la alegría y la vitalidad. Ideal para regalar a personas optimistas y llenas de energía."
  },
  {
    id: 6,
    img: "IMG/MARGARITA.jpg",
    Nombredeflor: "Margarita",
    precio: 18000,
    categoria: "Silver",
    cantidadUnidades: 40,
    descripcion: "La margarita es una flor sencilla y encantadora que simboliza la inocencia y la pureza. Un regalo clásico y atemporal."
  },
  {
    id: 7,
    img: "IMG/AMAPOLA.jpeg",
    Nombredeflor: "Amapola",
    precio: 32000,
    categoria: "Silver",
    cantidadUnidades: 25,
    descripcion: "La amapola es una flor silvestre con un encanto único. Simboliza el sueño y la creatividad, perfecta para personas creativas y soñadoras."
  },
  {
    id: 8,
    img: "IMG/CLAVEL.jpg",
    Nombredeflor: "Clavel",
    precio: 29000,
    categoria: "Gold",
    cantidadUnidades: 18,
    descripcion: "El clavel es una flor elegante y con un aroma encantador. Representa el amor y la admiración, ideal para expresar sentimientos sinceros."
  },
  {
    id: 9,
    img: "IMG/AZUCENBA.jpg",
    Nombredeflor: "Azucena",
    precio: 60000,
    categoria: "Platinum",
    cantidadUnidades: 12,
    descripcion: "La azucena es una flor majestuosa que simboliza la pureza y la espiritualidad. Perfecta para ocasiones especiales y eventos significativos."
  },
  {
    id: 10,
    img: "IMG/LAVANDA.jpg",
    Nombredeflor: "Lavanda",
    precio: 48000,
    categoria: "Gold",
    cantidadUnidades: 22,
    descripcion: "La lavanda es una flor aromática que representa la tranquilidad y la armonía. Ideal para regalar a personas que buscan paz y serenidad."
  },
  {
    id: 11,
    img: "IMG/CALENDULA.jpg",
    Nombredeflor: "Caléndula",
    precio: 35000,
    categoria: "Silver",
    cantidadUnidades: 28,
    descripcion: "La caléndula es una flor brillante que simboliza la alegría y la buena fortuna. Un regalo perfecto para momentos positivos y festivos."
  },
  {
    id: 12,
    img: "IMG/DALIA.jpg",
    Nombredeflor: "Dalia",
    precio: 43000,
    categoria: "Gold",
    cantidadUnidades: 24,
    descripcion: "La dalia es una flor elegante y exuberante que simboliza la elegancia y la positividad. Perfecta para alegrar cualquier espacio."
  },
  {
    id: 13,
    img: "IMG/PEONIA.jpg",
    Nombredeflor: "Peonía",
    precio: 51000,
    categoria: "Platinum",
    cantidadUnidades: 8,
    descripcion: "La peonía es una flor exquisita que simboliza la prosperidad y la buena fortuna. Un regalo lujoso y significativo para ocasiones especiales."
  },
  {
    id: 14,
    img: "IMG/HORTENSIA.jpg",
    Nombredeflor: "Hortensia",
    precio: 67000,
    categoria: "Platinum",
    cantidadUnidades: 15,
    descripcion: "La hortensia es una flor elegante y romántica que simboliza el agradecimiento y la devoción. Perfecta para expresar sentimientos profundos."
  },
  {
    id: 15,
    img: "IMG/CRÓTALO.jpg",
    Nombredeflor: "Crótalo",
    precio: 32000,
    categoria: "Silver",
    cantidadUnidades: 36,
    descripcion: "El crótalo es una flor única y fascinante que simboliza la creatividad y la originalidad. Ideal para regalar a personas con gustos artísticos."
  },
  {
    id: 16,
    img: "IMG/ASTER.jpg",
    Nombredeflor: "Aster",
    precio: 40000,
    categoria: "Gold",
    cantidadUnidades: 14,
    descripcion: "El aster es una flor vibrante que simboliza la paciencia y la elegancia. Ideal para regalar en momentos de perseverancia y superación."
  },
  {
    id: 17,
    img: "IMG/BEGOÑA.jpg",
    Nombredeflor: "Begonia",
    precio: 37000,
    categoria: "Silver",
    cantidadUnidades: 32,
    descripcion: "La begonia es una flor encantadora que simboliza la gratitud y la cordialidad. Perfecta para expresar aprecio y afecto hacia los demás."
  },
  {
    id: 18,
    img: "IMG/CAMELIA.jpg",
    Nombredeflor: "Camelia",
    precio: 59000,
    categoria: "Platinum",
    cantidadUnidades: 10,
    descripcion: "La camelia es una flor elegante y simbólica que representa la admiración y la perfección. Un regalo sofisticado para personas especiales."
  },
  {
    id: 19,
    img: "IMG/DIENTE.jpg",
    Nombredeflor: "Diente de león",
    precio: 34000,
    categoria: "Silver",
    cantidadUnidades: 28,
    descripcion: "El diente de león es una flor delicada que simboliza la esperanza y la renovación. Perfecta para regalar a personas que buscan nuevos comienzos."
  },
  {
    id: 20,
    img: "IMG/EUSTOMA.jpg",
    Nombredeflor: "Eustoma",
    precio: 45000,
    categoria: "Gold",
    cantidadUnidades: 20,
    descripcion: "La eustoma es una flor elegante y versátil que simboliza la gratitud y la apreciación. Ideal para expresar agradecimiento hacia los demás."
  },
  {
    id: 21,
    img: "IMG/FREESIA.jpg",
    Nombredeflor: "Freesia",
    precio: 48000,
    categoria: "Gold",
    cantidadUnidades: 18,
    descripcion: "La freesia es una flor fragante que simboliza la amistad y la lealtad. Perfecta para regalar a amigos cercanos y seres queridos."
  },
  {
    id: 22,
    img: "IMG/GERANIO.jpg",
    Nombredeflor: "Geranio",
    precio: 39000,
    categoria: "Silver",
    cantidadUnidades: 25,
    descripcion: "El geranio es una flor colorida que simboliza la amistad y la positividad. Ideal para regalar a personas que aportan alegría a tu vida."
  },
  {
    id: 23,
    img: "IMG/HIBISCO.jpg",
    Nombredeflor: "Hibisco",
    precio: 55000,
    categoria: "Gold",
    cantidadUnidades: 15,
    descripcion: "El hibisco es una flor tropical que simboliza la belleza y la feminidad. Perfecta para regalar en momentos de celebración y alegría."
  },
  {
    id: 24,
    img: "IMG/IRIS.jpg",
    Nombredeflor: "Iris",
    precio: 43000,
    categoria: "Silver",
    cantidadUnidades: 30,
    descripcion: "El iris es una flor elegante que simboliza la conexión espiritual y la confianza. Ideal para regalar a personas especiales en tu vida."
  },
  {
    id: 25,
    img: "IMG/JACINTO.jpg",
    Nombredeflor: "Jacinto",
    precio: 60000,
    categoria: "Platinum",
    cantidadUnidades: 12,
    descripcion: "El jacinto es una flor fragante que simboliza la devoción y la sinceridad. Perfecta para expresar sentimientos genuinos y profundos."
  },
  {
    id: 26,
    img: "IMG/LAVANTERA.jpg",
    Nombredeflor: "Lavatera",
    precio: 35000,
    categoria: "Silver",
    cantidadUnidades: 32,
    descripcion: "La lavatera es una flor encantadora que simboliza la dulzura y la calidez. Ideal para regalar a personas cariñosas y afectuosas."
  },
  {
    id: 27,
    img: "IMG/MALVA.jpg",
    Nombredeflor: "Malva",
    precio: 42000,
    categoria: "Gold",
    cantidadUnidades: 20,
    descripcion: "La malva es una flor delicada que simboliza la sinceridad y la modestia. Perfecta para regalar a personas sencillas y auténticas."
  },
  {
    id: 28,
    img: "IMG/NARCISO.webp",
    Nombredeflor: "Narciso",
    precio: 50000,
    categoria: "Platinum",
    cantidadUnidades: 14,
    descripcion: "El narciso es una flor que simboliza el renacimiento y la renovación. Ideal para regalar en momentos de cambio y transformación."
  },
  {
    id: 29,
    img: "IMG/OSTICAS.jpg",
    Nombredeflor: "Ostica",
    precio: 28000,
    categoria: "Silver",
    cantidadUnidades: 40,
    descripcion: "La ostica es una flor única y llamativa que simboliza la exuberancia y la vitalidad. Perfecta para agregar alegría a cualquier espacio."
  },
  {
    id: 30,
    img: "IMG/PETUNIAS.jpg",
    Nombredeflor: "Petunia",
    precio: 39000,
    categoria: "Gold",
    cantidadUnidades: 22,
    descripcion: "La petunia es una flor vibrante que simboliza la admiración y la expresión de sentimientos. Ideal para regalar a personas queridas."
  },
  {
    id: 31,
    img: "IMG/QUINTO.jpg",
    Nombredeflor: "Quinto",
    precio: 34000,
    categoria: "Silver",
    cantidadUnidades: 28,
    descripcion: "El quinto es una flor encantadora que simboliza la alegría y la diversión. Perfecta para regalar en momentos de celebración y felicidad."
  },
  {
    id: 32,
    img: "IMG/ROSELINA.jpg",
    Nombredeflor: "Roselina",
    precio: 59000,
    categoria: "Platinum",
    cantidadUnidades: 10,
    descripcion: "La roselina es una flor única y elegante que simboliza la belleza y la gracia. Un regalo sofisticado para personas especiales."
  },
  {
    id: 33,
    img: "IMG/SANTA PAZ.jpg",
    Nombredeflor: "Santapaz",
    precio: 47000,
    categoria: "Gold",
    cantidadUnidades: 18,
    descripcion: "La Santapaz es una flor que simboliza la armonía y la tranquilidad. Perfecta para regalar en momentos de paz y serenidad."
  },
  {
    id: 34,
    img: "IMG/TREVIR..jpg",
    Nombredeflor: "Trevir",
    precio: 38000,
    categoria: "Silver",
    cantidadUnidades: 25,
    descripcion: "El Trevir es una flor delicada que simboliza la resistencia y la perseverancia. Ideal para regalar en momentos de superación y fortaleza."
  },
  {
    id: 35,
    img: "IMG/Ursalia.jpeg",
    Nombredeflor: "Ursalia",
    precio: 62000,
    categoria: "Platinum",
    cantidadUnidades: 8,
    descripcion: "La Ursalia es una flor única y exquisita que simboliza la rareza y la singularidad. Un regalo especial para personas únicas en tu vida."
  },
  {
    id: 36,
    img: "IMG/VIOLETA.jpg",
    Nombredeflor: "Violeta",
    precio: 30000,
    categoria: "Silver",
    cantidadUnidades: 35,
    descripcion: "La Violeta es una flor delicada que simboliza la modestia y la humildad. Ideal para regalar a personas sencillas y auténticas."
  },
  {
    id: 37,
    img: "IMG/WISTERIA.jpg",
    Nombredeflor: "Wisteria",
    precio: 53000,
    categoria: "Gold",
    cantidadUnidades: 16,
    descripcion: "La Wisteria es una flor encantadora que simboliza la dulzura y la amabilidad. Perfecta para regalar en momentos de cariño y afecto."
  },
  {
    id: 38,
    img: "IMG/XAVIER.jpg",
    Nombredeflor: "Xavier",
    precio: 46000,
    categoria: "Silver",
    cantidadUnidades: 24,
    descripcion: "La Xavier es una flor elegante que simboliza la sofisticación y la distinción. Un regalo refinado para personas con gusto exquisito."
  },
  {
    id: 39,
    img: "IMG/JASMIN.jpg",
    Nombredeflor: "Jasmin",
    precio: 52000,
    categoria: "Gold",
    cantidadUnidades: 14,
    descripcion: "El Jasmin es una flor fragante que simboliza la gracia y la elegancia. Perfecta para regalar a personas con una presencia encantadora."
  },
  {
    id: 40,
    img: "IMG/ZINIA.jpg",
    Nombredeflor: "Zinia",
    precio: 40000,
    categoria: "Silver",
    cantidadUnidades: 30,
    descripcion: "La Zinia es una flor vibrante que simboliza la amistad y la lealtad. Ideal para regalar a amigos cercanos y seres queridos."
  },
  {
    id: 41,
    img: "IMG/Alhelí.jpg",
    Nombredeflor: "Alhelí",
    precio: 35000,
    categoria: "Gold",
    cantidadUnidades: 18,
    descripcion: "El Alhelí es una flor encantadora que simboliza la perseverancia y la superación. Perfecta para regalar en momentos de logros y éxitos."
  },
  {
    id: 42,
    img: "IMG/BAMBOO-.jpg",
    Nombredeflor: "Bambú",
    precio: 59000,
    categoria: "Platinum",
    cantidadUnidades: 12,
    descripcion: "El Bambú es una flor que simboliza la flexibilidad y la resistencia. Ideal para regalar en momentos de adaptabilidad y fortaleza."
  },
  {
    id: 43,
    img: "IMG/CAMPANILLA.jpg",
    Nombredeflor: "Campanilla",
    precio: 51000,
    categoria: "Gold",
    cantidadUnidades: 11,
    descripcion: "La Campanilla es una flor mágica que simboliza la fantasía y la alegría. Perfecta para regalar a personas que conservan la chispa de la niñez."
  },
  {
    id: 44,
    img: "IMG/Aconito.jpeg",
    Nombredeflor: "Aconito",
    precio: 42000,
    categoria: "Silver",
    cantidadUnidades: 25,
    descripcion: "El Aconito es una flor única y enigmática que simboliza la ambición y el misterio. Ideal para regalar a personas con personalidad intrigante."
  },
  {
    id: 45,
    img: "IMG/BEGOÑA.jpg",
    Nombredeflor: "bellopnas2",
    precio: 38000,
    categoria: "Platinum",
    cantidadUnidades: 20,
    descripcion: "La Bellopnas2 es una flor elegante que simboliza la belleza y la distinción. Un regalo refinado para personas con gusto exquisito."
  },
  {
    id: 46,
    img: "IMG/Gladiolo.jpeg",
    Nombredeflor: "Gladiolo",
    precio: 46000,
    categoria: "Silver",
    cantidadUnidades: 15,
    descripcion: "El Gladiolo es una flor majestuosa que simboliza la fuerza y la integridad. Ideal para regalar en momentos de admiración y respeto."
  },
  {
    id: 47,
    img: "IMG/FREESIA.jpg",
    Nombredeflor: "Fuchisa",
    precio: 49000,
    categoria: "Gold",
    cantidadUnidades: 18,
    descripcion: "La Fuchisa es una flor vibrante que simboliza la pasión y la vitalidad. Perfecta para regalar a personas apasionadas y enérgicas."
  },
  {
    id: 48,
    img: "IMG/celonia.jpeg",
    Nombredeflor: "Celonia",
    precio: 34000,
    categoria: "Silver",
    cantidadUnidades: 30,
    descripcion: "La Celonia es una flor encantadora que simboliza la alegría y la frescura. Ideal para regalar en momentos de positividad y optimismo."
  },
  {
    id: 49,
    img: "IMG/sepulia.jpeg",
    Nombredeflor: "Espuela de caballero",
    precio: 58000,
    categoria: "Gold",
    cantidadUnidades: 12,
    descripcion: "La Espuela de Caballero es una flor que simboliza la valentía y la audacia. Perfecta para regalar a personas valientes y decididas."
  },
  {
    id: 50,
    img: "IMG/sepulia2.jpeg",
    Nombredeflor: "sepulia2",
    precio: 41000,
    categoria: "Platinum",
    cantidadUnidades: 22,
    descripcion: "La Sepulia2 es una flor elegante que simboliza la exclusividad y la distinción. Un regalo refinado para personas con gustos sofisticados."
  }
];

let currentPage = 0;
let currentCategory = null;
let currentPriceRanges = [];
//Se llena las targetas con los datos de la bd
function llenarTarjetasConDatosDelArreglo() {
    const filteredData = data.filter((item) =>
        (!currentCategory || item.categoria === currentCategory) &&
        (!currentPriceRanges.length || currentPriceRanges.includes(getPriceRange(item.precio)))
    );

    const tarjetas = document.querySelectorAll(".targetas__car");
    tarjetas.forEach((tarjeta, index) => {
        const div = tarjeta.querySelector("div");
        const { categoria, precio, Nombredeflor, cantidadUnidades, img, descripcion } = filteredData[index + currentPage * tarjetas.length];
        tarjeta.querySelector(".targetas__img").src = img;
        div.children[0].textContent = "Categoria: " + categoria;
        div.children[1].textContent = "Precio: $" + precio;
        div.children[2].textContent = "Especie: " + Nombredeflor;
        div.children[3].textContent = "Cantidad: " + cantidadUnidades;
        div.children[4].textContent = "Disponible: " + (Math.random() > 0.5 ? "Sí" : "No");

        // Agrega descripción a la sección de detalles
        const detallesFlor = tarjeta.querySelector(".detalles-flor");
        detallesFlor.querySelector("#descripcionFlor").textContent = descripcion;
    });
}
//Actuliza la paginacion
function actualizarNumeroDePagina() {
    document.getElementById("pageNumber").textContent = currentPage + 1;
}
//Funciones de filtros de flores por precio y categoria
function filtrarPorPrecio(checkbox) {
    const priceRange = checkbox.value;

    if (checkbox.checked) {
        currentPriceRanges.push(priceRange);
    } else {
        const index = currentPriceRanges.indexOf(priceRange);
        if (index !== -1) {
            currentPriceRanges.splice(index, 1);
        }
    }

    currentPage = 0;
    llenarTarjetasConDatosDelArreglo();
    actualizarNumeroDePagina();
}
//Filtro valor
function getPriceRange(price) {
    if (price <= 30000) return "0-30000";
    if (price <= 50000) return "30000-50000";
    if (price <= 90000) return "50000-90000";
    return "90000-300000";
}
//Filtro por  categoria
function filtrarPorCategoria(categoria) {
    currentCategory = categoria;
    currentPage = 0;
    llenarTarjetasConDatosDelArreglo();
    actualizarNumeroDePagina();
}
//Leda un clenner a los filtros antes mencionado
function limpiarFiltros() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    currentCategory = null;
    currentPriceRanges = [];

    currentPage = 0;
    llenarTarjetasConDatosDelArreglo();
    actualizarNumeroDePagina();
}
//Funcion de boton de ir atras
function irAtras() {
    if (currentPage > 0) {
        currentPage--;
        llenarTarjetasConDatosDelArreglo();
        actualizarNumeroDePagina();
    }
}
//Funionde boton de ir siguiente
function irSiguiente() {
    const totalPages = Math.ceil(data.length / document.querySelectorAll(".targetas__car").length);
    if (currentPage < totalPages - 1) {
        currentPage++;
        llenarTarjetasConDatosDelArreglo();
        actualizarNumeroDePagina();
    }
}

document.getElementById("btnAtras").addEventListener("click", irAtras);
document.getElementById("btnSiguiente").addEventListener("click", irSiguiente);

//funcion ver mas 

window.onload = function () {
    llenarTarjetasConDatosDelArreglo();
    actualizarNumeroDePagina();
    const tarjetas = document.querySelectorAll(".targetas__car");
    tarjetas.forEach((tarjeta) => {
        const verMasBtn = document.createElement("button");
        verMasBtn.textContent = "Ver más";
        verMasBtn.addEventListener("click", function () {
            const detallesFlor = tarjeta.querySelector(".detalles-flor");
            detallesFlor.style.display = detallesFlor.style.display === "none" ? "block" : "none";
        });
        tarjeta.appendChild(verMasBtn);
    });
};