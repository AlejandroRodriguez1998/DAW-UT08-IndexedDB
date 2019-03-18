const nombreDB = 'VideoSystem';

function crearBBDD(){
	if(!window.indexedDB){
		window.alert("El navegador no soporta la base de datos IndexedDB. El contenido que añadas, elimines o modifiques no es permanente");
	}

	var dataBase = indexedDB.open(nombreDB, 1);

	dataBase.onupgradeneeded = function (e) {  
		var active = dataBase.result;

		//Creacion de la tabla Categorias
		active.createObjectStore("Categorias", { keyPath: 'Nombre' });

		//Creacion de la tabla Producciones
		active.createObjectStore("Producciones", { keyPath: 'Titulo' });

		//Creacion de la tabla actores
		active.createObjectStore("Actores", { keyPath: 'Nombre' });
		
		//Creacion de la tabla directores
		active.createObjectStore("Directores", { keyPath: 'Nombre' });

		//Creacion de la tabla usuarios
		active.createObjectStore("Usuarios", { keyPath: 'Usuario' });

		//Creacion de la tabla Categorias y Producciones
		active.createObjectStore("AsignarCategorias", {keyPath: 'Categoria'});

		//Creacion de la tabla Actores y Producciones
		active.createObjectStore("AsignarActores", { keyPath: 'Actor' });

		//Creacion de la tabla Directores y Producciones
		active.createObjectStore("AsignarDirectores", { keyPath: 'Director' });
	};
};

function addValues(tabla,array) {
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		objectStore.transaction.oncomplete = function(event) {
			var addObjectStore = db.transaction([tabla],"readwrite").objectStore(tabla);
			for (var i in array) {
				addObjectStore.add(array[i].getObject());
			}
		};
	};
}

function addValuesAsignados(tabla,array) {
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		objectStore.transaction.oncomplete = function(event) {
			var addObjectStore = db.transaction([tabla],"readwrite").objectStore(tabla);
			for (var i in array) {
				addObjectStore.add(array[i]);
			}
		};
	};
}

function addOneValue(tabla,objeto){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		objectStore.transaction.oncomplete = function(event) {
			var addObjectStore = db.transaction([tabla],"readwrite").objectStore(tabla);
		
			addObjectStore.add(objeto.getObject());
		};
	};
}

function addOneValuesAsignados(tabla,assignar) {
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		objectStore.transaction.oncomplete = function(event) {
			var addObjectStore = db.transaction([tabla],"readwrite").objectStore(tabla);
			
			addObjectStore.add(assignar);
		};
	};
}

function deleteValue(tabla,clave){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		db.transaction([tabla],"readwrite").objectStore(tabla).delete(clave);
	};
}

function modifyCategory(clave,nombreCambiar,descripcion){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction(["Categorias"],"readwrite").objectStore("Categorias");

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			// Get the old value that we want to update
			var datos = objeto.result;
			
			datos.Nombre = nombreCambiar;
			datos.Descripcion = descripcion;

			objectStore.add(datos);
		};
	};
}

function modifyCategoryAsignada(clave,nombreCambiar){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction(["AsignarCategorias"],"readwrite").objectStore("AsignarCategorias");

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			// Get the old value that we want to update
			var datos = objeto.result;
			
			datos.Categoria = nombreCambiar;

			objectStore.add(datos);
		};
	};
}



function modifyPerson(tabla,clave,nombreCambiar,apellido1,apellido2,nacimiento){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			// Get the old value that we want to update
			var datos = objeto.result;
			
			datos.Nombre = nombreCambiar;
			datos.Apellido1 = apellido1;
			datos.Apellido2 = apellido2;
			datos.Nacimiento = nacimiento;

			objectStore.add(datos);
		};
	};
}

function assignar(tabla,clave,assignar){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			// Get the old value that we want to update
			var datos = objeto.result;
			
			datos.Producciones.push(assignar);

			objectStore.add(datos);
		};
	};
}

function dessasignar(tabla,clave,dessasignar){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			var datos = objeto.result;
			
			var lista = datos.Producciones;

			var posicion = lista.indexOf(dessasignar);

			if(posicion != -1){
				lista.splice(posicion,1); //Lo borro
			}

			objectStore.add(datos);
		};
	};
}

function dessasignarActor(tabla,clave,dessasignar){
	var request = indexedDB.open(nombreDB);

	request.onsuccess = function(event) {
		var db = event.target.result;         
		var objectStore = db.transaction([tabla],"readwrite").objectStore(tabla);

		var objeto = objectStore.get(clave);

		objectStore.delete(clave);

		objeto.onsuccess = function(event) {
			var datos = objeto.result;
			
			var lista = datos.Producciones;

			for(let i = 0; i < lista.length; i++){
				if(lista[i].Nombre == undefined){
					var posicion = lista.indexOf(dessasignar);
				}else{
					if(lista[i].Nombre == dessasignar){
						var posicion = lista[i];
					}
				}
			}

			if(posicion != -1){
				lista.splice(posicion,1); //Lo borro
			}

			objectStore.add(datos);
		};
	};
}

function cargarBaseDeDatos(){
	var resource = new Resource(180,"http://www.alec.com/resource",["Español","Ingles"],["Chino","Japones"]);
	var resource1 = new Resource(120,"http://www.alec.com/resource");
	var resource2 = new Resource(25,"http://www.alec.com/resource",["Español","Ingles"],["Ruso","Ingles"]);
	var resource3 = new Resource(50,"http://www.alec.com/resource",["Español","Ingles"],["Aleman","Ingles"]);

	var coor = new Coordinate(80,124);

	var season = new Season("Temporada 1",[
		{title: "Episodio 1", episode: resource, scenarios:[new Coordinate(12,20)]},
		{title: "Episodio 2", episode: resource1, scenarios:[new Coordinate(21,30)]}
		]);
	var season1 = new Season("Temporada 2",[
			{title:'Episodio 1',episode: resource1, scenarios:[new Coordinate(12,20)]},
			{title:'Episodio 2',episode: resource2, scenarios:[new Coordinate(21,30)]}
			]);
	var season2 = new Season("Temporada 3",[]);

	const categoriasData = [
		new Category("Comedia" , "Películas realizadas con la intención de provocar humor, entretenimiento y/o risa en el espectador."),
		new Category("Romance" , "Un desarrollo romántico o amoroso entre dos personas."),
		new Category("Terror" , "Realizadas con la intención de provocar tensión, miedo y/o el sobresalto en la audiencia."),
		new Category("Acción" , "El argumento implica una interacción moral entre el «bien» y el «mal» llevada a su fin por la violencia o la fuerza física"),
		new Category("Ciencia Ficción","Se basa en un futuro cercano o muy lejano, donde se logra ver el avance de la tecnología y como ejecuta este en la historia"),
		new Category("Drama", "Se centran principalmente en el desarrollo de un conflicto entre los protagonistas, o del protagonista con su entorno o consigo mismo"),
		new Category("Fantasía" , "La inexistencia de la tecnología nos da a entender que sucede en un tiempo pasado. La magia y animales mitológicos o sucesos sin una explicación lógica forman parte de este mundo"),
		new Category("Musical" , "Contienen interrupciones en su desarrollo, para dar un breve receso por medio de un fragmento musical cantado o acompañados de una coreografía."),
		new Category("Animacion" , "Se caracteriza por no recurrir a la técnica del rodaje de imágenes reales sino a una o más técnicas de animación")
	];

	const usuariosData = [
		new User("Alec","alec@google.com","alec1998"),
		new User("prueba","ivan@hotmail.com","prueba"),
		new User("Pepito","superpepito@yahoo.com","pepitito")
	];

	const produccionesData = [
		new Serie("Carmen Sandiego","Americana",new Date(2019,01,18),"Carmen Sandiego es una serie de acción y aventura animada de Netflix con elementos educativos, basada en la franquicia de medios del mismo nombre creada por Broderbund.","http://www.alec.es/resource6",[season,season1]),
		new Serie("Juego de Tronos","Americana",new Date(2011,05,15),"Movidas raras sobre la conquista de reinos","http://www.alec.es/resource21",[season,season1,season2]),
		new Serie("Arrow","Americana",new Date(2012,10,10),"Un billonario mujeriego que se presumía había fallecido, regresa a casa luego de cinco años de quedar atrapado en una isla remota, él esconde los cambios creados por la experiencia, llevando una vida secreta en la noche, corrigiendo actos erróneos.","http://www.alec.es/resource21",[season,season1,season2]),
		new Serie("Embrujadas","Americana",new Date(1998,10,07),"Un grupo de hermanas viven juntas en una casa en San Francisco y descubren que son hechiceras. Ellas llevan una vida normal en la sociedad y cada una tiene poderes especiales que los utilizan en su lucha contra el mal.","http://www.alec.es/resource21",[season,season1,season2]),
		new Movie("Vengadores","Americana",new Date(2012,05,05),"Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.","",resource,coor),
		new Movie("Tomb Raider","Americana",new Date(2018,03,16),"La joven Lara Croft, cansada de malvivir trabajando como mensajera en bicicleta, lo abandona todo y parte en busca de su padre, un aventurero que desapareció en una isla legendaria que se encuentra en algún lugar de la costa de Japón.","",resource1,coor),
		new Movie("Crepusculo","Americana",new Date(2008,12,05),"Bella Swan se va a vivir con su padre al pequeño pueblo de Forks, donde conoce a Edward, un atractivo y misterioso chico del que se enamora y quien esconde un gran secreto: es un vampiro. Pero la familia del chico guarda una peculiaridad, y es que no se alimenta de sangre humana.","",resource2,[]),
		new Movie("Cazafantasmas","Americana",new Date(2016,07,09),"Tras treinta años de tranquilidad, los fantasmas y demonios han vuelto a Nueva York para aterrorizar a los ciudadanos. Esta vez, una investigadora de lo paranormal, una física, una ingeniera nuclear y una trabajadora del metro conformarán un equipo para detenerlos.","",resource2,[]),
		new Movie("Veronica","Española",new Date(2017,08,25),"En el Madrid de los años 90, un grupo de amigas hacen una sesión de ouija. Al acabar, una de las adolescentes es poseída por unas presencias sobrenaturales que amenazan con hacerle daño a ella y a toda su familia.","",resource2,[]),
		new Movie("Tiburón","Americana",new Date(1975,12,19),"Un gigantesco tiburón blanco amenaza a los habitantes y turistas de un pueblo costero.","",resource2,[]),
		new Movie("Diario de Noa","Americana",new Date(2004,10,22),"Un hombre le cuenta a una mujer la historia de dos jóvenes que se volvieron amantes en la Carolina del Norte de 1940.","",resource3,[])
	];

	const actoresData = [
		new Person("Alejandro","Paniagua","Rodriguez",new Date(1998,07,31),""),
		new Person("Sandra","Bullock","",new Date(1964,07,26),""),
		new Person("Angelina","Jolie","Voight",new Date(1997,06,14),"img/jolie.jpg"),
		new Person("Tom","Cruise","",new Date(1997,01,25),""),
		new Person("Johnny","Depp","II",new Date(1964,09,25),""),
		new Person("Jessica","Lange","",new Date(1963,09,25),""),
	];

	const directoresData = [
		new Person("Keanu","Reeves","",new Date(1945,01,25),""),
		new Person("Evan","Peters","Junior",new Date(1943,09,25),""),
		new Person("Brad","Pitt","",new Date(1993,09,25),"")
	];

	const categoriaProduccion = [
		{Categoria: "Comedia", Producciones: ["Vengadores","Tomb Raider","Cazafantasmas"] },
		{Categoria: "Romance", Producciones: ["Diario de Noa","Crepusculo","Juego de Tronos",] },
		{Categoria: "Terror", Producciones: ["Crepusculo","Veronica","Tiburón"] },
		{Categoria: "Acción", Producciones: ["Vengadores","Cazafantasmas","Tiburón"] },
		{Categoria: "Ciencia Ficción", Producciones: ["Juego de Tronos","Arrow","Tiburón"] },
		{Categoria: "Drama", Producciones: ["Diario de Noa","Veronica","Crepusculo"] },
		{Categoria: "Fantasía", Producciones: ["Juego de Tronos","Embrujadas"] },
		{Categoria: "Musical", Producciones: ["Diario de Noa","Embrujadas"] },
		{Categoria: "Animacion", Producciones: ["Carmen Sandiego"] }
	];

	const actoresProducciones = [
		{Actor: "Alejandro" , Producciones: [{Nombre: "Vengadores", Papel: "Hulk", Principal: true },{Nombre: "Tomb Raider", Papel: "Cuidadano", Principal: false },{Nombre: "Crepusculo", Papel: "Cuidadano", Principal: true }]},
		{Actor: "Tom" , Producciones: [{Nombre: "Vengadores", Papel: "Extra", Principal: false },{Nombre: "Cazafantasmas", Papel: "Cuidadano", Principal: false }]},
		{Actor: "Johnny" , Producciones: [{Nombre: "Veronica", Papel: "Cuidadano", Principal: false },{Nombre: "Tiburón", Papel: "Cuidadano", Principal: false },{Nombre: "Diario de Noa", Papel: "Cuidadano", Principal: false }]},
		{Actor: "Jessica" , Producciones: [{Nombre: "Tiburón", Papel: "Cuidadano", Principal: false },{Nombre: "Diario de Noa", Papel: "Cuidadano", Principal: false }]},
		{Actor: "Angelina" , Producciones: [{Nombre: "Tomb Raider", Papel: "Lara Croft", Principal: true }]},
		{Actor: "Sandra" , Producciones: [{Nombre: "Embrujadas", Papel: "Cuidadano", Principal: false }]}
	];

	const directoresProducciones = [
		{Director: "Keanu" , Producciones: ["Vengadores","Tomb Raider","Crepusculo"]},
		{Director: "Brad" , Producciones: ["Cazafantasmas","Veronica"]},
		{Director: "Evan" , Producciones: ["Tiburón","Diario de Noa"]}
	];

	addValues("Categorias",categoriasData);
	addValues("Producciones",produccionesData);
	addValues("Actores",actoresData);
	addValues("Directores",directoresData);
	addValues("Usuarios",usuariosData);
	addValuesAsignados("AsignarCategorias",categoriaProduccion);
	addValuesAsignados("AsignarActores",actoresProducciones);
	addValuesAsignados("AsignarDirectores",directoresProducciones);
}

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function comprobarSesion() {
	var tiempo = sessionStorage.getItem("tiempo");
	if(tiempo != null ){
		var partesTiempo = tiempo.split(":");

		horas = partesTiempo[0];
		minutos = partesTiempo[1];
		segundos = partesTiempo[2];
		centesimas = partesTiempo[3];

		if(horas.length != 2){ horas = "0"+horas; }
		if(minutos.length != 2){ minutos = "0"+minutos; }
		if(segundos.length != 2){ segundos = "0"+segundos }
		if(centesimas.length != 2){ centesimas = "0"+centesimas }
		
		Centesimas.innerHTML = ":"+centesimas;
		Segundos.innerHTML = ":"+segundos;
		Minutos.innerHTML = ":"+minutos;
		Horas.innerHTML = horas;
	}
}

function inicio() {
	control = setInterval(cronometro,10);

	var play = document.getElementById("inicio");
	var parar = document.getElementById("parar");
	var stop =  document.getElementById("reinicio");

	play.disabled = true;
	play.style.backgroundImage = "url('img/playDesa.png')";
	parar.disabled = false;
	parar.style.backgroundImage = "url('img/pause.png')";
	stop.disabled = false;
	stop.style.backgroundImage = "url('img/stop.png')";
}

function parar() {
	clearInterval(control);

	var play = document.getElementById("inicio");
	var parar = document.getElementById("parar");

	play.disabled = false;
	play.style.backgroundImage = "url('img/play.png')";
	parar.disabled = true;
	parar.style.backgroundImage = "url('img/pauseDesa.png')";
}

function reinicio() {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;

	sessionStorage.setItem('tiempo', horas.toString()+":"+minutos.toString()+":"+segundos.toString()+":"+centesimas.toString()+"");

	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";

	var play = document.getElementById("inicio");
	var parar = document.getElementById("parar");
	var stop =  document.getElementById("reinicio");

	play.disabled = false;
	play.style.backgroundImage = "url('img/play.png')";
	parar.disabled = true;
	parar.style.backgroundImage = "url('img/pauseDesa.png')";
	stop.disabled = true;
	stop.style.backgroundImage = "url('img/stopDesa.png')";
}

function cronometro() {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}

	sessionStorage.setItem('tiempo', horas.toString()+":"+minutos.toString()+":"+segundos.toString()+":"+centesimas.toString());
}

