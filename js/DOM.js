//Funcion que inicializa todos los objetos y la relacion entre ellos
function initPopulate(){
	/* INICIO DE LA CREACION DE OBJETOS */ 
	//Se crean los objetos person
	try {
		var persona = new Person("Alejandro","Paniagua","Rodriguez",new Date(1998,07,31),"");
		var persona1 = new Person("Sandra","Bullock","",new Date(1964,07,26),"");
		var persona2 = new Person("Angelina","Jolie","Voight",new Date(1997,06,14),"img/jolie.jpg");
		var persona3 = new Person("Keanu","Reeves","",new Date(1945,01,25),"");
		var persona4 = new Person("Tom","Cruise","",new Date(1997,01,25),"");
		var persona5 = new Person("Johnny","Depp","II",new Date(1964,09,25),"");
		var persona6 = new Person("Brad","Pitt","",new Date(1993,09,25),"");
		var persona7 = new Person("Jessica","Lange","",new Date(1963,09,25),"");
		var persona8 = new Person("Evan","Peters","Junior",new Date(1943,09,25),"");
	} catch (error) {
		console.log("" + error);
	}

	var actoresData = [persona,persona1,persona2,persona4,persona5,persona7];
	var directoresData = [persona3,persona6,persona8];

    //Se crean los objetos category
	try {
		var category = new Category("Comedia" , "Películas realizadas con la intención de provocar humor, entretenimiento y/o risa en el espectador.");
		var category1 = new Category("Romance" , "Un desarrollo romántico o amoroso entre dos personas.");
		var category2 = new Category("Terror" , "Realizadas con la intención de provocar tensión, miedo y/o el sobresalto en la audiencia.");
		var category3 = new Category("Acción" , "El argumento implica una interacción moral entre el «bien» y el «mal» llevada a su fin por la violencia o la fuerza física");
		var category4 = new Category("Ciencia Ficción","Se basa en un futuro cercano o muy lejano, donde se logra ver el avance de la tecnología y como ejecuta este en la historia");
		var category5 = new Category("Drama", "Se centran principalmente en el desarrollo de un conflicto entre los protagonistas, o del protagonista con su entorno o consigo mismo");
		var category6 = new Category("Fantasía" , "La inexistencia de la tecnología nos da a entender que sucede en un tiempo pasado. La magia y animales mitológicos o sucesos sin una explicación lógica forman parte de este mundo");
		var category7 = new Category("Musical" , "Contienen interrupciones en su desarrollo, para dar un breve receso por medio de un fragmento musical cantado o acompañados de una coreografía.");
		var category9 = new Category("Animacion" , "Se caracteriza por no recurrir a la técnica del rodaje de imágenes reales sino a una o más técnicas de animación");
	} catch (error) {
		console.log("" + error);
	}
	//Se crean objetos resource

	var categoriasData = [category,category1,category2,category3,category4,category5,category6,category7,category9];
	
	try {
		var resource = new Resource(180,"http://www.alec.com/resource",["Español","Ingles"],["Chino","Japones"]);
		var resource1 = new Resource(120,"http://www.alec.com/resource");
		var resource2 = new Resource(25,"http://www.alec.com/resource",["Español","Ingles"],["Ruso","Ingles"]);
		var resource3 = new Resource(50,"http://www.alec.com/resource",["Español","Ingles"],["Aleman","Ingles"]);
	} catch (error) {
		console.log("" + error);
	}

    //Se crea un objeto Coordinate
	try {
		var coor = new Coordinate(80,124);
	} catch (error) {
		console.log("" + error);
	}
    //Se crean objetos Movie
    try {
		var movie = new Movie("Vengadores","Americana",new Date(2012,05,05),"Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado. Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.","",resource,coor);
		var movie1 = new Movie("Tomb Raider","Americana",new Date(2018,03,16),"La joven Lara Croft, cansada de malvivir trabajando como mensajera en bicicleta, lo abandona todo y parte en busca de su padre, un aventurero que desapareció en una isla legendaria que se encuentra en algún lugar de la costa de Japón.","",resource1,coor);
		var movie2 = new Movie("Crepusculo","Americana",new Date(2008,12,05),"Bella Swan se va a vivir con su padre al pequeño pueblo de Forks, donde conoce a Edward, un atractivo y misterioso chico del que se enamora y quien esconde un gran secreto: es un vampiro. Pero la familia del chico guarda una peculiaridad, y es que no se alimenta de sangre humana.","",resource2,[]);
		var movie3 = new Movie("Cazafantasmas","Americana",new Date(2016,07,09),"Tras treinta años de tranquilidad, los fantasmas y demonios han vuelto a Nueva York para aterrorizar a los ciudadanos. Esta vez, una investigadora de lo paranormal, una física, una ingeniera nuclear y una trabajadora del metro conformarán un equipo para detenerlos.","",resource2,[]);
		var movie4 = new Movie("Veronica","Española",new Date(2017,08,25),"En el Madrid de los años 90, un grupo de amigas hacen una sesión de ouija. Al acabar, una de las adolescentes es poseída por unas presencias sobrenaturales que amenazan con hacerle daño a ella y a toda su familia.","",resource2,[]);
		var movie5 = new Movie("Tiburón","Americana",new Date(1975,12,19),"Un gigantesco tiburón blanco amenaza a los habitantes y turistas de un pueblo costero.","",resource2,[]);
		var movie6 = new Movie("Diario de Noa","Americana",new Date(2004,10,22),"Un hombre le cuenta a una mujer la historia de dos jóvenes que se volvieron amantes en la Carolina del Norte de 1940.","",resource3,[]);
    } catch (error) {
        console.log("" + error);
	}
	//Se crean objetos User
	try {
		var user = new User("Alec","alec@google.com","alec1998");
		var user1 = new User("prueba","ivan@hotmail.com","prueba");
		var user2 = new User("Pepito","superpepito@yahoo.com","pepitito");
	} catch (error) {
		console.log("" + error);
	}

	var usuariosData = [user,user1,user2];

	//Se crean los objetos Season
	try {
		var season = new Season("Temporada 1",[
											{title:'Episodio 1',episode: resource, scenarios:[new Coordinate(12,20)]},
											{title:'Episodio 2',episode: resource1, scenarios:[new Coordinate(21,30)]}
											]);
		var season1 = new Season("Temporada 2",[
											{title:'Episodio 1',episode: resource1, scenarios:[new Coordinate(12,20)]},
											{title:'Episodio 2',episode: resource2, scenarios:[new Coordinate(21,30)]}
											]);
		var season2 = new Season("Temporada 3",[]);
	} catch (error) {
		console.log("" + error);
	}
	//Se crean los objetos Serie
	try {
		var serie = new Serie("Carmen Sandiego","Americana",new Date(2019,01,18),"Carmen Sandiego es una serie de acción y aventura animada de Netflix con elementos educativos, basada en la franquicia de medios del mismo nombre creada por Broderbund.","http://www.alec.es/resource6",[season,season1]);
		var serie1 = new Serie("Juego de Tronos","Americana",new Date(2011,05,15),"Movidas raras sobre la conquista de reinos","http://www.alec.es/resource21",[season,season1,season2]);
		var serie2 = new Serie("Arrow","Americana",new Date(2012,10,10),"Un billonario mujeriego que se presumía había fallecido, regresa a casa luego de cinco años de quedar atrapado en una isla remota, él esconde los cambios creados por la experiencia, llevando una vida secreta en la noche, corrigiendo actos erróneos.","http://www.alec.es/resource21",[season,season1,season2]);
		var serie3 = new Serie("Embrujadas","Americana",new Date(1998,10,07),"Un grupo de hermanas viven juntas en una casa en San Francisco y descubren que son hechiceras. Ellas llevan una vida normal en la sociedad y cada una tiene poderes especiales que los utilizan en su lucha contra el mal.","http://www.alec.es/resource21",[season,season1,season2]);
	} catch (error) {
		console.log("" + error);
	}

	var produccionesData = [movie,movie1,movie2,movie3,movie4,movie5,movie6,serie,serie1,serie2,serie3];

	addValues("Categorias",categoriasData);
	addValues("Producciones",produccionesData);
	addValues("Actores",actoresData);
	addValues("Directores",directoresData);
	addValues("Usuarios",usuariosData);

	//Se crea el objeto VideoSystem y se le añade el nombre 
	try {
		var video = VideoSystem.getInstance();
		video.name = "ALEC VIDEOCLUB";
	} catch (error) {
		console.log("" + error);
	}

	video.addResource(resource);
	video.addResource(resource1);
	video.addResource(resource2);
	video.addResource(resource3);

	video.addSeason(season);
	video.addSeason(season1);
	video.addSeason(season2);

	//Añadimos las categorias 
	try {
		video.addCategory(category);
		video.addCategory(category1);
		video.addCategory(category2);
		video.addCategory(category3);
		video.addCategory(category4);
		video.addCategory(category5);
		video.addCategory(category6);
		video.addCategory(category7);
		video.addCategory(category9);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los usuarios
	try {
		video.addUser(user);
		video.addUser(user1);
		video.addUser(user2);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos las producciones
	try {
		video.addProduction(movie);
		video.addProduction(movie1);
		video.addProduction(movie2);
		video.addProduction(movie3);
		video.addProduction(movie4);
		video.addProduction(movie5);
		video.addProduction(movie6);
		video.addProduction(serie);
		video.addProduction(serie1);
		video.addProduction(serie2);
		video.addProduction(serie3);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos los actores
	try {
		video.addActor(persona);
		video.addActor(persona1);
		video.addActor(persona2);
		video.addActor(persona4);
		video.addActor(persona5);
		video.addActor(persona7);
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos un director
	try {
		video.addDirector(persona3);
		video.addDirector(persona6);
		video.addDirector(persona8);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a una categoria
	try {
		video.assignCategory(category,movie);
		video.assignCategory(category,movie1);
		video.assignCategory(category,movie3);
		video.assignCategory(category1,movie6);
		video.assignCategory(category1,movie2);
		video.assignCategory(category1,serie1);
		video.assignCategory(category2,movie2);
		video.assignCategory(category2,movie4);
		video.assignCategory(category2,movie5);
		video.assignCategory(category3,movie);
		video.assignCategory(category3,movie3);
		video.assignCategory(category3,movie5);
		video.assignCategory(category4,serie1);
		video.assignCategory(category4,serie2);
		video.assignCategory(category4,movie5);
		video.assignCategory(category5,movie6);
		video.assignCategory(category5,movie4);
		video.assignCategory(category5,movie2);
		video.assignCategory(category6,serie1);
		video.assignCategory(category6,serie3);
		video.assignCategory(category7,movie6);
		video.assignCategory(category7,serie3);
		video.assignCategory(category9,serie);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un director
	try {
		video.assignDirector(persona3,movie);
		video.assignDirector(persona3,movie1);
		video.assignDirector(persona3,movie2);
		video.assignDirector(persona6,movie3);
		video.assignDirector(persona6,movie4);
		video.assignDirector(persona8,movie5);
		video.assignDirector(persona8,movie6);
	} catch (error) {
		console.log("" + error);
	}
	//Asignamos una produccion a un actorr
	try {	
		//video.assignActor(persona,movie,"Hulk",true);
		video.assignActor(persona,movie1,"Ciudadano",false);
		video.assignActor(persona,movie2,"Cuidadano",true);
		video.assignActor(persona4,movie,"Extra",false);
		video.assignActor(persona4,movie3,"Ciudadano",false);
		video.assignActor(persona5,movie4,"Ciudadano",false);
		video.assignActor(persona5,movie5,"Ciudadano",false);
		video.assignActor(persona5,movie6,"Ciudadano",false);
		video.assignActor(persona7,movie5,"Ciudadano",false);
		video.assignActor(persona7,movie6,"Ciudadano",false);
		video.assignActor(persona2,movie1,"Lara Croft",true);
		video.assignActor(persona1,serie3,"Ciudadano",false);
	} catch (error) {
		console.log("" + error);
	}
}//Fin de initPopulate

//Carga las tarjetas de la pagina de inicio con las categorias
function showHomePage(){
	//Selecciona el titulo central y le cambia el nombre
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.removeAttribute("class");
	tituloContenido.innerHTML = "Categorias del sistema";

	//Selecciona la zona central donde van las tarjetas de las categorias
	var tarjetas = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (tarjetas.firstChild) {
		tarjetas.removeChild(tarjetas.firstChild);
	}

	//Con un iterador recorremos todas las categorias del sistema
	video = VideoSystem.getInstance();
	var categorias = video.categories; 
	var categoria = categorias.next();

	while (categoria.done !== true){
		//Crea las card de la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img-top");

		/* FOTO DE LAS TARJETAS */ 
		imagen.setAttribute("src","img/"+categoria.value.name+".png");
		imagen.setAttribute("alt",categoria.value.name);
		var button = document.createElement("button");

		//ID que sirve para recoger la categoria pulsada en el evento
		button.setAttribute("id","botonCategoria");
		button.setAttribute("type","button");
		button.setAttribute("value",categoria.value.name);
		button.setAttribute("class","btn btn-link btn-lg btn-block");
		button.appendChild(document.createTextNode(categoria.value.name));	
		var descripCategory = document.createElement("p");
		descripCategory.setAttribute("class","card-text");

		/* DESCRIPCION DE LAS TARJETAS */ 
		descripCategory.appendChild(document.createTextNode(categoria.value.description));
		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");

		/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		tarjetas.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(button);
		cuerpo.appendChild(descripCategory);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);
	
		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		button.addEventListener("click", showProductions);

        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

}//Fin de categoriesMenuPopulate

//Carga el menu lateral con las categorias
function categoriesMenuPopulate(){
	//Selecciona el menu lateral donde van a ir las categorias del sistema
	var menu = document.getElementById("columnaCategorias").getElementsByClassName("list-group")[0];

	while (menu.firstChild) {
		menu.removeChild(menu.firstChild);
	}

	//Con un iterador recorremos todas las categorias del sistema
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();

	while (categoria.done !== true){
		//Crea las opciones
		var enlace = document.createElement("button");
		enlace.setAttribute("class","list-group-item btn btn-link");
		enlace.setAttribute("value",categoria.value.name);
		enlace.appendChild(document.createTextNode(categoria.value.name));
		enlace.addEventListener("click", showProductions);
		menu.appendChild(enlace);
		
        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

	var enlace = document.createElement("button");
	enlace.setAttribute("class","mt-4 list-group-item btn btn-link");
	enlace.setAttribute("id","ocultarCerrarVenta");
	enlace.appendChild(document.createTextNode("Cerrar ventanas"));
	enlace.addEventListener("click", cerrarVentanas);
	menu.appendChild(enlace);

}//Fin de showHomePage

//Muestra un listado con los actores del sistema.
function showActors(){
	//Selecciona el titulo central y le cambia el nombre
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.removeAttribute("class");
	tituloContenido.innerHTML = "Actores del sistema";

	//Selecciona la zona central donde van las tarjetas de las categorias
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER TODOS LOS ACTORES DEL SISTEMA
	video = VideoSystem.getInstance();
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		//Crea las tarjetas de las producciones en la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img");
		imagen.setAttribute("width","220");
		imagen.setAttribute("heigh","272");

		/* FOTO DE LAS TARJETAS */ 
		imagen.setAttribute("src","img/"+actor.value.name+" "+actor.value.lastname1+".png");
		imagen.setAttribute("alt",actor.value.name);
		var button = document.createElement("button");

		//ID que sirve para recoger la produccion pulsada en el evento
		button.setAttribute("id","botonActor");
		button.setAttribute("type","button");
		var nombre = actor.value.name+" "+actor.value.lastname1;
		button.setAttribute("value",nombre);
		button.setAttribute("class","btn btn-link btn-lg btn-block");
		button.appendChild(document.createTextNode(nombre));	

		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");

		/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		contenido.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(button);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);
	
		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		button.addEventListener("click", showActor);
		//imagen.addEventListener("click", showActor);			

		//Pasa al siguiente actor
		actor = actores.next();
	}//Fin del while

}//Fin de showActors

//Muestra un listado con los directores del sistema.
function showDirectors(){
	//Cambia el titulo de la pagina principal
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.removeAttribute("class");
	tituloContenido.innerHTML = "Directores del sistema";

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER TODOS LOS ACTORES DEL SISTEMA
	video = VideoSystem.getInstance();
	var directores = video.directors;
	var director = directores.next();
	while (director.done !== true){
		//Crea las tarjetas de las producciones en la zona central
		var tarjeta = document.createElement("div");
		tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
		var borde = document.createElement("div");
		borde.setAttribute("class","card h-100");
		var cuerpo = document.createElement("div");
		cuerpo.setAttribute("class","card-body");
		var imagen = document.createElement("img");
		imagen.setAttribute("class","card-img");
		imagen.setAttribute("width","750");
		imagen.setAttribute("heigh","200");

		/* FOTO DE LAS TARJETAS */ 
		imagen.setAttribute("src","img/"+director.value.name +".png");
		imagen.setAttribute("alt",director.value.name);
		var button = document.createElement("button");

		//ID que sirve para recoger la produccion pulsada en el evento
		button.setAttribute("id","botonDirector");
		button.setAttribute("type","button");
		var nombre = director.value.name+" "+director.value.lastname1;

		if (director.value.lastName2 != null) {
			nombre += " " + director.value.lastname2
		}

		button.setAttribute("value",nombre);
		button.setAttribute("class","btn btn-link btn-lg btn-block");
		button.appendChild(document.createTextNode(nombre));	
		var valoracion = document.createElement("div");
		valoracion.setAttribute("class","card-footer");
		var estrellas = document.createElement("small");
		estrellas.setAttribute("class","text-muted");

		/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
		estrellas.appendChild(document.createTextNode('Valoracion'));
		
		//Se crea la estructura de las tarjetas con appendChild
		contenido.appendChild(tarjeta);
		tarjeta.appendChild(borde);
		borde.appendChild(cuerpo);
		cuerpo.appendChild(imagen);
		cuerpo.appendChild(button);
		cuerpo.appendChild(valoracion);
		valoracion.appendChild(estrellas);

		//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
		button.addEventListener("click", showDirector);
		//imagen.addEventListener("click", showDirector);			

		//Pasa al siguiente actor
		director = directores.next();
	}//Fin del while
}//Fin de ShowDirectors

//Dado un actor muestra toda su información relacionada, incluida sus producciones.
function showActor(){
	//Quita el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.removeAttribute("class");
	tituloContenido.innerHTML = this.value;

	var buttonAtras = document.createElement("button");
	buttonAtras.setAttribute("id","volverAtras");
	buttonAtras.setAttribute("type","button");
	buttonAtras.setAttribute("class","btn btn-primary");
	buttonAtras.appendChild(document.createTextNode("Volver atrás"));

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");
	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	var encontrado = false;
	var actores = video.actors;
	var actor = actores.next();
	while ((actor.done !== true) && (!encontrado)){
		//Si coincide el name, lastName1 y lastName2 con el this.value es el actor seleccionado
		var nombreCompleto = actor.value.name +" "+ actor.value.lastname1;

		if (nombreCompleto == this.value){
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");

			/* FOTO DE LAS TARJETAS */ 
			imagen.setAttribute("src","img/"+nombreCompleto+"1.png");
			imagen.setAttribute("alt",actor.value.name);

			/*NACIONALIDAD DEL ACTOR */
			var nombre = document.createElement("p");
			nombre.setAttribute("class","card-text cajaTitulo");
			nombre.appendChild(document.createTextNode("Nombre: " + nombreCompleto));

			/* FECHA DE NACIMIENTO DEL ACTOR */
			var nacimiento = document.createElement("p");
			nacimiento.setAttribute("class","card-text cajaTitulo");
			nacimiento.appendChild(document.createTextNode("Fecha de nacimiento: " + actor.value.born.toLocaleDateString()));	
			
			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(tarjeta);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);	
			cuerpo.appendChild(nombre);
			cuerpo.appendChild(nacimiento);
			contenido.appendChild(buttonAtras);

			buttonAtras.addEventListener("click", showActors);

			var film = document.createElement("h4");
			film.setAttribute("class","card-text");
			film.appendChild(document.createTextNode("Producciones en las que ha participado: "));
			cuerpo.appendChild(film);
			var union = document.createElement("div");
			union.setAttribute("class","row");
			cuerpo.appendChild(union);

			//Muestra las producciones en las que esta asignado el actor
			var productions = video.getProductionsActor(actor.value);
			var production = productions.next();
			
			while (production.done !== true){
				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
				var borde = document.createElement("div");
				borde.setAttribute("class","card h-100");
				var cuerpo1 = document.createElement("div");
				cuerpo1.setAttribute("class","card-body");
				var imagen = document.createElement("img");
				imagen.setAttribute("class","card-img-top");
				imagen.setAttribute("width","750");
				imagen.setAttribute("heigh","200");

				/* FOTO DE LAS TARJETAS */ 
				imagen.setAttribute("src","img/"+production.value.title+" poster.png");
				imagen.setAttribute("alt",production.value.title);
				
				var button = document.createElement("button");

				//ID que sirve para recoger la produccion pulsada en el evento
				button.setAttribute("id",this.value);
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(production.value.title));	
				button.addEventListener("click", showProduction);

				var valoracion = document.createElement("div");
				valoracion.setAttribute("class","card-footer");
				var estrellas = document.createElement("small");
				estrellas.setAttribute("class","text-muted");
				
				/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
				estrellas.appendChild(document.createTextNode("Papel: "+production.papel));
	
				//Se crea la estructura de las tarjetas con appendChild
				union.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo1);
				cuerpo1.appendChild(imagen);
				cuerpo1.appendChild(button);
				cuerpo1.appendChild(valoracion);
				valoracion.appendChild(estrellas);
				
				//Pasa a la siguiente produccion del actor
				production = productions.next();
			}//Fin del while iterador de producciones de un actor

			encontrado = true;
		}//Fin del if principal del while
		//Pasamos al siguiente actor
		actor = actores.next();
	}//Fin del while iterador de actores
}//Fin de showActor

//Dado un director, muestra toda su información relacionada, incluida sus producciones
function showDirector(){
	//Quita el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.removeAttribute("class");
	tituloContenido.innerHTML = this.value;

	var buttonAtras = document.createElement("button");
	buttonAtras.setAttribute("id","volverAtras");
	buttonAtras.setAttribute("type","button");
	buttonAtras.setAttribute("class","btn btn-primary");
	buttonAtras.appendChild(document.createTextNode("Volver atrás"));

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	var encontrado = false;
	var directores = video.directors;
	var director = directores.next();
	while ((director.done !== true) && (!encontrado)){
		//Si coincide el name, lastName1 y lastName2 con el this.value es el actor seleccionado
		var nombreCompleto = director.value.name +" "+ director.value.lastname1;

		if (director.value.lastName2 != null) {
			nombreCompleto += " " + director.value.lastname2
		}

		if (nombreCompleto == this.value){
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");

			/* FOTO DE LAS TARJETAS */ 
			imagen.setAttribute("src","img/"+director.value.name+"1.png");
			imagen.setAttribute("alt",director.value.name);

			/* NACIONALIDAD DEL ACTOR */
			var nombre = document.createElement("p");
			nombre.setAttribute("class","card-text cajaTitulo");
			nombre.appendChild(document.createTextNode("Nombre:"));
			var descripcion = document.createElement("p");
			descripcion.setAttribute("class","card-text cajaDescripcion");
			descripcion.appendChild(document.createTextNode(nombreCompleto));

			/* FECHA DE NACIMIENTO DEL DIRECTOR */
			var nacimiento = document.createElement("p");
			nacimiento.setAttribute("class","card-text cajaTitulo");
			nacimiento.appendChild(document.createTextNode("Fecha de nacimiento:"));
			var nacimientoDescript = document.createElement("p");
			nacimientoDescript.setAttribute("class","card-text cajaDescripcion");
			nacimientoDescript.appendChild(document.createTextNode(director.value.born.toLocaleDateString()));			
			
			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(tarjeta);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);	
			cuerpo.appendChild(nombre);
			cuerpo.appendChild(descripcion);
			cuerpo.appendChild(nacimiento);
			cuerpo.appendChild(nacimientoDescript);
			contenido.appendChild(buttonAtras);

			buttonAtras.addEventListener("click", showDirectors);

			var film = document.createElement("h4");
			film.setAttribute("class","card-text");
			film.appendChild(document.createTextNode("Producciones en las que ha participado: "));
			cuerpo.appendChild(film);
			var union = document.createElement("div");
			union.setAttribute("class","row");
			cuerpo.appendChild(union);

			//Muestra las producciones en las que esta asignado el actor
			var productions = video.getProductionsDirector(director.value);
			var production = productions.next();

			while (production.done !== true){
				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
				var borde = document.createElement("div");
				borde.setAttribute("class","card h-100");
				var cuerpo1 = document.createElement("div");
				cuerpo1.setAttribute("class","card-body");
				var imagen = document.createElement("img");
				imagen.setAttribute("class","card-img-top");
				imagen.setAttribute("width","750");
				imagen.setAttribute("heigh","200");

				/* FOTO DE LAS TARJETAS */ 
				imagen.setAttribute("src","img/"+production.value.title+" poster.png");
				imagen.setAttribute("alt",production.value.title);
				
				var button = document.createElement("button");

				//ID que sirve para recoger la produccion pulsada en el evento
				button.setAttribute("id","1 " + this.value);
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(production.value.title));	
				button.addEventListener("click", showProduction);

				var valoracion = document.createElement("div");
				valoracion.setAttribute("class","card-footer");
				var estrellas = document.createElement("small");
				estrellas.setAttribute("class","text-muted");
				
				/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
				estrellas.appendChild(document.createTextNode("Papel:"));
	
				//Se crea la estructura de las tarjetas con appendChild
				union.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo1);
				cuerpo1.appendChild(imagen);
				cuerpo1.appendChild(button);
				cuerpo1.appendChild(valoracion);
				valoracion.appendChild(estrellas);
				
				//Pasa a la siguiente produccion del actor
				production = productions.next();
			}//Fin del while iterador de producciones de un actor

			encontrado = true;
		}//Fin del if principal del while
		//Pasamos al siguiente director
		director = directores.next();
	}//Fin del while iterador de directores
}//Fin de ShowDirector

//Dado una categoría, director o actor, muestra el listado de sus producciones.
function showProductions(){
	//Cambia el titulo de la pagina principal
	var tituloContenido = document.getElementById("tituloZona");

	//El valor this.value lo recoge del valor del boton que hayamos pulsado
	tituloContenido.removeAttribute("class");
	tituloContenido.innerHTML = this.value;

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LAS PRODUCCIONES DE UNA CATEGORIA
	var encontrado = false;
	video = VideoSystem.getInstance();
	var categorias = video.categories;
	var categoria = categorias.next();

	while ((categoria.done !== true) && (!encontrado)){
		if (categoria.value.name == this.value) {
			//Si coincide nombre de la categoria con el valor del boton
			//Comienza el iterador de las producciones de esa categoria
			var productions = video.getProductionsCategory(categoria.value);
			var production = productions.next();

			while (production.done !== true){
				//Crea las tarjetas de las producciones en la zona central
				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
				var borde = document.createElement("div");
				borde.setAttribute("class","card h-100");
				var cuerpo = document.createElement("div");
				cuerpo.setAttribute("class","card-body");
				var imagen = document.createElement("img");
				imagen.setAttribute("class","card-img-top");
				var tipo = document.createElement("span");
				tipo.setAttribute("class","badge");

				if(production.value instanceof Movie){
					tipo.appendChild(document.createTextNode("Pelicula"));
				}else{
					tipo.appendChild(document.createTextNode("Serie"));
				}
	
				imagen.setAttribute("width","750");
				imagen.setAttribute("heigh","200");

				/* FOTO DE LAS TARJETAS */ 
				imagen.setAttribute("src","img/"+production.value.title+".png");
				imagen.setAttribute("alt",production.value.title);
				var button = document.createElement("button");

				//ID que sirve para recoger la produccion pulsada en el evento
				button.setAttribute("id",this.value);
				button.setAttribute("type","button");
				button.setAttribute("value",production.value.title);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(production.value.title));	
				var descripProduction = document.createElement("p");
				descripProduction.setAttribute("class","card-text");

				/* DESCRIPCION DE LAS TARJETAS */ 
				descripProduction.appendChild(document.createTextNode(production.value.synopsis));
				var valoracion = document.createElement("div");
				valoracion.setAttribute("class","card-footer");
				var estrellas = document.createElement("small");
				estrellas.setAttribute("class","text-muted");

				/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
				estrellas.appendChild(document.createTextNode('Valoracion'));
				
				//Se crea la estructura de las tarjetas con appendChild
				contenido.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo);
				cuerpo.appendChild(imagen);
				cuerpo.appendChild(button);
				button.appendChild(tipo);
				cuerpo.appendChild(descripProduction);
				cuerpo.appendChild(valoracion);
				valoracion.appendChild(estrellas);
			
				//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
				button.addEventListener("click", showProduction);
				//imagen.addEventListener("click", showProduction);	

				production = productions.next();
			}//fin del while iterador

			//Variable para salir del bucle principal si encuentra la categoria
			encontrado = true;
		}//Fin del if que compara el nombre de la categoria con el valor del boton
		
        //Pasa a la siguiente categoria
		categoria = categorias.next();
	}//FIn del while iterador

}//Fin de showProductions

//Muestra la información de una producción, incluida su director y sus actores participantes.
function showProduction(){
	//Cambia el titulo de la zona
	var tituloContenido = document.getElementById("tituloZona");
	tituloContenido.setAttribute("class","ocultar");
	
	var categoria = this.getAttribute("id");
	var entrar = false;

	//Con este metodo comprobamos si el boton atras debe volver a directores
	if(categoria.substring(0, 1) == "1"){ 
		categoria = categoria.replace("1 ","");
		entrar = true;
	}

	var buttonAtras = document.createElement("button");

	buttonAtras.setAttribute("id","volverAtras");
	buttonAtras.setAttribute("type","button");
	buttonAtras.setAttribute("value",categoria);
	buttonAtras.setAttribute("class","btn btn-primary");
	buttonAtras.appendChild(document.createTextNode("Volver atrás"));

	//Se selecciona la zona donde va a ir el nuevo contenido
	var contenido = document.getElementById("tarjetasZona");

	//QUITA TODO EL CONTENIDO QUE HAYA EN LA VARIABLE CONTENIDO
	while (contenido.firstChild) {
		contenido.removeChild(contenido.firstChild);
	}

	//SE PONE EL NUEVO CONTENIDO QUE TIENE QUE SER LA PRODUCCION SELECCIONADA
	var encontrado = false;
	var producciones = video.productions;
	var produccion = producciones.next();

	while ((produccion.done !== true) && (!encontrado)){
		if (produccion.value.title == this.value) {
			//Si coincide nombre de la produccion con el valor del boton muestra la informacion
			//Crea las tarjetas de las producciones en la zona central
			var tarjeta = document.createElement("div");
			tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
			var borde = document.createElement("div");
			borde.setAttribute("class","card h-100");
			var cuerpo = document.createElement("div");
			cuerpo.setAttribute("class","card-body");
			var titulo = document.createElement("h1");
			titulo.setAttribute("class","mx-auto");
			titulo.setAttribute("id","tituloProduccion")
			titulo.appendChild(document.createTextNode(produccion.value.title));
			var imagen = document.createElement("img");
			imagen.setAttribute("class","card-img");
			imagen.setAttribute("width","750");
			imagen.setAttribute("heigh","200");

			/* FOTO DE LAS TARJETAS */ 
			imagen.setAttribute("src","img/"+produccion.value.title+".png");
			imagen.setAttribute("alt",produccion.value.title);
			var nationality = document.createElement("p");
			nationality.setAttribute("class","card-text");

			/* NACIONALIDAD DE LA PRODUCCION */ 
			nationality.appendChild(document.createTextNode("Nacionalidad: " + produccion.value.nationality));
			var publication = document.createElement("p");
			publication.setAttribute("class","card-text");

			/* FECHA DE LA PRODUCCION */ 
			publication.appendChild(document.createTextNode("Fecha de publicacion: " + produccion.value.publication.toLocaleDateString()));
			var synopsis = document.createElement("p");
			synopsis.setAttribute("class","card-text");

			/* SIPNOSIS DE LA PRODUCCION */ 
			synopsis.appendChild(document.createTextNode("Sipnosis: " + produccion.value.synopsis));

			//Muestra el boton que abre una ventana nueva para mostrar los recursos
			var recurso = document.createElement("button");
			recurso.setAttribute("value",produccion.value.title);
			recurso.setAttribute("class","btn btn-link btn-lg btn-block");
			recurso.appendChild(document.createTextNode("Mostrar recursos")); 
			recurso.addEventListener("click", abrirVentana);

			//Se crea la estructura de las tarjetas con appendChild
			contenido.appendChild(titulo);	
			contenido.appendChild(tarjeta);
			contenido.appendChild(buttonAtras);
			tarjeta.appendChild(borde);
			borde.appendChild(cuerpo);
			cuerpo.appendChild(imagen);	
			cuerpo.appendChild(nationality);
			cuerpo.appendChild(publication);
			cuerpo.appendChild(synopsis);
			cuerpo.appendChild(recurso);


			//Todo este bloque de codigo es para saber el boton atras donde debe volver
			if(entrar){
				buttonAtras.addEventListener("click", showDirector);
			}else{
				if(categoria == "Comedia" || categoria == "Romance" || categoria == "Terror" 
				|| categoria == "Acción" || categoria == "Ciencia Ficción" || categoria == "Drama"
				|| categoria == "Fantasía" || categoria == "Musical" || categoria == "Animacion"){

					buttonAtras.addEventListener("click", showProductions);
				}else{
					buttonAtras.addEventListener("click", showActor);
				}
			}

			var union = document.createElement("div");
			union.setAttribute("class","row");
			cuerpo.appendChild(union);

			//Para mostrar los actores de la produccion necesitamos otro iterador
			var elenco = video.getCast(produccion.value);
			var actor = elenco.next();
			while (actor.done !== true){
				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
				var borde = document.createElement("div");
				borde.setAttribute("class","card h-100");
				var cuerpo = document.createElement("div");
				cuerpo.setAttribute("class","card-body");
				var tipo = document.createElement("h5");
				tipo.setAttribute("class","mx-auto text-center");
				tipo.setAttribute("id", "actorDirector");
				tipo.appendChild(document.createTextNode("Actor"));
				var imagen = document.createElement("img");
				imagen.setAttribute("class","card-img");
				imagen.setAttribute("width","220");
				imagen.setAttribute("heigh","272");

				/* FOTO DE LAS TARJETAS */ 
				imagen.setAttribute("src","img/"+actor.value.name+" "+actor.value.lastname1+".png");
				imagen.setAttribute("alt",actor.value.name);
				var button = document.createElement("button");

				//ID que sirve para recoger la produccion pulsada en el evento
				button.setAttribute("id","botonActor");
				button.setAttribute("type","button");
				var nombre = actor.value.name+" "+actor.value.lastname1;
				button.setAttribute("value",nombre);
				button.setAttribute("class","btn btn-link btn-lg btn-block");
				button.appendChild(document.createTextNode(nombre));	

				var valoracion = document.createElement("div");
				valoracion.setAttribute("class","card-footer");
				var estrellas = document.createElement("small");
				estrellas.setAttribute("class","text-muted");

				/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
				estrellas.appendChild(document.createTextNode('Papel: '+actor.papel));
				
				//Se crea la estructura de las tarjetas con appendChild
				union.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo);
				cuerpo.appendChild(imagen);
				cuerpo.appendChild(tipo);
				cuerpo.appendChild(button);
				cuerpo.appendChild(valoracion);
				valoracion.appendChild(estrellas);
			
				//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
				button.addEventListener("click", showActor);
				//imagen.addEventListener("click", showActor);			

				//Pasa al siguiente actor
				actor = elenco.next();
			}

			var encontrado = false;
			var directores = video.directors;
			var director = directores.next();
			while ((director.done !== true) && (!encontrado)){
				var productions = video.getProductionsDirector(director.value);
				var production = productions.next();

				while(production.done !== true){
					if(production.value.title === this.value){
						var tarjeta = document.createElement("div");
						tarjeta.setAttribute("class","col-lg-4 col-md-6 mb-4");
						var borde = document.createElement("div");
						borde.setAttribute("class","card h-100");
						var cuerpo = document.createElement("div");
						cuerpo.setAttribute("class","card-body");
						var tipo = document.createElement("h5");
						tipo.setAttribute("class","mx-auto text-center");
						tipo.setAttribute("id", "actorDirector");
						tipo.appendChild(document.createTextNode("Director"));
						var imagen = document.createElement("img");
						imagen.setAttribute("class","card-img");
						imagen.setAttribute("width","220");
						imagen.setAttribute("heigh","272");

						/* FOTO DE LAS TARJETAS */ 
						imagen.setAttribute("src","img/"+director.value.name+".png");
						imagen.setAttribute("alt",director.value.name);
						var button = document.createElement("button");

						//ID que sirve para recoger la produccion pulsada en el evento
						button.setAttribute("id","botonDirector");
						button.setAttribute("type","button");
						var nombre = director.value.name+" "+director.value.lastname1;
						button.setAttribute("value",nombre);
						button.setAttribute("class","btn btn-link btn-lg btn-block");
						button.appendChild(document.createTextNode(nombre));	

						var valoracion = document.createElement("div");
						valoracion.setAttribute("class","card-footer");
						var estrellas = document.createElement("small");
						estrellas.setAttribute("class","text-muted");

						/* ESTRELLAS QUE SE MUESTRAN EN LAS TARJETAS */ 
						estrellas.appendChild(document.createTextNode('Valoracion'));
						
						//Se crea la estructura de las tarjetas con appendChild
						union.appendChild(tarjeta);
						tarjeta.appendChild(borde);
						borde.appendChild(cuerpo);
						cuerpo.appendChild(imagen);
						cuerpo.appendChild(tipo);
						cuerpo.appendChild(button);
						cuerpo.appendChild(valoracion);
						valoracion.appendChild(estrellas);
					
						//Añade eventos al hacer click sobre la imagen o sobre el nombre de la categoria
						button.addEventListener("click", showDirector);
						//imagen.addEventListener("click", showActor);		
					}
					production = productions.next();
				}
				director = directores.next();
			}

			encontrado = true;
		}//Fin del if
		//Pasa a la siguiente produccion
		produccion = producciones.next();
	}//Fin del while iterador
}//Fin de showProduction

/*function entrarEnPagina(){
	AQUI VA EL INITPOPULATE
	control = setInterval(salida,100);
}

function salida(){
	var desaparecer = document.getElementById("Principal");
	var aparecer = document.getElementById("Secundario");

	AQUI VAN TODOS LOS METODOS QUE NO SEA CREARBBDD

	desaparecer.setAttribute("class","d-none");
	aparecer.removeAttribute("class");

	clearInterval(control);
}*/

//Funcion que llama a todas las funciones que necesita el sistema
function init(){
	crearBBDD();
	initPopulate();
	showHomePage();
	crearBoton();
	comprobarSesion();
	categoriesMenuPopulate();
}

window.onload = init;