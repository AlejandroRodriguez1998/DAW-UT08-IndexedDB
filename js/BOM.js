
//Crea una ventana
function crearVentana(nombre){
	var ventanaNueva = window.open("Recurso.html",nombre,"toolbar=yes,scrollbars=yes,resizable=yes,width=640,height=670");
	ventanas.push(ventanaNueva);
}//Fin de crearVentana

var ventanas = [];

//Abre una nueva ventana
function abrirVentana(){
	var index = 0;
	var encontrada = false;
	//Si es la primera vez que se ejecuta la funcion crea directamente la ventana
	if(ventanas[0] == undefined){
		crearVentana(this.value);
	}else{
		while ((index < ventanas.length) || encontrada) {
			if (ventanas[index] && !ventanas[index].closed && ventanas[index] == this.value){
				//Si la ventana no esta cerrada, esta creada y ya tiene ese nombre
				encontrada = true;
			}
			index++;
		}

		if (encontrada) {
			ventanas[index].focus();
		}else{
			crearVentana(this.value);
		}
	}

}//Fin de abrir ventana

//Cierra las ventanas abiertas
function cerrarVentanas(){
	for (let index = 0; index < ventanas.length; index++) {
		//Si la ventana no esta cerrada la cierra
		if (!ventanas[index].closed) {
			ventanas[index].close();	
		}
	}
}//FIn de cerrarVentanas

//Muestra los recursos relacionados con una producción en una nueva ventana
//Esta funcion se ejecuta al cargar la ventana
function showResource(){
	//Se recoge el titulo de la produccion
	var tituloProduccion = document.getElementById("tituloProduccion");
	
	//Se recorre el array de ventanas 
	for (let index = 0; index < ventanas.length; index++) {
		//Si el titulo es igual a la ventana que haya en el array
		if (ventanas[index].name == tituloProduccion.textContent) {
			//Selecciona la zona de la ventana nueva
			var ventana = ventanas[index];
		}
	}

	var contenidoVentana = ventana.document.getElementById("contenidoZona");
	//Cambia el titulo de la ventana
	ventana.document.title = "Recursos de " + tituloProduccion.textContent;

	var encontrado = false;
	var producciones = video.productions;
	var produccion = producciones.next();
	while ((produccion.done !== true) && (!encontrado)){
		//Compara el titulo de la produccion del iterador con el titulo que hay en el h2 de la tarjeta
		if (produccion.value.title == tituloProduccion.textContent) {
			//Si la produccion es una movie tendra unos parametros distintos a las series

				var tarjeta = document.createElement("div");
				tarjeta.setAttribute("class","col-lg-12 col-md-12 mb-4");
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
				imagen.setAttribute("width","50");
				imagen.setAttribute("heigh","50");

				/* FOTO DE LAS TARJETAS */ 
				imagen.setAttribute("src","img/" + produccion.value.title + ".png");
				imagen.setAttribute("alt",produccion.value.title);

				//Pinta todo en la nueva ventana
				var tituloProdu = ventana.document.getElementById("tituloZona");
				tituloProdu.setAttribute("class","mx-auto text-center");
				tituloProdu.innerHTML = tituloProduccion.textContent;

				contenidoVentana.appendChild(tarjeta);
				tarjeta.appendChild(borde);
				borde.appendChild(cuerpo);
				cuerpo.appendChild(imagen);

			if(produccion.value instanceof Movie){
				//Si es distinto de null pone el recurso de la produccion
				if(produccion.value.resource != null){
					var resource = document.createElement("p");
					resource.setAttribute("class","card-text");

					/* SIPNOSIS DE LA PRODUCCION */ 
					resource.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));
					cuerpo.appendChild(resource);
				}
				//Si es distinto de null pone la localizacion de la produccion
				if(produccion.value.locations != null){
					var locations = document.createElement("p");
					locations.setAttribute("class","card-text");

					/* SIPNOSIS DE LA PRODUCCION */ 
					locations.appendChild(document.createTextNode("Localizacion: " + produccion.value.locations));
					cuerpo.appendChild(locations);
				}
			}//Fin del instanceof

			if(produccion.value.seasons != null){
				//Si tiene temporadas las muestra
				
				for (let index = 0; index < produccion.value.seasons.length; index++) {
					var season = document.createElement("p");
					season.setAttribute("class","cajaTitulo");
					season.appendChild(document.createTextNode("Temporada "+(index+1)+":"));
					
					cuerpo.appendChild(season);

					for(let indexArray = 0; indexArray < produccion.value.seasons[index].episodes.length; indexArray++){
						var episodio = document.createElement("p");
						episodio.setAttribute("class","cajaDescripcion");
						
						var concatenar = produccion.value.seasons[index].episodes[indexArray].title + ": " 
						+ produccion.value.seasons[index].episodes[indexArray].episode + " ";

						for(let indexCoor = 0; indexCoor < produccion.value.seasons[index].episodes[indexArray].scenarios.length; indexCoor++){
							concatenar += produccion.value.seasons[index].episodes[indexArray].scenarios[indexCoor] + " ";
						}

						episodio.appendChild(document.createTextNode(concatenar));
						cuerpo.appendChild(episodio);
					}
				}
			}
		}//Fin del if
		produccion = producciones.next();
	}//Fin del while
}//Fin de showResource