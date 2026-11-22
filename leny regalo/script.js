const Regalos = [
    {
        nombre: "Kire",
        parrafo: "Feliz cumpleaños Leny, aún no te conozco tanto realmente pero he disfrutado mucho disociar de furros contigo. Eres agradable y puedo sentir que eres una gran persona, espero sigamos disociando más tiempo muejeje.",
        img: "style/img/kire.png",
        color: "#FF7520",
        degradado: "#ffca29",
        sonido: "style/sonido/sonido1.mp3",
        sorpresa: "style/sonido/sorpresa.mp3"
    },
    {
        nombre: "leo",
        parrafo: "Hola corazón, te deseo un precioso cumpleaños que sepas que yo te amo con mi cerebro, porque sonrio como tonto cada vez que pienso en tí, feliz cumple mi vida",
        img: "style/img/leo.png",
        color: "#503a83",
        degradado: "#823fff",
        sonido: "style/sonido/sonido2.mp3",
        sorpresa: "style/sonido/sorpresa.mp3"
    },
    {
        nombre: "Fasvi",
        parrafo: "Leny, te conoci hace relativamente poco, pero, te tengo mucho cariño, no te puedo agradecer lo suficiente por todo el apoyo que me has dado, no sabes lo feliz que me hace escuchar tus historias, adoro la capacidad que tienes para plantear mundos, aqui dejo un dibujo de uno de tus personajes al que más le agarre cariño, gracias por todo leny, siempre contaras conmigo para lo que necesites, te quieroooo",
        img: "style/img/fasvi.jpg",
        color: "#ffc228",
        degradado: "#7dc4ff",
        sonido: "style/sonido/sonido2.mp3",
        sorpresa: "style/sonido/sorpresa.mp3"
    },
    {
        nombre: "Gif",
        parrafo: "leny desde que te conoci senti que eras una persona que valia la pena tener en mi vida, no solo porque tienes una personalidad encantadora y perciosa, sino tambien porque eres una persona fuerte y hermosa, quisiera haber podido dar mas de mi para este regalo, quiero que tengas el mejor dia porque realmente te mereces cosas preciosas, preciosas como tu en mi vida TKM LENY.",
        img: "style/img/gif.png",
        color: "#aff419",
        degradado: "#ff244c",
        sonido: "style/sonido/sonido2.mp3",
        sorpresa: "style/sonido/sorpresa.mp3"
    }
];

// COLORES DE TAILWIND
const coloresTailwind = tailwind.config.theme.extend.colors;

const contenedor = document.getElementById("contenedor-regalos");

// COMPROBAR CONTENEDOR
if (!contenedor) {

    console.error("No se encontró contenedor-regalos.");

} else {

    // FUNCION PARA REPRODUCIR SONIDOS
    function reproducirSonido(ruta) {

        const audio = new Audio(ruta);
        audio.volume = 1;

        audio.addEventListener("error", () => {
            console.error("No se pudo cargar el audio:", ruta);
        });

        audio.play().catch((error) => {
            console.error("Error de reproducción:", error);
        });
    }


    // FUNCION DE SERPENTINAS
    function lanzarSerpentinas(contenedorImagen) {

        // COLORES DE LAS SERPENTINAS
        const colores = [
            "#ff4d6d", // Rosa
            "#ff9f1c", // Naranja
            "#ffd60a", // Amarillo
            "#70e000", // Verde
            "#00bbf9", // Celeste
            "#4361ee", // Azul
            "#b5179e", // Magenta
            "#9d4edd"  // Violeta
        ];

        for (let i = 0; i < 35; i++) {

            const serpentina = document.createElement("span");
            serpentina.className = "serpentina";

            serpentina.style.left = Math.random() * 100 + "%";

            // COLOR ALEATORIO
            serpentina.style.backgroundColor =
                colores[Math.floor(Math.random() * colores.length)];

            serpentina.style.setProperty(
                "--rotacion",
                Math.random() * 360 + "deg"
            );

            serpentina.style.animationDelay =
                Math.random() * 0.5 + "s";

            contenedorImagen.appendChild(serpentina);

            setTimeout(() => serpentina.remove(), 2500);
        }
    }


    // CREAR REGALOS
    Regalos.forEach((regalo) => {

        // TARJETA
        const tarjeta = document.createElement("article");

        tarjeta.className = "w-full";


        // TITULO
        const titulo = document.createElement("button");

        titulo.textContent = regalo.nombre;
        titulo.className = `titulo-regalo w-40 aspect-square p-5 text-center text-xl sm:text-2xl font-bold special-elite rounded-xl shadow-lg cursor-pointer text-fondo border-2 border-primero`;


        // COLOR PERSONALIZADO DE LA TARJETA
        titulo.style.backgroundColor = regalo.color;


        // AGREGAR TARJETA
        tarjeta.appendChild(titulo);
        contenedor.appendChild(tarjeta);


        // ABRIR MODAL
        titulo.addEventListener("click", () => {

            // EVITAR MODALES DUPLICADOS
            if (document.querySelector(".modal-regalo")) return;


            // FONDO
            const modal = document.createElement("div");

            modal.className = `
                modal-regalo
                fixed
                inset-0
                z-[9999]
                flex
                justify-center
                items-center
                p-3
                sm:p-5
                bg-fondo/90
                backdrop-blur-sm
            `;


            // ESTAMPILLA CUADRADA CON BORDES REDONDEADOS
            const estampilla = document.createElement("div");

            estampilla.className = `
    estampilla-regalo
    relative
    flex
    flex-col
    w-full
    max-w-[650px]
    h-[92dvh]
    max-h-[850px]
    p-3
    sm:p-5
    md:p-7
    gap-2
    sm:gap-3
    rounded-2xl
    border-2
    border-fondo
    shadow-2xl
    overflow-y-auto
`;


            // DEGRADADO PERSONALIZADO DEL REGALO
            estampilla.style.background = `linear-gradient(135deg, ${regalo.color}, ${regalo.degradado})`;


            // ENCABEZADO
            const encabezado = document.createElement("header");

            encabezado.className = `
                encabezado-modal
                shrink-0
                w-full
                text-center
                pt-5
                pb-2
            `;


            // NOMBRE
            const nombre = document.createElement("h2");

            nombre.textContent = regalo.nombre;

            nombre.className = `
                nombre-modal
                text-fondo
                text-2xl
                sm:text-4xl
                font-bold
                special-elite
            `;


            // MENSAJE
            const parrafo = document.createElement("p");

            parrafo.textContent = regalo.parrafo;

            parrafo.className = `
                mensaje-regalo
                shrink-0
                w-full
                text-primero
                text-sm
                sm:text-base
                leading-relaxed
                px-2
                py-2
                red-hat-mono
                font-bold
            `;


            // INTERIOR DE LA ESTAMPILLA
            const interior = document.createElement("div");
            interior.className = `
    estampilla-interior
    flex
    flex-col
    flex-1
    min-h-0
    w-full
    bg-extra2
    text-fondo
    p-3
    sm:p-4
    gap-3
    rounded-xl
    border
    border-fondo
`;

            // IMAGEN
            const contenedorImagen = document.createElement("div");

            contenedorImagen.className = `
                imagen-regalo
                relative
                flex-1
                min-h-0
                w-full
                max-w-[450px]
                mx-auto
                rounded-xl
                overflow-hidden
                bg-fondo
                cursor-pointer
            `;


            const imagen = document.createElement("img");

            imagen.src = regalo.img;
            imagen.alt = "Tu regalo";

            imagen.className = `
                imagen-spoiler
                block
                w-full
                h-full
                object-contain
            `;


            // TAPA DEL SPOILER
            const tapa = document.createElement("div");

            tapa.className = `
                tapa-regalo
                absolute
                inset-0
                flex
                flex-col
                justify-center
                items-center
                text-center
                p-4
                bg-fondo
                text-primero
                font-bold
                red-hat-mono
                cursor-pointer
            `;

            tapa.textContent = "Click aquí para ver tu regalo";


            // REVELAR IMAGEN
            tapa.addEventListener("click", () => {

                if (tapa.classList.contains("oculta")) return;

                tapa.classList.add("oculta");
                imagen.classList.add("imagen-revelada");

                reproducirSonido(regalo.sorpresa);
                lanzarSerpentinas(contenedorImagen);
            });


            // SONIDO Y VISOR DE IMAGEN
            imagen.addEventListener("click", () => {

                // SOLO FUNCIONA SI EL REGALO YA FUE REVELADO
                if (!tapa.classList.contains("oculta")) return;

                // REPRODUCIR SONIDO
                reproducirSonido(regalo.sonido);

                // EVITAR VISOR DUPLICADO
                if (document.querySelector(".visor-imagen")) return;

                // CREAR VENTANA EMERGENTE
                const visor = document.createElement("div");

                visor.className = `
                    visor-imagen
                    fixed
                    inset-0
                    z-[10000]
                    flex
                    justify-center
                    items-center
                    p-3
                    sm:p-6
                    bg-fondo/95
                    backdrop-blur-sm
                    cursor-pointer
                `;


                // CREAR IMAGEN DEL VISOR
                const imagenGrande = document.createElement("img");

                imagenGrande.src = regalo.img;
                imagenGrande.alt = "Imagen ampliada del regalo";

                imagenGrande.className = `
                    max-w-full
                    max-h-full
                    w-auto
                    h-auto
                    object-contain
                    rounded-lg
                    cursor-pointer
                `;


                // AGREGAR IMAGEN AL VISOR
                visor.appendChild(imagenGrande);


                // AGREGAR VISOR AL MODAL
                modal.appendChild(visor);


                // CERRAR AL HACER CLIC
                visor.addEventListener("click", () => {
                    visor.remove();
                });

            });


            // BOTON CERRAR
            const cerrar = document.createElement("button");

            cerrar.textContent = "×";

            cerrar.className = `
                cerrar-regalo
                absolute
                top-2
                right-2
                sm:top-3
                sm:right-3
                z-50
                flex
                justify-center
                items-center
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                border-1
                border-primero
                bg-fondo
                text-primero
                text-3xl
                cursor-pointer
            `;

            cerrar.setAttribute("aria-label", "Cerrar regalo");


            // ARMAR ELEMENTOS
            encabezado.appendChild(nombre);

            contenedorImagen.appendChild(imagen);
            contenedorImagen.appendChild(tapa);

            interior.appendChild(parrafo);
            interior.appendChild(contenedorImagen);

            estampilla.appendChild(cerrar);
            estampilla.appendChild(encabezado);
            estampilla.appendChild(interior);

            modal.appendChild(estampilla);
            document.body.appendChild(modal);


            // BLOQUEAR SCROLL DEL FONDO
            document.body.classList.add("modal-activo");


            // SONIDO AL ABRIR
            reproducirSonido(regalo.sonido);


            // ANIMACION DE APERTURA
            requestAnimationFrame(() => {
                modal.classList.add("modal-visible");
            });


            // CERRAR MODAL
            function cerrarModal() {

                modal.classList.remove("modal-visible");

                document.body.classList.remove("modal-activo");

                document.removeEventListener("keydown", teclaEscape);

                setTimeout(() => {
                    modal.remove();
                }, 350);
            }


            // CERRAR CON ESCAPE
            function teclaEscape(event) {

                if (event.key === "Escape") {
                    cerrarModal();
                }
            }

            document.addEventListener("keydown", teclaEscape);


            // CERRAR CON BOTON
            cerrar.addEventListener("click", cerrarModal);


            // CERRAR AL TOCAR FUERA
            modal.addEventListener("click", (event) => {

                if (event.target === modal) {
                    cerrarModal();
                }
            });

        });

    });
}