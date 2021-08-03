
jQuery(document).ready(function() {
	
	
	//Applied affix to sidebar class
	$('.contenido').affix({
        offset: {
            top: 0
        }
    }).on('affix.bs.affix',function(){
        setAffixContainerSize();
    });

    /*Setting the width of the sidebar (I took 10px of its value which is the margin between cols in my Bootstrap CSS*/
    function setAffixContainerSize(){
        $('.contenido').width($('.contenido').parent().innerWidth()-30);
    }

    $(window).resize(function(){
        setAffixContainerSize();
    });
	
	
	function mostarFormStep(stepToHide,stepToShow){
		$('#wrapperPaso'+stepToHide).fadeOut(500);
		$('#wrapperPaso'+stepToShow).fadeIn(500);	
	}
	
    /* Fullscreen background */
    $.backstretch(background);
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    //Estado inicial de la pantalla
    $('#monto').hide();
    $('#titulo_tarjeta').show();
    $('#campos_tarjeta').show();
    $('#titulo_cuenta').hide();
    $('#campos_cuenta').hide();
    $('#campos_comuna').hide();

    setearDonacion(donacion);

    //Seteo del evento del importe 
    $("input[name='importe']").click(function(){
      (this.value == 0) ? $('#monto').fadeIn() : $('#monto').fadeOut();
      showHideRegalo(this.value, minValorMostrarRegalo);
    }); 
	
    //Seteo evento de monto
    $('#monto').blur(function(){
      validate_monto(this, minMontoPersonalizado, minValorMostrarRegalo);
    });

    //Seteo evento de Email 
    $('#email').blur(function(){
      validate_email(this);
    });

    //Seteo evento de Nombre 
    $('#nombre').blur(function(){
      validate_not_empty(this);
    });      

    //Seteo evento de Apellido 
    $('#apellido').blur(function(){
      validate_not_empty(this);
    });  

    //Seteo evento de Género
    $('#genero').blur(function(){
      validate_combo(this);
    });      

    //Seteo evento de RUT 
    $('#rut').blur(function(){
      validate_number(this, 'not_empty')
    });

    //Seteo evento de Fecha Nac 
    $('#dia').blur(function(){
      validate_combo(this);
    });      

    $('#mes').blur(function(){
      validate_combo(this);
    });      

    $('#anio').blur(function(){
      validate_combo(this);
    });      

    //Seteo evento de Pais
    $('#pais').change(function(){
      if(validate_combo(this)){
        if($(this).val() == 'Chile'){
          $('#campos_region').fadeIn();
        } else {
          $('#campos_region').fadeOut();
          $('#campos_comuna').fadeOut();
          $('#region').val('-');
          $('#comuna').val('-');
        }
      }
    });      

    //Seteo evento de Región
    $('#region').change(function(){
      if(validate_combo(this)){        
        var html_comuna = $('#comuna').html();
        html_comuna += getOptionsComuna( $(this).val() );
        $('#comuna').html(html_comuna);
        setStateDefault($('#comuna')[0]);
        $('#campos_comuna').fadeIn();
      } else {
        $('#campos_comuna').fadeOut();
      };
    });    

    //Seteo evento de Comuna
    $('#comuna').change(function(){
      validate_combo(this);
    });      

    //Seteo evento de Dirección 
    $('#direccion').blur(function(){
      validate_not_empty(this);
    });  

    //Seteo evento de Celular
    $('#celular').blur(function(){
      validate_number(this,'empty');
    });

    //Seteo evento Tarjeta Tipo
    $('#tarjeta_tipo').blur(function(){
      validate_combo(this);
    });

    //Seteo evento de Número de tarjeta
    $('#tarjeta_numero').blur(function(){
      validate_nro_tarjeta(this);
    });

    //Seteo evento de Fecha de vencimiento
    $('#tarjeta_mes').blur(function(){
      validate_combo(this);
    });

    //Seteo evento de Banco 
    $('#banco').blur(function(){
		validate_combo(this);
    });  

     $('#tarjeta_anio').blur(function(){
      validate_combo(this);
    });

    //Seteo evento de Tipo de cuenta
    $('#tipo_cuenta').blur(function(){
      validate_combo(this);
    });
     
    
    //Seteo del evento del Medio de Pago
    $("input[name='medio_pago']").click(function(){
		
      if (this.value == 'Tarjeta Credito') {
        $('#titulo_tarjeta').fadeIn();
        $('#campos_tarjeta').fadeIn();
        $('#titulo_cuenta').fadeOut();
        $('#campos_cuenta').fadeOut();
      } else if (this.value == 'Cuenta Bancaria'){
        $('#titulo_tarjeta').fadeOut();
        $('#campos_tarjeta').fadeOut();
        $('#titulo_cuenta').fadeIn();
        $('#campos_cuenta').fadeIn();
      }else{
        $('#titulo_tarjeta').fadeOut();
        $('#campos_tarjeta').fadeOut();
        $('#titulo_cuenta').fadeOut();
        $('#campos_cuenta').fadeOut();
      } 	  	  
    });  


		
	//Seteo del evento del boton siguiente 
	 $("#btn_siguiente").click(function() {
		if (validate_form(1)){
			mostarFormStep(1,2);
			sendToForma();
		}
    }); 
	
	//Seteo del evento del boton dona
	 $("#btn_dona").click(function() {
		if (validate_form(2)){
			sendToForma();
		}
    }); 
	
	function sendToForma() {
		var combinedFormData = $("#formulario1,#formulario2").serialize();
		$.post(
		"https://unete.greenpeace.cl/ForMa/procesar_cupon_en_pasos_ajax_chileSEA.php",
		//"http://localhost:8082/ForMaCL/procesar_cupon_en_pasos_ajax_chile.php",
		combinedFormData
			).done(function(data) {
				//console.log(data);
				//console.log(data.post_id);
				$('#partial_post_id').val(data.post_id);
				if (data.url_return){
					window.location.replace(data.url_return);
				}
				}).fail(function () {
		//			console.log("Error submitting forms!");
			})
	}
	
	

});


  

