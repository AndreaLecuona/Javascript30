const challenges = [
    {
        folder: "01 - JavaScript Drum Kit",
        concepts: "- Uso de keyCode para identificar POR CÓDIGO NUMÉRICO la tecla oprimida por el usuario"
    },
    {
        folder: "02 - JS and CSS Clock",
        concepts: "- Operar con el objeto date y trasladar esa información a una animación visible (relación minutos con angulos) <br>- Resolver bug de cierre de minuto"
    },
    {
        folder: "03 - CSS Variables",
        concepts: "- Posibilidad de hacer variables css de forma dinámica <br>- Alcance de las propiedades que registra el objeto window (respecto al mouse en este caso) <br>- Relacionar el dinamismo con el movimiento del mouse y lograr efecto de simultaneidad"
    },
    {
        folder: "04 - Array Cardio Day 1",
        concepts: "- Profundizar en métodos y aclarar aplicación de reduce() y sort()"
    },
    {
        folder: "05 - Flex Panel Gallery",
        concepts: "- Aclaración de la forma de seleccionar hijos con el símbolo > <br>- Aplicar transición a proporciones de flexbox <br>- Cómo identificar las transiciones que ocurren en simultáneo, para poder elegir sobre cuál quiero que dependa el transitionend"
    },
    {
        folder: "06 - Type Ahead",
        concepts: "- Usar el spread operator dentro de un fetch para que la data nos quede en un formato utilizable <br>- Búsqueda/filtro de array en simultáneo con el tipeo de un usuario <br>- Utilizar un regex dinámico con intención de identificar y aplicar css a partes específicas del resultado de una búsqueda previa"
    },
    {
        folder: "07 - Array Cardio Day 2",
        concepts: "- Profundizar métodos y aclarar checkeos de información en array con some() y every()"
    },
    {
        folder: "08 - Fun with HTML5 Canvas",
        concepts: "- Primera aproximación a la etiqueta canvas, su funcionamiento y uso <br>- Distinguir los eventos individuales que conforman la acción de dibujar <br>- Relacionar los movimientos del mouse con el resultado visual <br>- Modificar los aspectos visuales del dibujo tanto estática como dinámicamente"
    },
    {
        folder: "09 - Dev Tools Domination",
        concepts: "- Uso de debugger de css <br>- Explorar posibilidades de formato de logueo de información en la consola <br>- Testeos simples <br>- Registrar y mostrar tiempo de procesos, como por ejemplo el fetch de una api"
    },
    {
        folder: "10 - Hold Shift and Check Checkboxes",
        concepts: "- Aprovechar el uso de flags (true, false) para identificar estados y actuar en consecuencia <br>- Desmenuzar acciones del usuario en pequeñas"
    },
    {
        folder: "11 - Custom Video Player",
        concepts: "- Explorar propiedades y métodos del elemento video <br>- Considerar diferentes accesos al control de reproduccion del video (el boton proporcionado, clickear directo en la pantalla del video, plugin del nevegador) <br>- Ventaja de usar el atributo dataset para reutilizar funciones"
    },
    {
        folder: "12 - Key Sequence Detection",
        concepts: "- Fijar cantidad de valores de un array para que frente a un usuario que tipea, los valores se vayan sobreescribiendo en tiempo real pero nunca modifiquen el length del array"
    },
    {
        folder: "13 - Slide in on Scroll",
        concepts: "- Aprovechar propiedades del objeto window para calcular animaciones a determinada altura <br>- Beneficios de tener una función debounce en un evento scroll"
    },
    {
        folder: "14 - JavaScript References VS Copying",
        concepts: "- Reforzar bases para entender la diferencia entre referencia y copia en variables, arrays y objetos (y sus reacciones frente a modificaciones de valores) <br>- Las copias a través del método Object.assign() sólo alcanzan 1 capa de profundidad (si modificamos el valor de la propiedad de un objeto dentro del objeto copiado, modificaremos también el objeto original)"
    },
    {
        folder: "15 - LocalStorage",
        concepts: "- Manejo y persistencia de una lista y sobre todo, de los estados (checkeado o no checkeado) de los items de esa lista <br>- Evitar multiples registros de click en un mismo elemento hijo, cuando se transmiten a través del event bubbling"
    },
    {
        folder: "16 - Mouse Move Shadow",
        concepts: "- Aprovechar la propiedad offset (offsetX e Y, offsetLeft y Top) para relacionar las medidas de un elemento html y la posicion del cursor <br>- Volver dinámico el text-shadow"
    },
    {
        folder: "17 - Sort Without Articles",
        concepts: "- Pasar una función modificadora de strings SÓLO en el condicional de un sort, permite que el array de strings final lo tome como criterio de orden pero no modifique las palabras en sí <br>- Pasarle un array al innerHTML de un elemento hace que al array se le aplique implicitamente el toString() y agregue por defecto una coma (,) entre elementos, generando una anomalía visual. Se soluciona encadenando un .join('')"
    },
    {
        folder: "18 - Adding Up Times with Reduce",
        concepts: "- El querySelector() de todos los data-set (en varios li) devuelve un node list, por ende hay que convertirlo a array para poder trabajar con esos datos <br>- Calcular la suma de segundos totales en una lista de reproduccion con reduce y hacer el calculo para darle formato hh:mm:ss a través de Math.floor y %"
    },
    {
        folder: "19 - Webcam Fun",
        concepts: "- Necesita levantar un servidor sencillo <br>- Relación obj.navigator-video-canvas para generar un video en vivo y llevar acciones sobre él en tiempo real (filtros y descarga) <br>- El canvas debe tener mismo ancho y alto del video para poder recibir sus datos <br>- La información de colores de pixeles de la imagen es representada en consola a través de miles de arrays que contienen una sucesión de números cuyo orden se corresponde con el orden RGBA. Es decir, en los datos [228, 220, 210, 255, 200, 240, ....] podemos leer: [228=R, 220=G, 210=B, 255=A, 200=R, 240=G, ....] <br>- Ponerle un return a un setInterval nos facilita su acceso en caso de necesitar detenerlo"
    },
    {
        folder: "20 - Speech Detection",
        concepts: "- Necesita levantar un servidor sencillo <br>- El objeto window es quien provee la API para reconocimiento de voz <br>- La transcripción de la frase captada está anidada dos niveles dentro de los resultados (que vienen en forma de lista) <br>- Para acceder a la transcripcion, hay que convertir los resultados en array y luego mapear"
    },
    {
        folder: "21 - Geolocation",
        concepts: "- El objeto navigator es quien provee la API para geolocalizacion <br>- Devuelve un objeto que contiene coordenadas latitud y longitud, 'heading'(asociado a la dirección Norte) y 'speed'(en km/h), entre otras"
    },
    {
        folder: "22 - Follow Along Link Highlighter",
        concepts: "- El elemento que se mueve es un span que posee sus propiedades ancho, alto, eje X y eje Y modificadas de manera dinámica. Los valores los toma del anchor donde ingresa el mouse. Usa la transition para cambiar de manera fluida <br>- El evento es mouseenter, no hover"
    },
    {
        folder: "23 - Speech Synthesis",
        concepts: "- SpeechSynthesisUtterance es la interfaz de la Web Speech API que representa una speech request <br>- SpeechSynthesis es una variable global que ejecuta métodos como 'speak' y puede recibir información (frases) desde SpeechSynthesisUtterance"
    },
    {
        folder: "24 - Sticky Nav",
        concepts: "- OffsetTop retorna la distancia del elemento (al que se lo aplica) respecto al borde superior del nodo offsetParent. Es una medida fija basada en la ubicación del elemento en la pantalla <br>- window.scrollY devuelve el valor del scroll tomando como referencia el borde superior del navegador <br>- Es conveniente agregar el cambio a un elemento de jerarquia alta en lugar de hacerlo directamente en el nav (a pesar que el cambio recaiga en el nav y no en su padre), ya que si se quisieran hacer más cambios en otros hijos, es más ordenado cuando todos dependen del estado del mismo padre"
    },
    {
        folder: "25 - Event Capture, Propagation, Bubbling and Once",
        concepts: "El event propagation consiste en 3 fases: Capturing: El evento DESCIENDE por la jerarquía hacia el elemento que lo llamó para capturarlo y almacenarlo en la memoria, Target: El evento llega al elemento que lo llamó, y Bubbling: Cuando un evento sucede sobre un elemento, primero ejecuta los handlers sobre él, luego sobre su elemento padre, y luego continúa ASCENDIENDO (burbujea/se replica) en la jerarquía, ejecutando el handler sobre los siguientes ancestros <br>- capture:false implica que el handler en lugar de ejecutarse durante el bubbling (de abajo hacia arriba), se ejecuta durante el capture (de arriba hacia abajo). Por defecto el capture viene en false <br>-e.stopPropagation() hace que el evento una vez ejecutado en el target, no haga bubbling ni ejecute el handler en los elementos padres (siempre que el capture esté en false) <br>-once:true implica que al llamar un evento, el handler se ejecuta UNA SOLA VEZ en el target y luego automáticamente se desvincula (unbind / remove) al elemento target del eventListener. Sólo si refresco la página, vuelve a existir el vínculo"
    },
    {
        folder: "26 - Stripe Follow Along Nav",
        concepts: "- getBoundingClientRect() devuelve las coordenadas de largo, ancho, top,left,right,bottom, eje x, eje y del elemento respecto a la pagina <br>- Este tipo de nav se hace lo más programático posible, ya que no siempre tenemos el control sobre los elementos html que van a estar. A veces los CMS agregan nuevos elementos y pueden romper nuestro menú si lo trabajamos con valores absolutos <br>- La referencia para el hover son los li de alto nivel y no los anchor porque en el momento que quiera bajar el cursor para tocar algo en el menú desplegado, se interpretará como mouseleave y se va a cerrar el menú"
    },
    {
        folder: "27 - Click and Drag",
        concepts: "- Sinergia entre 4 eventos (mousedown, mouseleave, mouseup, mousemove) para lograr un feature click and drag o drag and drop"
    },
    {
        folder: "28 - Video Speed Controller",
        concepts: "- Relacion valores dinamicos del mousemove con la propiedad de velocidad de reproduccion del elemento video (video.playbackRate), para modificarlo en tiempo real segun los movimientos del usuario"
    },
    {
        folder: "29 - Countdown Timer",
        concepts: "- Guardar el setInterval en una variable global para resolver que al terminar el contador, el setinterval se detenga <br>- new Date(timestamp) timestamp per se viene en milisegundos, con new Date() se convierte en formato 'fecha' (dia semanal, mes, num de mes, año, hora, huso horario) <br>- Uso del objeto Math y el % operator para calcular equivalencias d etiempo entre minutos y segundos <br>- Aprovechar el operador ternario para resolver detalles de formato del reloj final"
    },
    {
        folder: "30 - Whack A Mole",
        concepts: "- Uso de Math.random() para generar RANGOS de tiempo aleatorios que se traduzcan en secuencias para ejecutar movimientos, y en duraciones de movimientos <br>- Usar un condicional y la recursion (recursion = la funcion se llama a sí misma) para mantener la aleatoriedad en el juego <br>- La propiedad 'isTrusted' del evento click legitima que se haya realizado efectivamente con el mouse (y no simulado con algun codigo de javascript)"
    }
];

const list = document.querySelector('.grid-projects');

challenges.forEach(item => {
    const card = document.createElement('div');
    card.classList = "card-style";

    card.innerHTML = 
        `<a href="/${item.folder}/index-START.html" target="_blank">
            <div class="img-container">
                <img src="/${item.folder}/preview.jpg" alt="project preview">
            </div>
            <h3 class="project-name">${item.folder}</h3>
        </a>
        <p><span class = "bold">¿ QUÉ APRENDÍ ? <br> </span> ${item.concepts}</p>`
    ;
    list.appendChild(card);
});
