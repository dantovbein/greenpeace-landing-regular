const ENV_DEV = "prod";
URL_WEB_BASE = '';
URL_BASE = '';
URL_API = '';
URL_FILES = '';

if (ENV_DEV ==="sb") {
   URL_API = "https://sb.dona.greenpeace.org.ar";

} else if(ENV_DEV === "prod"){

   URL_API = "https://dona.greenpeace.org.ar";

} if(ENV_DEV === "local"){
   URL_API = "http://localhost:8000";
}

    var specialAppeaBool;
    var form1 = document.getElementById('wrapperPaso1');
  	var form2 = document.getElementById('wrapperPaso2');
    //var form3 = document.getElementById('step3');
    var cod;
    var telefono;
    var config =[];
    var params = {};
    var utms =[];
    var currentAmount;
    var currentErrors = [];
    var errorsStep1 = ["email", "nombre", "apellido","cod_area", "telefono"];
    var errorsStep2 = ["numerotarjeta","cod_seguridad", "documento", "cardholder"];
    var errorsStep3 = [];
    var errorsLlamada = ["cod_area", "telefono"];
    var selectedEmail="";
    var imagenCarouselElement = "img/pinguinos.jpg";
    var textoCaruoselElement;
    var tituloCarouselElement;
	var minMontoPersonalizado;
	var urlGracias;
	
	 function prefieroLlamada(){
       $('#errormsg').empty();
	   if (validatePrefiero()){
			window.location.href = urlGracias;
	   }
    }
   
jQuery(document).ready(function() {
	
	getConfigJson();	
	getPublicKey();
            
		
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
    $('#a_monto').hide();
    $('#titulo_tarjeta').show();
    $('#campos_tarjeta').show();
	$('#btn_prefiero').hide();
	$('#campos_prefiero').hide();
  
    setearDonacion($('input[name="importe"]:checked').val());
    currentAmount = $('input[name="importe"]:checked').val();

	 	
	//Seteo del evento del importe 
	$("input[name='importe']").click(function(){
		(this.value == 0) ? $('#a_monto').fadeIn() : $('#a_monto').fadeOut();
		currentAmount = $('input[name="importe"]:checked').val();
	}); 
		
    //Seteo evento de monto
    $('#monto').keyup(function(){
	  currentAmount = this.value;
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

    //Seteo evento de telefono
    $('#celular').blur(function(){
      validate_number(this);
    });
	
	//Seteo evento de cod_area
    $('#cod_area').blur(function(){
      validate_number(this);
    });
	
	 //Seteo evento de telefono2
    $('#celular2').blur(function(){
      validate_number(this);
    });
	
	//Seteo evento de cod_area2
    $('#cod_area2').blur(function(){
      validate_number(this);
    });


     //Seteo evento de Número de tarjeta
    $('#tarjeta_numero').focusout(function(){
       $('#errormsg').empty();
      validate_nro_tarjeta(this);
    });
		
	//Seteo evento de cvv
    $('#cod_seguridad').keyup(function(){
	  $('#errormsg').empty();
      validate_text(this, 'num');
    });


    //Seteo evento de Fecha de vencimiento
    $('#mes_vencimiento').blur(function(){
      validate_combo(this);
    });

     $('#ano_vencimiento').blur(function(){
      validate_combo(this);
    });
	
	
	//Seteo evento de tipo documento
    $('#docType').change(function(e){
	  $('#errormsg').empty();
      console.log(e.target.value);
      switch (e.target.value) {
        case "DNI":
          $('#documento').attr("minlength", 7);
          $('#documento').attr("maxlength", 8);
          break;
        case "CI":
          $('#documento').attr("minlength", 1);
          $('#documento').attr("maxlength", 9);
          break;
        case "LC":
          $('#documento').attr("minlength", 6);
          $('#documento').attr("maxlength", 7);
          break;
        case "LE":
          $('#documento').attr("minlength", 6);
          $('#documento').attr("maxlength", 7);
          break;
        default:
          $('#documento').attr("minlength", 5);
          $('#documento').attr("maxlength", 20);
        break;
      }
	});

    //Seteo evento de nro documento
    $('#documento').keyup(function(){
	  $('#errormsg').empty();
      validate_text(this,'num');
    });
	
	//Seteo evento de Titular 
    $('#cardholder').blur(function(){
      $('#errormsg').empty();
	  validate_text(this,'text');
    });  
     
    

	
	
    //Seteo del evento del Medio de Pago
    $("input[name='medio_pago']").click(function(){
      if (this.value == 'Tarjeta Credito') {
        $('#titulo_tarjeta').fadeIn();
        $('#campos_tarjeta').fadeIn();
		$('#btn_dona').show();
		$('#campos_prefiero').fadeOut();
		$('#btn_prefiero').hide();		
      }else{
		$('#btn_dona').hide();
		$('#btn_prefiero').show();
		$('#campos_prefiero').fadeIn();
        $('#titulo_tarjeta').fadeOut();
        $('#campos_tarjeta').fadeOut();
      } 	  	  
    });  
	
	function dcSendData(){
		var dcDataContact = {
			"sincro":"",
			"email": $('#email').val(),
			"first_name": $('#nombre').val(),
			"last_name": $('#apellido').val(),
			"phone": $('#cod_area').val()+$('#celular').val(),
		};
		
		var dcDataSynchro = {portalID: '90',synchroKey: 'cPEefSbDVUcMgdGEFYDDZWYTTWJNHfXBJagGJXIeGCFFdJHhAK'};
		dcS.synchro.init(dcDataSynchro, dcDataContact);	
	}
	

	//Seteo del evento del boton siguiente 
	 $("#btn_siguiente").click(function() {
		if (validate_form(1)){
			
			
			dcSendData();
			
			Mercadopago.getIdentificationTypes();
			fillYears();
			//currentErrors = errorsStep2;

			params.amount = currentAmount;
			params.nombre = $('#nombre').val();
			params.apellido = $('#apellido').val();
			params.cod_area = $('#cod_area').val();
			params.telefono = $('#celular').val();
			params.email = $('#email').val();
			
			cod = $('#cod_area').val();
			telefono = $('#celular').val();
			selectedEmail = $('#email').val();
			$('#cod_area2').attr('value', cod);
			$('#celular2').attr('value', telefono);
			$('#home-tab').addClass('active');
			$('#step2').removeClass('invisible').removeClass('oculto').addClass('visible');
					
			
			mostarFormStep(1,2);

		}
    }); 
	
	//Seteo del evento del boton dona
	 $("#btn_dona").click(function() {
		if (validate_form(2)){
			doPay();
		}
    }); 
	


	function fillYears(){
      var d = new Date();
      var year = d.getFullYear();
      for(let i=0;i<=19;i++){
        let selected = i<=0 ? 'selected':'';
        $('#ano_vencimiento').append('<option value="'+(year+i)+'" '+selected+'>'+(year+i)+'</option>');
      }
    }
	
	

});

function getCardData(){
     let cardNumber = $('#tarjeta_numero').val();
     params.firstDigits = cardNumber.substring(0, 6);
     params.lastDigits = cardNumber.substring((cardNumber.length - 4), cardNumber.length);
}

function prepareSubmit(){
        params.tipodocumento= $('#docType').val();
        params.mes_vencimiento= $('#mes_vencimiento').val();
        params.ano_vencimiento= $('#ano_vencimiento').val();
        params.documento = $('#documento').val();
		getCardData();
        params.utms= utms;
        console.log(params);
      setDates();
      submitForm();

    }

    function setDates(){
      var d = new Date();
      params.date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
      params.today = d.getDate();
      let tomorrow = new Date(d);
      tomorrow.setDate(tomorrow.getDate() + 1);
      params.tomorrow = new Date(tomorrow).getDate();
      
    }

    function submitForm(){
      $('#btn_dona').attr('disabled', 'disabled');
      console.log(params);
	  
      //let endpoint = specialAppeaBool ? "/gp/specialAppeal" : "/gp/createStaging";
      let endpoint = "/gp/createStaging"; 
	  params.type = specialAppeaBool ? "oneoff" : "regular";
    console.log(params.type);
	  $.ajax({
        method: "POST",
        url: URL_API+endpoint,
        headers: {
                  "Content-Type": "application/json"
                },
        data: JSON.stringify(params)
      })
      .done(function (msg) {
        //msg = JSON.parse(msg);
        $('#btn_dona_loading').hide();
        $('#btn_dona').attr('disabled', false);
  
        window.location.href = urlGracias;
        
      }).fail(function(e){
        $('#errormsg').empty().append('<div class="alert alert-danger" role="alert">Algo Falló, Por favor intente luego</div>');
        
        $('#btn_dona').attr('disabled', false);
      });
    }
	
	
	function fillMontos(donacion){
		
		for (i in donacion.montos) {
			monto = donacion.montos[i];
			if (monto == donacion.montoDefault){
				$('#importesVariables').append('<div class="radio text-left"><label><input  type="radio" value="'+monto+'" name="importe" onclick="clickImporte(this)" checked>$'+monto+'</label></div>');
			}else{
				$('#importesVariables').append('<div class="radio text-left"><label><input  type="radio" value="'+monto+'" name="importe" onclick="clickImporte(this)">$'+monto+'</label></div>');
			}	
		}
		$('#importesVariables').append('<div class="radio text-left"><label><input type="radio" value="0" name="importe" onclick="clickImporte(this)">OTRAS DONACIONES</label></div>');
 
      }
	  
	  
	  
    
    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

	
	 function getUtms(){
      jQuery.each(config.utms, function(data, val){

        utms.push({"valor":getParameterByName(val.nombre), "campo":val.campo_en_salesforce});

      });
     
    }
	
	function clickImporte(obj){
		(obj.value == 0) ? $('#a_monto').fadeIn() : $('#a_monto').fadeOut();
		currentAmount = obj.value;
	} 

	
	 function getConfigJson(){

      $.getJSON( "config.json", function( data ) {
        config = data;
		urlGracias = config.url_gracias;
		
        var montoDefault = config.donacion.montoDefault;
		minMontoPersonalizado = config.donacion.montoMinimo;
		fillMontos(config.donacion);
        specialAppeaBool = config.one_off;
        specialAppeaBool ? console.log("one_off") : console.log('regular_givin');
	    console.log(specialAppeaBool);
        getUtms();
        
        currentAmount = montoDefault;

      });
    }
	

