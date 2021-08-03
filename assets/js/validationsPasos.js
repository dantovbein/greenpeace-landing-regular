
  /* VARIABLES PARA CUSTOMIZAR */
  var background = "assets/img/backgrounds/bg.jpg";
  var minValorMostrarRegalo = 0;
 

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
			$('#a_' + id).attr('data-original-title', 'El valor debe ser numérico');
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
				guessingPaymentMethod(obj);
				setStateSuccess(obj);
				return true;	
			} else { 				
				$('#a_' + id).attr('data-original-title', 'Nro. de Tarjeta inválido');
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
	
	function validatePrefiero(){
		campos_prefiero = false;
		var ret_celular2 = validate_number($("#celular2")[0]);
		var ret_cod_area2 = validate_number($("#cod_area2")[0]);
			
		if (ret_celular2 && ret_cod_area2){
			campos_prefiero = true;
		}
		
		if(campos_prefiero){
			return true;
		}else{
			return false;
		}	
		
	}	
		
	function validate_form(formId){
		
		var campos_form_1 = false;
		var campos_form_2 = false;
		var ret_datos_tarjeta = false;

		
		
		if (formId == 1){
			//form_1
			var ret_monto = true;
			var valorImporte = $('input[name=importe]:checked').val();
			if (valorImporte == 0) ret_monto = validate_monto($("#monto")[0], minMontoPersonalizado, minValorMostrarRegalo);
			var ret_email = validate_email($("#email")[0]);
			var ret_nombre = validate_not_empty($("#nombre")[0]);
			var ret_apellido = validate_not_empty($("#apellido")[0]);
			var ret_celular = validate_number($("#celular")[0]);
			var ret_cod_area = validate_number($("#cod_area")[0]);
			
			if ( ret_monto && ret_nombre && ret_apellido && ret_email && ret_celular && ret_cod_area){
				campos_form_1 = true;
			}
			
			if(campos_form_1){
				return true;
			}else{
				return false;
			}	
			
		}
		
		
		if (formId == 2){
			//campos form_2
						
			var valorMedioPago = $('input[name=medio_pago]:checked').val();
			if(valorMedioPago == 'Tarjeta Credito'){
				//Validaciones datos tarjeta
				var ret_tarjeta_numero = validate_nro_tarjeta($("#tarjeta_numero")[0]);
				var ret_tarjeta_cvv = validate_nro_tarjeta($("#tarjeta_numero")[0]);
				var ret_tarjeta_mes = validate_combo($("#mes_vencimiento")[0]);
				var ret_tarjeta_anio = validate_combo($("#ano_vencimiento")[0]);
				var ret_tarjeta_titular = validate_text($("#cardholder")[0],'text');
				var ret_tarjeta_tipo_doc = validate_combo($("#docType")[0]);
				var ret_tarjeta_doc = validate_combo($("#documento")[0]);

				
				if ( ret_tarjeta_numero && ret_tarjeta_mes && ret_tarjeta_anio 
					&& ret_tarjeta_titular && ret_tarjeta_doc && ret_tarjeta_tipo_doc){
					ret_datos_tarjeta = true;
				}

			} else {

				ret_datos_tarjeta = true;
			}
			
			if ( ret_datos_tarjeta){
				campos_form_2 = true;
			}
			
			if(campos_form_2){
				return true;
			}else{
				return false;
			}

		}	
				
	} 
	

    function validate_text(obj, tipo){
      var regex = tipo != "num" ? new RegExp(/^[A-Za-z\s]+$/g) : new RegExp(/^[0-9\s]+$/g);
      var str = obj.value;
      var campo =  "#"+obj.id;
        if (regex.test(str)) {
			setStateSuccess(obj);	
			return true;
        }else{
			setStateError(obj);	
			return false;
        }
    }