
  /* VARIABLES PARA CUSTOMIZAR */
  var background = "assets/img/backgrounds/bg.jpg";
  var minValorMostrarRegalo = 10000;
  var minMontoPersonalizado = 4000;
  var valorDonacionDefault = 11000;  

	function searchValue(valor) {	    
		var ret = false;
    $('input[name=importe]').each(function() {
      if ($(this).val() == valor) ret = true;
    });
    return ret;
	}

	function setearDonacion(donacion){
      if(donacion != 0) {       
      	if(searchValue(donacion)){
					$("input[name=importe][value=" + donacion + "]").attr('checked', 'checked');
      	} else {
      		$("input[name=importe][value=0]").attr('checked', 'checked');
      		$("#monto").val(donacion);
      		$("#monto").show();     
      	}
    	} else {
 				$("input[name=importe][value=" + valorDonacionDefault + "]").attr('checked', 'checked');     
      }

	}

	function showHideRegalo(valor, montoTope){
	  if (valor >= montoTope){
	      $('#boxUnite').fadeIn();
	    } else {
	      $('#boxUnite').hide();
	    }
	  } 

	function showHideOtherCreditCards(obj){
	  if(obj.value == "Otras"){
	    $('#otras_tarjetas').fadeIn();
	  } else {
	    $('#otras_tarjetas').fadeOut();   
	  }
	}


	function setStateError(obj){
		var id = obj.id;	
		if (obj.parentNode.className.indexOf('form-group')!=-1) {
			obj.parentNode.className = "form-group has-error has-feedback";
		} else {
			obj.parentNode.parentNode.className = "form-group has-error has-feedback";
		}
		
		$('#span_' + id).removeClass();
		$('#span_' + id).addClass("glyphicon glyphicon-remove form-control-feedback");		
		$('#span_' + id).css("top", "2px"); 
		$( '#a_' + id ).attr("data-toggle", "tooltip");		
		$( '#a_' + id ).tooltip();
	
	}
	
	function setStateSuccess(obj){
		var id = obj.id;	
		if (obj.parentNode.className.indexOf('form-group')!=-1) {
			obj.parentNode.className = "form-group has-success has-feedback";
		} else {
			obj.parentNode.parentNode.className = "form-group has-success has-feedback";
		}
		$('#span_' + id).removeClass();		
		$('#span_' + id).addClass("glyphicon glyphicon-ok form-control-feedback");
		$('#span_' + id).css("top", "2px"); 		
		$('#a_' + id).tooltip('destroy');
	}
	
	function setStateDefault(obj){
		var id = obj.id;	
		if (obj.parentNode.className.indexOf('form-group')!=-1) {
			obj.parentNode.className = "form-group";
		} else {
			obj.parentNode.parentNode.className = "form-group";
		}
				
		$('#span_' + id).removeClass();
		$('#span_' + id).css("top", "2px"); 		
		$('#a_' + id).tooltip('destroy');	
	}

 	function check_email(str) {
			return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str));
	}
	
	function check_str_no_number(str) {
			return (!/\d/.test(str));
	}

	function validate_not_empty(obj){			
		if (obj.value == null || obj.value == '' || obj.value == obj.placeholder) {				
			setStateError(obj);
			return false;					
		} else {
			setStateSuccess(obj);
			return true;
		}
	}	
	
	function validate_email(obj){
		if (!check_email(obj.value) || obj.value == obj.placeholder) {
			setStateError(obj);			
			return false;				
		} else {
			setStateSuccess(obj);						
			return true;				
		}
	}

	function validate_option(name){
		var valorOp = $('input[name='+ name +']:checked').val();
		if (valorOp == undefined ){
			$('#p_'+ name).show();		
			return false;
		} else{
			$('#p_'+ name).hide();
			return true;
		}
	}

	function validate_number(obj, type){
		var id = obj.id;	
   	var div_error = document.getElementById('error_'+ id);
   		
	  if (!(obj.value == null || obj.value == '')){
      if(!(!isNaN(parseFloat(obj.value)) && isFinite(obj.value))){
      	$('#a_' + id).attr('data-original-title', 'El valor debe ser num??rico');
				setStateError(obj);	
        return false;	
      } else {
				setStateSuccess(obj);								
				return true;
			}
	  } else {
			if (type == 'empty'){
				setStateSuccess(obj);								
				return true;
			} else {
				setStateError(obj);	
				return false;				
			}
		}	
  }
	
	function validate_combo(obj){
		var id = obj.id;	
		
		if (obj.value == 0 || obj.value == '') {				
			setStateError(obj);	
			return false;		
			
		} else {				
			setStateSuccess(obj);
			return true;
				
		}
	}

	function validate_nro_tarjeta(obj){
		var id = obj.id;
		var is_number = validate_number(obj, 'not_empty');
		
		if (is_number){
			if (obj.value.length >= 13 && obj.value.length <= 16 ) {
				setStateSuccess(obj);
				return true;	
			} else { 				
				$('#a_' + id).attr('data-original-title', 'Nro. de Tarjeta inv??lido');
				setStateError(obj);	
				return false;				
			}
		}
	}
	
	function validate_nro_cuenta(obj){
		var id = obj.id;
		var is_number = validate_number(obj, 'not_empty');
		
		if (is_number){
			if (obj.value.length >= 4 && obj.value.length <= 24 ) {
				setStateSuccess(obj);
				return true;	
			} else { 				
				$('#a_' + id).attr('data-original-title', 'Nro. de Cuenta inv??lido');
				setStateError(obj);	
				return false;				
			}
		}
	}

	function validate_monto(obj, minMonto, minRegalo){
	  if (validate_number(obj,'not-empty')) {
	    if(obj.value < minMonto) {
        $('#a_' + obj.id).attr('data-original-title', 'Debe ingresar un monto no menor a $' + minMonto);
        setStateError(obj);
        return false;	
	    } else {
	      setStateSuccess(obj);
	      showHideRegalo(obj.value, minRegalo);  
	      return true;        
	    }
	  } 
	}
	
		
		
	function validate_form(){
		var ret_datos_personales = false;
		var ret_datos_tarjeta = false;
		var ret_datos_banco = false;

		//Validaciones datos personales
		var ret_monto = true;
		var valorImporte = $('input[name=importe]:checked').val();
		if (valorImporte == 0) ret_monto = validate_monto($("#monto")[0], minMontoPersonalizado, minValorMostrarRegalo);
		var ret_email = validate_email($("#email")[0]);
		var ret_nombre = validate_not_empty($("#nombre")[0]);
		var ret_apellido = validate_not_empty($("#apellido")[0]);
		var ret_rut = validate_number($("#rut")[0],'not-empty');
		/*var ret_genero = validate_combo($("#genero")[0]);*/
		var ret_dia = validate_combo($("#dia")[0]);
		var ret_mes = validate_combo($("#mes")[0]);
		var ret_anio = validate_combo($("#anio")[0]);
		var ret_pais = validate_combo($("#pais")[0]);
		/*var ret_region;*/
		/*var ret_comuna;*/

		if($('#pais').val() == 'Chile'){
			ret_region = validate_combo($("#region")[0]);
			ret_comuna = validate_combo($("#comuna")[0]);
		} else {
			ret_region = true;
			ret_comuna	= true;
		}

		/*var ret_direccion = validate_not_empty($("#direccion")[0]);*/
		var ret_celular = validate_number($("#celular")[0],'not-empty');

		if ( ret_monto && ret_nombre && ret_apellido && ret_email && ret_rut /*&& ret_genero*/ && ret_dia && ret_mes 
			&& ret_anio && ret_pais /*&& ret_region && ret_comuna && ret_direccion*/ && ret_celular){
			ret_datos_personales = true;
		}

		var valorMedioPago = $('input[name=medio_pago]:checked').val();
		if(valorMedioPago == 'Tarjeta Credito'){
			//Validaciones datos tarjeta
			var ret_tarjeta_tipo = validate_combo($("#tarjeta_tipo")[0]);
			var ret_tarjeta_numero = validate_nro_tarjeta($("#tarjeta_numero")[0]);
			var ret_tarjeta_mes = validate_combo($("#tarjeta_mes")[0]);
			var ret_tarjeta_anio = validate_combo($("#tarjeta_anio")[0]);

			if ( ret_tarjeta_tipo && ret_tarjeta_numero && ret_tarjeta_mes && ret_tarjeta_anio){
				ret_datos_tarjeta = true;
			}

			ret_datos_banco = true;

		} else if(valorMedioPago == 'Cuenta Bancaria'){
			//Validaciones datos banco
			var ret_cuenta_numero = validate_nro_cuenta($("#nro_cuenta")[0]);
			var ret_banco = validate_combo($("#banco")[0]);
			var ret_tipo_cuenta = validate_combo($("#tipo_cuenta")[0]);

			if ( ret_banco && ret_tipo_cuenta && ret_cuenta_numero){
				ret_datos_banco = true;
			}

			ret_datos_tarjeta = true;

		}else{
			ret_datos_banco = true;
			ret_datos_tarjeta = true;
		}


		if ( ret_datos_personales && ret_datos_tarjeta && ret_datos_banco ){
			$( "#formulario" ).submit();
		}
	} 
	

	function getOptionsComuna(region){
		var comunas = Array();
		var options = '';

		switch(region){
			case 'ARICA Y PARINACOTA':
				comunas = ['Arica', 'Camarones', 'General Lagos', 'Putre'];
				break;
			case 'TARAPACA':
				comunas = ['Alto Hospicio', 'Cami??a', 'Colchane', 'Huara', 'Iquique', 'Pica', 'Pozo Almonte'];
				break;
			case 'ANTOFAGASTA':
				comunas = ['Antofagasta', 'Calama', 'Mar??a Elena', 'Mejillones', 'Ollag??e', 'San Pedro de Atacama', 'Sierra Gorda', 'Taltal', 'Tocopilla'];
				break;
			case 'ATACAMA':
				comunas = ['Alto del Carmen', 'Caldera', 'Cha??aral', 'Copiap??', 'Diego de Almagro', 'Freirina', 'Huasco', 'Tierra Amarilla', 'Vallenar'];
				break;
			case 'COQUIMBO':
				comunas = ['Andacollo', 'Canela', 'Combarbal??', 'Coquimbo', 'Illapel', 'La Higuera', 'La Serena', 'Los Vilos', 'Monte Patria', 'Ovalle', 'Paiguano', 'Punitaqui', 'R??o Hurtado', 'Salamanca', 'Vicu??a'];
				break;
			case 'VALPARAISO':
				comunas = ['Algarrobo', 'Cabildo', 'Calera', 'Calle Larga', 'Cartagena', 'Casablanca', 'Catemu', 'Conc??n', 'El Quisco', 'El Tabo', 'Hijuelas', 'Isla de Pascua', 'Juan Fern??ndez', 'La Cruz', 'La Ligua', 'Limache', 'Llaillay', 'Los Andes', 'Nogales', 'Olmu??', 'Panquehue', 'Papudo', 'Petorca', 'Puchuncav??', 'Putaendo', 'Quillota', 'Quilpu??', 'Quintero', 'Rinconada', 'San Antonio', 'San Esteban', 'San Felipe', 'Santa Mar??a', 'Santo Domingo', 'Valpara??so', 'Villa Alemana', 'Vi??a del Mar', 'Zapallar'];
				break;
			case 'METROPOLITANA':
				comunas = ['Alhu??', 'Buin', 'Calera de Tango', 'Cerrillos', 'Cerro Navia', 'Colina', 'Conchal??', 'Curacav??', 'El Bosque', 'El Monte', 'Estaci??n Central', 'Huechuraba', 'Independencia', 'Isla de Maipo', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Lampa ', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maip??', 'Mar??a Pinto', 'Melipilla', '??u??oa', 'Padre Hurtado', 'Paine', 'Pedro Aguirre Cerda', 'Pe??aflor', 'Pe??alol??n', 'Pirque', 'Providencia', 'Pudahuel', 'Puente Alto', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Bernardo', 'San Joaqu??n', 'San Jos?? de Maipo', 'San Miguel', 'San Pedro', 'San Ram??n', 'Santiago', 'Talagante', 'Tiltil', 'Vitacura'];
				break;
			case 'OHIGGINS':
				comunas = ['Ch??pica', 'Chimbarongo', 'Codegua', 'Coinco', 'Coltauco', 'Do??ihue', 'Graneros', 'La Estrella', 'Las Cabras', 'Litueche', 'Lolol', 'Machal??', 'Malloa', 'Marchihue', 'Mostazal', 'Nancagua', 'Navidad', 'Olivar', 'Palmilla', 'Paredones', 'Peralillo', 'Peumo', 'Pichidegua', 'Pichilemu', 'Placilla', 'Pumanque', 'Quinta de Tilcoco', 'Rancagua', 'Rengo', 'Requ??noa', 'San Fernando', 'San Vicente', 'Santa Cruz'];
				break;
			case 'MAULE':
				comunas = ['Cauquenes', 'Chanco', 'Colb??n', 'Constituci??n', 'Curepto', 'Curic??', 'Empedrado', 'Huala????', 'Licant??n', 'Linares', 'Longav??', 'Maule', 'Molina', 'Parral', 'Pelarco', 'Pelluhue', 'Pencahue', 'Rauco', 'Retiro', 'R??o Claro', 'Romeral', 'Sagrada Familia', 'San Clemente', 'San Javier', 'San Rafael', 'Talca', 'Teno', 'Vichuqu??n', 'Villa Alegre', 'Yerbas Buenas'];
				break;
			case 'BIOBIO':
				comunas = ['Alto Biob??o', 'Antuco', 'Arauco', 'Bulnes', 'Cabrero', 'Ca??ete', 'Chiguayante', 'Chill??n', 'Chill??n Viejo', 'Cobquecura', 'Coelemu', 'Coihueco', 'Concepci??n', 'Contulmo', 'Coronel', 'Curanilahue', 'El Carmen', 'Florida', 'Hualp??n', 'Hualqui', 'Laja', 'Lebu', 'Los ??lamos', 'Los ??ngeles', 'Lota', 'Mulch??n', 'Nacimiento', 'Negrete', 'Ninhue', '??iqu??n', 'Pemuco', 'Penco', 'Pinto', 'Portezuelo', 'Quilaco', 'Quilleco', 'Quill??n', 'Quirihue', 'R??nquil', 'San Carlos', 'San Fabi??n', 'San Ignacio', 'San Nicol??s', 'San Pedro de la Paz', 'San Rosendo', 'Santa B??rbara', 'Santa Juana', 'Talcahuano', 'Tir??a', 'Tom??', 'Treguaco', 'Tucapel', 'Yumbel', 'Yungay'];
				break;
			case 'ARAUCANIA':
				comunas = ['Angol', 'Carahue', 'Cholchol', 'Collipulli', 'Cunco', 'Curacaut??n', 'Curarrehue', 'Ercilla', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufqu??n', 'Puc??n', 'Pur??n', 'Renaico', 'Saavedra', 'Temuco', 'Teodoro Schmidt', 'Tolt??n', 'Traigu??n', 'Victoria', 'Vilc??n', 'Villarrica'];
				break;
			case 'LOS RIOS':
				comunas = ['Corral', 'Futrono', 'La Uni??n', 'Lago Ranco', 'Lanco', 'Los Lagos', 'M??fil', 'Mariquina', 'Paillaco', 'Panguipulli', 'R??o Bueno', 'Valdivia'];
				break;
			case 'LOS LAGOS':
				comunas = ['Ancud', 'Calbuco', 'Castro', 'Chait??n', 'Chonchi', 'Cocham??', 'Curaco de V??lez', 'Dalcahue', 'Fresia', 'Frutillar', 'Futaleuf??', 'Hualaihu??', 'Llanquihue', 'Los Muermos', 'Maull??n', 'Osorno', 'Palena', 'Puerto Montt', 'Puerto Octay', 'Puerto Varas', 'Puqueld??n', 'Purranque', 'Puyehue', 'Queil??n', 'Quell??n', 'Quemchi', 'Quinchao', 'R??o Negro', 'San Juan de la Costa', 'San Pablo'];
				break;
			case 'AYSEN':
				comunas = ['Ays??n', 'Chile Chico', 'Cisnes', 'Cochrane', 'Coyhaique', 'Guaitecas', 'Lago Verde', 'O???Higgins', 'R??o Ib????ez', 'Tortel'];
				break;
			case 'MAGALLANES':
				comunas = ['Ant??rtica', 'Cabo de Hornos (Ex - Navarino)', 'Laguna Blanca', 'Natales', 'Porvenir', 'Primavera', 'Punta Arenas', 'R??o Verde', 'San Gregorio', 'Timaukel', 'Torres del Paine'];
				break;
		}

		for(i=0; i<comunas.length; i++){
			options += "<option value='"+ comunas[i]+"'>"+ comunas[i]+"</option>";
		}

		return options;

	}