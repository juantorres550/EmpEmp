/** 
 * Here comes the application context.
 * We'll use AJAX and PHP to make the queries to the database, and read the
 * returned JSON correctly.
 */

(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {

        /* Select the buttons with the filters and gives the class of
        "active" */
        // const modules = document.querySelectorAll(".module");
        const asideMenu = document.querySelector(".resp_menu .cont");
        const searchInput = document.querySelector("#u_search");

        if( searchInput ){
            searchInput.addEventListener('keyup', function(e){
                if ( e.keyCode === 13 ){
                    Swal.fire({
                        title: 'Estamos trabajando en ello.',
                        text: 'La búsqueda estará disponible en la capa de usuario.',
                        type: 'info',
                        confirmButtonText: 'Entendido'
                      });
                }
            });
        }

        asideMenu.addEventListener("click", function () {
            this.classList.toggle("active");
            this.parentNode.parentNode.classList.toggle("show");
        });

        // modules.forEach(module => {
        //     module.addEventListener("click", putActiveClass);
        // });

        function putActiveClass(e) {
            if (this.classList.contains("active")) {
                return;
            } else {
                removeClass(modules, "active");
                this.classList.add("active");
                addContent(this);
                this.removeEventListener("click", putActiveClass);
            }

            console.log("Put active!");
        }

        /* Removes the "i_class" from the "iterable" array of DOM elements. */
        function removeClass(iterable, i_class) {
            iterable.forEach(item => {
                item.classList.remove(i_class);
            });
        }

        /* Creates html content to the events */
        function addContent(module) {

            var content = document.createElement("div");
            content.classList.add("module-info");

            // Create the closing button
            var closeBtn = document.createElement("div");
            closeBtn.classList.add("module-close");

            closeBtn.addEventListener("click", function (e) {
                module.classList.remove("active");
                setTimeout(function () {
                    module.addEventListener('click', putActiveClass);
                }, 10);
                this.parentNode.remove();
            });

            // Add the close btn to the module
            content.appendChild(closeBtn);

            // Make the filters and appends to the module
            for (let i = 0; i < 4; i++) {
                var filterCont = document.createElement("div"),
                    title = document.createElement("h3");

                filterCont.classList.add("module-filter");
                title.innerText = `Mi filtro ${(i + 1)}.`;
                filterCont.appendChild(title);
                content.appendChild(filterCont);
            }

            // Make the "show more" link and put this in the module
            var link = document.createElement("a");
            link.setAttribute("href", "#");
            link.classList.add("filter-link")
            link.innerText = "Más filtros!";
            content.appendChild(link);

            module.appendChild(content);
        }

        // Maps functionalities

        // Promise que hace la consulta al servidor.
        const getApiPoints = () => new Promise((resolve, reject) => {
            // Hacemos la instancia de XMLHttpRequest,
            let xhr = new XMLHttpRequest();
            // Enviamos la petición a la ruta
            xhr.open('GET', '/api/trying', true);
            // Función que se ejecuta con las respuestas del servidor.
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject({error: 'Oops! something gone wrong'})
                    }
                }
            }
            // Enviar la petición al servidor.
            xhr.send();
        });

        const drawPolyline = (arr, map, color) => {
            arr.forEach(coords => {
                if( coords ){
                    let tempPoly = new google.maps.Polygon({
                        paths: coords,
                        strokeColor: color,
                        strokeOpacity: 1,
                        strokeWeight: 2,
                        fillColor: color,
                        fillOpacity: 0.2
                    });

                    tempPoly.setMap(map);
                    tempPoly.addListener('click', e => {
                        Swal.fire({
                            title: 'Estamos trabajando en ello.',
                            text: 'Los filtros específicos estarán disponibles en la capa de usuario.',
                            type: 'info',
                            confirmButtonText: 'Entendido'
                        });
                    });
                }
            });
        }
    
        const drawInMap = (resp, map) => {
            drawPolyline(resp.arte, map, '#8ab0db');
            drawPolyline(resp.cen_eventos, map, '#db8ac0');
            drawPolyline(resp.cine, map, '#dadb8a');
            drawPolyline(resp.cultura, map, '#968adb');
            drawPolyline(resp.literatura, map, '#8adb8a');
            drawPolyline(resp.musica, map, '#db8a8a');
        };

        const setLocation = (map) => {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    let coords = { 
                        lat: position.coords.latitude, 
                        lng: position.coords.longitude 
                    };
                    map.setCenter(coords);
                    map.setZoom(15);
                    var marker = new google.maps.Marker({
                        position: coords,
                        map: map,
                        title: '¡Tu localización!'
                    });
              
                });
            }
        }

        let map;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: { lat: 6.17397, lng: -75.5809646 }
            });

            setLocation(map);
        }

        initMap();

        getApiPoints()
            .then(resp => drawInMap(resp, map))
            .catch(err => console.log(err));

    }) // Ends DOMContentLoaded
})();
