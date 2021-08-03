
jQuery(document).ready(function() {
	
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

    setearDonacion(donacion);

    //Seteo del evento del importe 
    $("input[name='importe']").click(function(){
      (this.value == 0) ? $('#monto').show() : $('#monto').hide();
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
    $('#pais').blur(function(){
      validate_combo(this);
    });      

    //Seteo evento de Región
    $('#region').blur(function(){
      validate_combo(this);
    });      

    //Seteo evento de Comuna
    $('#comuna').blur(function(){
      validate_combo(this);
    });      

    //Seteo evento de Ciudad
    $('#ciudad').blur(function(){
      validate_not_empty(this);
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
      validate_not_empty(this);
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
        $('#titulo_tarjeta').show();
        $('#campos_tarjeta').show();
        $('#titulo_cuenta').hide();
        $('#campos_cuenta').hide();
      } else {
        $('#titulo_tarjeta').hide();
        $('#campos_tarjeta').hide();
        $('#titulo_cuenta').show();
        $('#campos_cuenta').show();
      }      
    });  

    //Seteo evento DONA
    $("#btn_dona").click(function(){
      validate_form();
    });

});


  

