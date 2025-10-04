// Archivo JavaScript principal para Ferrecas
// Contiene funciones para mejorar la interacción del usuario (UX).

document.addEventListener('DOMContentLoaded', () => {

    // ===============================================
    // 1. SCROLL SUAVE Y BOTÓN VOLVER ARRIBA
    // ===============================================

    let backToTopButton = document.getElementById('backToTopBtn');
    if (!backToTopButton) {
        // Crear el botón dinámicamente si no existe
        backToTopButton = document.createElement('button');
        backToTopButton.id = 'backToTopBtn';
        backToTopButton.innerHTML = '<i class="bi bi-arrow-up-circle-fill"></i>';
        backToTopButton.classList.add('btn', 'btn-primary', 'shadow', 'rounded-circle');
        
        // Estilos básicos para posicionamiento (se recomienda usar CSS para esto)
        backToTopButton.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000; display: none; width: 45px; height: 45px; font-size: 1.5rem; padding: 0; transition: opacity 0.3s;';
        
        document.body.appendChild(backToTopButton);
    }

    // Función para mostrar/ocultar el botón
    const toggleBackToTopButton = () => {
        // Muestra el botón cuando el scroll supera los 300px desde arriba
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
            backToTopButton.style.opacity = 1;
        } else {
            backToTopButton.style.opacity = 0;
            // Ocultar después de la transición
            setTimeout(() => {
                if (backToTopButton.style.opacity == 0) {
                    backToTopButton.style.display = "none";
                }
            }, 300);
        }
    };

    // Función para hacer scroll suave
    const topFunction = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    backToTopButton.addEventListener('click', topFunction);


    // ===============================================
    // 2. HACER LA BARRA DE NAVEGACIÓN "STICKY" (FIJA)
    // Esto requiere que la etiqueta <nav> tenga el id="menu"
    // ===============================================
    
    const navbar = document.getElementById("menu");
    // Solo si encontramos la navbar y tiene contenido para evitar errores
    if (navbar) {
        const stickyPoint = navbar.offsetTop;

        const stickNavbar = () => {
            // Si la posición de scroll es mayor al punto inicial de la navbar
            if (window.pageYOffset > stickyPoint) {
                // Añadir clases para hacerla fija arriba y darle una sombra
                navbar.classList.add("fixed-top", "shadow");
                // Añadir padding al cuerpo para que el contenido no salte
                document.body.style.paddingTop = navbar.offsetHeight + "px";
            } else {
                // Eliminar las clases y resetear el padding
                navbar.classList.remove("fixed-top", "shadow");
                document.body.style.paddingTop = "0";
            }
        };

        // ===============================================
        // 3. ASIGNAR EVENTOS DE SCROLL
        // ===============================================

        // Ejecutamos ambas funciones con un solo evento
        window.onscroll = function() { 
            toggleBackToTopButton(); // Muestra/oculta el botón
            stickNavbar();          // Fija la barra de navegación
        };
    } else {
        // Si no hay navbar, solo asignamos el botón de volver arriba
        window.onscroll = function() { 
            toggleBackToTopButton(); 
        };
    }

    // ===============================================
    // 4. FUNCIÓN PARA CONFIRMACIÓN DE SUSCRIPCIÓN
    // ===============================================
    
    // Busca el formulario de suscripción
    const subscribeForm = document.querySelector('nav form[action="https://formsubmit.co/ferrecassa@gmail.com"]');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            console.log("Suscripción enviada. El usuario será redirigido o verá la página de confirmación de FormSubmit.");
        });
    }
});