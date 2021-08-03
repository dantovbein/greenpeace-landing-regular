/*** 
Barrita.js
Autor: ALfredo Villafañe (avillafane@soulitsolutions.com) - SoulIT (www.soulitsolutions.com)
Version: 1.0

Forma de implementación:
-----------------------
En el HTML:
1) Agregar las referencias a barrita.js y barrita .css, por ej:
	<link rel="stylesheet" href="barrita/barrita.css" type="text/css" media="screen" />
	<script src="barrita/barrita.js"></script>  
	
2) Agregar un div con id igual a lo definido abajo en elementId. Por defecto, "barrita"

3) Al div anterior agregarle el atributo data-firmas con el valor de firmas totales hasta el momento.

4) Serciorarse que el tamaño de las imagenes en images sea igual al tamaño que el elemento contenedor de barrita.

Mejoras pendientes:
	- Hacer que la imagen no sea entera sino con un repeat de un pixel.
	- Generalizar el nombre de las variables y de la ayuda para que no este sólo contextualizado a firmas
	- Testear si funciona de forma responsive
	- Permitir customizar tipo y tamaño de fuente de los textos
	- Permitir aplicar temas personalizados
 
***/

////////// Comienzo opciones de personalización:
	
	// Meta (cantidad de firmas totales a las que se quiere llegar)
	var meta = 	125000;
	
	//	Cantidad de firmas iniciales 
	var firmasIniciales = 1;	

	// Textos
	var sumate = 'SUMATE AL PEDIDO';
	var nuestraMeta = 'NUESTRA META';
	var donaciones = 'DONACIONES';
	var donacionesHastaAhora = 'YA FIRMARON!';
	var faltan = 'FALTAN';
	var donacionesParaLlegar = 'DONACIONES PARA LLEGAR';
	
	// Oculta la línea de arriba de textos
	var ocultaTextosSuperiores = true;
	
	// Color textos
	var colorSumate = '#53af06';	
	var colorMeta = '#c0c0c0';
	var colorDonacionesHastaAhora = '#fff';
	var colorDonacionesParaLlegar =  '#fff';
	
	// Id del elemento de la barrita
	var elementId = "barrita";
	
	//Intervalo de px con los que avanza la barra
	var intervalPx = 2;	
	
	// Delay en milisegundos del avance
	var milisecsDelay = 1;
	
////////// Fin opciones de personalización	
	
	
	
	// Inicialización variables
	var aux = 0;
	var aux2 = 0;	
	var counterNumber = firmasIniciales;
	var progressTotalWidthPx = 0;
	var realProgressPx = 0;
	var intervalNumber = 0;	
	
	window.onload = function() {iniciar()};
	
	function inicializar(firmas){			
		counterNumber +=firmas;
		progressTotalWidthPx = document.getElementById(elementId).clientWidth;
		if (meta != 0){ realProgressPx = counterNumber * progressTotalWidthPx / meta}
		intervalNumber = counterNumber/(realProgressPx / intervalPx); 		
		document.getElementById("barrita_sumate").innerHTML = sumate;
		document.getElementById("barrita_meta").innerHTML = nuestraMeta + ": " + TS(meta) + ' ' + donaciones;
	}
	
	function displayHTML(){				
		var dsp = ocultaTextosSuperiores?'none':'';
		var barrita_html = '';
		barrita_html += '<div class="contenedor_bar">';
		barrita_html += '	<div style="display:'+ dsp +'">';
		barrita_html += '		<div id="barrita_sumate" class="sumate" style="color:'+ colorSumate +' !important"></div>';
		barrita_html += '		<div id="barrita_meta" class="meta" style="color:'+ colorMeta +' !important"></div>';
		barrita_html += '	</div>';
		barrita_html += '	<div class="clear"></div>';
		barrita_html += '	<div class="barrita">';
		barrita_html += '		<div class="ruler"></div>';
		barrita_html += '		<div class="div_progress"><img class="progress" id="progress" src="assets/barrita/images/progress_green.png" /></div>';
		barrita_html += '		<div id="counterNumber" class="counterNumber" style="color:'+ colorDonacionesHastaAhora +' !important">&nbsp;</div>';
	//	barrita_html += '		<div id="deCounterNumber" class="deCounterNumber" style="color:'+ colorDonacionesParaLlegar +' !important">&nbsp;</div>';
		barrita_html += '	</div>';
		barrita_html += '	<div class="clear"></div>';
		barrita_html += '</div>';
		document.getElementById(elementId).innerHTML = barrita_html;
	}
	
	function displayProgress(){			
		if(aux < realProgressPx && aux <= progressTotalWidthPx){	
			aux +=intervalPx;
			if(aux > realProgressPx) aux = realProgressPx;
			document.getElementById("progress").style.width = aux + "px";
			setTimeout("displayProgress()",milisecsDelay );
		}
	}
	
	function displayNumber(){
		if(aux2 < counterNumber){
			aux2 +=intervalNumber;
			if(aux2 > counterNumber) aux2 = counterNumber;
			document.getElementById("counterNumber").innerHTML = '<div class="barrita-firmas">' + TS(Math.round(aux2)) + '</div> ' + donacionesHastaAhora;
		//	document.getElementById("deCounterNumber").innerHTML = faltan +' ' + TS(Math.round(meta - aux2)) + ' ' + donacionesParaLlegar;
			setTimeout("displayNumber()",milisecsDelay);
		}
	}
									
	function iniciar(){	
		displayHTML();
		var firmas = 0;
		firmas = parseInt(document.getElementById(elementId).getAttribute("data-firmas"));
		inicializar(firmas);
		displayProgress();
		displayNumber();
	}	
		
	function TS(v){
		var val = v.toString();
		var result = "";
		var len = val.length;
		while (len > 3){
			result = "."+val.substr(len-3,3)+result;
			len -=3;
		}
		return val.substr(0,len)+result;
	}	