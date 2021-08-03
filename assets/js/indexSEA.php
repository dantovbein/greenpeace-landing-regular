<?php

  if( isset($_GET['backColor'])) {
    $backColor = $_GET['backColor'];
  } else {
    $backColor = 'dark';
  }

  $query_string = $_SERVER['QUERY_STRING'];


  if (isset($_GET['mail'])){
    $mail_get = $_GET['mail'];
  } else {
    $mail_get = '';
  }
  
  
if (isset($_GET['referrer'])){
       $referrer = $_GET['referrer'];                
} else {
       if (isset($_GET['ref'])){
               $referrer = $_GET['ref'];                
       } else {
               $referrer = 'General_Sinref';
       }
}

?>

<!DOCTYPE html>
<html lang="es">
  <head>  
<script src="//cdn.optimizely.com/js/211797349.js"></script>  
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Apoya nuestro trabajo con tu donación">
    <title>Súmate a Greenpeace para seguir defendiendo el medioambiente</title>

    <!-- CSS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css">
    <link rel="stylesheet" href="assets/css/form-elements.css">
    <link rel="stylesheet" href="assets/css/style.css">
	 <!--	<link rel="stylesheet" href="assets/bootstrap-progressbar/css/bootstrap-progressbar-3.3.2.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Favicon and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.png">
   <!-- <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png"> -->

	<!-- FACEBOOK META TAGS -->

                        <meta property="og:title" content="Asociate a Greenpeace 

" />
<meta property="og:type" content="website" />
<meta property="og:description" content="Hace más de 20 años que defendemos el planeta de manera independiente: no recibimos dinero ni de empresas ni de partidos políticos. Necesitamos tu ayuda y apoyo para seguir adelante con nuestras campañas.

  " />
<meta name="keywords" content="greenpeace" />
<meta property="og:image" content="https://unete.greenpeace.cl/cupongral2/assets/img/foto_chica.jpg" />  

                        <!-- FACEBOOK META TAGS END -->
	
    <script>
      var donacion = <?php echo (isset($_GET['donacion']) ? $_GET['donacion'] : 0); ?>;
    </script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVFGBGM');</script>
<!-- End Google Tag Manager -->
    <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', '713455948697688');
fbq('track', "PageView");
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=713455948697688&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->


	<!--AA-->
	<style>
	  /* Note: Try to remove the following lines to see the effect of CSS positioning 
	  .affix {
	 	top: 50px !important;
	  z-index: 9999 !important; 
	  }*/
	  
	
	</style>
	<!--AA-->
 </head>



<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVFGBGM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	<!-- Top menu -->
	<nav class="navbar navbar-inverse navbar-green" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button> -->
				<a class="navbar-brand" href="#">Greenpeace</a>
			</div>
			<!-- <div class="collapse navbar-collapse" id="top-navbar-1">
				<ul class="nav navbar-nav navbar-right">
					<li><span class="li-social"><div class="addthis_native_toolbox" style="font-size:8px;"></div></span></li>
				</ul>
			</div> -->
		</div>
	</nav>

	<div class="container">
	<!--<div>-->
		
		<div class="col-lg-8">  
			<div class="row">
				<!--<div class="vh">-->
				<!-- <div  class="contenido"> -->
					<div class="row row_pad textos" style="margin-bottom:0px;">
						<div class="col-md-12 no-padding">
							<img src="https://unete.greenpeace.cl/cupongral2/assets/img/foto_chica.jpg" alt="Gracias! Unite ahora!">
						</div>	
					</div>
					<div class="row row_pad textos" style="margin-bottom:0px;">
						<div class="col-md-12  text-top">
							<h1 class="main-title"><strong>¡ASÓCIATE Y AYÚDANOS A SEGUIR ADELANTE!</strong></h1>
							<div class="description">
								<p class="left">
									Hace más de 20 años que defendemos el planeta de manera independiente: 
									no recibimos dinero ni de empresas ni de partidos políticos. Esto nos permite denunciar sin miedo todos los crímenes que se 
									cometen a diario contra nuestro medio ambiente. Pero necesitamos tu ayuda y apoyo para seguir adelante con nuestras campañas.
								
								</p>
							</div>
						</div>
					</div>	
					
				<!--</div>-->
			</div>
		</div>
	
		<nav class="col-lg-4">
			<div class="row">
				<form class="formulario" >
				<a href="https://www.webpay.cl/portalpagodirecto/pages/institucion.jsf?idEstablecimiento=467158" target="_blank"><div style="background: orange;
    border-radius: 10px;
    margin-bottom: 13px;
    padding: 8px;
	width: 75%;
    margin: 0 auto;">
				<span style="color: white; font-weight:bold;">Si prefieres hacer una donación por única vez, haz click aquí.</span></div></a>
					<div class="boxNoPad dona" style="margin-top: 10px !important;">
						<h2>Dona ahora</h2>
					</div>
				</form>	
			</div>
			
		
		<div id="wrapperPaso1">
		  <!--<div  data-spy="affix" data-offset-top="50px" id="myAffix">-->  
		  <form class="formulario" id="formulario1">
			  <!-- FORM ID -->
			  <input type="hidden" name="form_id" value ="112">
			  <input type="hidden" id="partial_post_id" name="partial_post_id" value="0">		
			  
			  <!-- REFERRER -->
			  <input type="hidden" name="referrer" value ="<?php echo $referrer?>">
				  
			  <div class="row row_pad textos">
					<div class="col-sm-12">
								  
					 <!-- <div class="box" style="margin-bottom:10px;"> -->
						<!-- IMPORTE -->
						<h5 class="autorizo">Autorizo el débito automático mensual de:</h5>
					  
						<div class="radio text-left">
						  <label><input type="radio" value="3000" name="importe" checked>$3.000</label>                
						</div>
						<div class="radio text-left">
						  <label><input type="radio" value="5000" name="importe">$5.000</label>
						</div>
						<div class="radio text-left">
						  <label><input type="radio" value="7000" name="importe">$7.000</label>
						</div>
						<div class="radio text-left">
						  <label><input type="radio" value="10000" name="importe">$10.000</label>
						</div>
						<div class="radio text-left">
						  <label><input type="radio" value="0" name="importe">OTRAS DONACIONES</label>
						</div>

						<!-- MONTO -->
						<div class="form-group">      
						  <a id='a_monto' data-original-title="Campo obligatorio">
							<input type="text" id="monto" name="monto" class="form-control" placeholder="Otro monto *"/> 
							<span id='span_monto'></span>
						  </a>
						</div>

					

						<!-- EMAIL -->                
						<div class="form-group">
						  <a id='a_email' data-original-title="Email inválido">
							<input type="email" id="email" name="email" class="form-control" placeholder="Email *" />
							<span id='span_email'></span>          
						  </a>                
						</div>
					 
					  
					  <!-- NOMBRE -->
					  <div class="form-group">      
						<a id='a_nombre' data-original-title="Campo obligatorio">
						  <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre *" /> 
						  <span id='span_nombre'></span>
						</a>
						<p class="help">Tal y como aparece en la tarjeta de crédito</p>
					  </div>

					  <!-- APELLIDO -->
					  <div class="form-group">  
						<a id='a_apellido' data-original-title="Campo obligatorio">                                          
						  <input type="text" id="apellido" name="apellido" class="form-control" placeholder="Apellido *" /> 
						  <span id='span_apellido'></span>
						</a>
						<p class="help">Tal y como aparece en la tarjeta de crédito</p>
					  </div>
					  
					  <!-- CELULAR -->   
					  <div class="form-group"> 
						<div class="row">
						  <div class="col-xs-2 paddRight0 paddLeft0">
							<span class="code-number">9</span>
						  </div>
						  <div class="col-xs-10 paddLeft0">
							<div class="form-group" style="margin-bottom:0 !important;"> 
							  <a id='a_celular' data-original-title="Celular Inválido">
								<input type="text" pattern="[0-9]*" name="celular" id="celular" class="form-control" placeholder="Celular*">
								<span id='span_celular'></span>
							  </a>
							</div>
						  </div>
						</div>
						<p class="help">Escribe solo números. No agregues guiones</p>
					  </div>
					
					<button id="btn_siguiente" type="button" class="btn enfasis" style="margin-top:15px;">Siguiente</button>   
			

					</div>
				</div>
			</form>
		</div>
		
		
		
		<div id="wrapperPaso2" style="display:none">
			<form class="formulario" id="formulario2">
				<div class="row row_pad textos">
					<!-- RUT -->
					<div class="form-group">                              
						<a id='a_rut' data-original-title="Campo obligatorio">
							<input type="text" id="rut" name="RUT" class="form-control" placeholder="RUT *" /> 
							<span id='span_rut'></span>
						</a>
						<p class="help">ESCRIBE SOLO NÚMEROS, NO INCLUIR PUNTOS NI GUIÓN</p>
					</div>
					
					
					<div class="tarjeta" style="padding-bottom:0px; margin-bottom:0px;">             
						<h3>MEDIO DE PAGO</h3>
					</div>
					<div  class="box" style="padding-bottom:10px; margin-bottom:10px;">
					<!-- MEDIO DE PAGO -->            
					<div class="radio text-left">
					  <label>
						<input type="radio" value="Tarjeta Credito" name="medio_pago" checked>Tarjeta de Crédito
					  </label>
					</div>
										
					<div class="radio text-left">
					  <label>
						<input type="radio" value="No posee tarjeta" name="medio_pago">Prefiero que me llamen
					  </label>                
					</div>
					
				  </div>

				  <div  class="tarjeta" id="titulo_tarjeta">             
					<h3>TARJETA DE CRÉDITO</h3>
				  </div>

				  <div id="campos_tarjeta" class="box" style="padding-bottom:10px; margin-bottom:10px;">
					<!-- TARJETA -->
					<div class="form-group"> 
					  <a id='a_tarjeta_tipo' data-original-title="Campo obligatorio">
						<select id="tarjeta_tipo" name="tarjeta_tipo" class="form-control" >
						  <option value="" selected="">Tarjeta de crédito *</option><option value="Visa">Visa</option><option value=" Mastercard">Mastercard</option><option value=" Amex">Amex</option><option value=" Magna">Magna</option><option value=" Diners">Diners</option>
						</select>                  
						<span id='span_tarjeta_tipo'></span>
					  </a>
					</div>             

					<!-- NUMERO DE TARJETA -->
					<div class="form-group">
					  <a id='a_tarjeta_numero' data-original-title="Campo obligatorio">
						<input type="text" pattern="[0-9]*" id="tarjeta_numero" name="tarjeta_numero" class="form-control" placeholder="Número de la tarjeta *" /> 
						<span id='span_tarjeta_numero'></span>
					  </a>
					  <p class="help">Escribe solo números. No agregues guiones</p>
					</div>

					 <!-- FECHA DE VENCIMIENTO -->                            
					<div class="form-group" style="margin-bottom:0 !important;">
					  <h5 class="text-left text-upper">Fecha de vencimiento *:</h5>
					  <div class="row">
						<div class="col-xs-7 paddRight0"> 
						  <div class="form-group">
							<a id='a_tarjeta_mes' data-original-title="Campo obligatorio">               
							  <select class="form-control" id="tarjeta_mes" name="tarjeta_mes">
								<option value="0" selected="">Mes</option><option value="1">Enero</option><option value="2">Febrero</option><option value="3">Marzo</option><option value="4">Abril</option><option value="5">Mayo</option><option value="6">Junio</option><option value="7">Julio</option><option value="8">Agosto</option><option value="9">Septiembre</option><option value="10">Octubre</option><option value="11">Noviembre</option><option value="12">Diciembre</option>
							  </select>
							  <span id='span_tarjeta_mes'></span>
							</a>
						  </div>
						</div>  
						<div class="col-xs-5">
						  <div class="form-group">
							<a id='a_tarjeta_anio' data-original-title="Campo obligatorio">
							  <select class="form-control" id="tarjeta_anio" name="tarjeta_anio">
								<option value="0" selected="">Año</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option>
							  </select>
							  <span id='span_tarjeta_anio'></span>
							</a>
						  </div>
						</div>  
					  </div>  
					</div>  
					
					<!-- PAIS  -->
					<div class="form-group">
						<a id='a_pais' data-original-title="Campo obligatorio">
						  <select class="form-control" id="pais" name="pais">
							<option value="">País/Región</option><option value="Afganist&aacute;n">Afganist&aacute;n</option><option value="Albania">Albania</option><option value="Alemania">Alemania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Ant&aacute;rtida">Ant&aacute;rtida</option><option value="Antigua">Antigua</option><option value="Antillas holandesas">Antillas holandesas</option><option value="Arabia Saud&iacute;ta">Arabia Saud&iacute;ta</option><option value="Argelia">Argelia</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaiy&aacute;n">Azerbaiy&aacute;n</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Ben&iacute;n">Ben&iacute;n</option><option value="Bermuda">Bermuda</option><option value="Bhut&aacute;n">Bhut&aacute;n</option><option value="Bielorrusia">Bielorrusia</option><option value="Birmania">Birmania</option><option value="Bolivia">Bolivia</option><option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option><option value="Botsuana">Botsuana</option><option value="Brazil">Brazil</option><option value="British V.I.">British V.I.</option><option value="Brunei">Brunei</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cabo Verde">Cabo Verde</option><option value="Cambodia">Cambodia</option><option value="Camboya">Camboya</option><option value="Camer&uacute;n">Camer&uacute;n</option><option value="Canad&aacute;">Canad&aacute;</option><option value="Canary Islands">Canary Islands</option><option value="Cape Verde Islands">Cape Verde Islands</option><option value="Cayman Islands">Cayman Islands</option><option value="Chad">Chad</option><option value="Chile" SELECTED>Chile</option><option value="China PRC">China PRC</option><option value="Chipre">Chipre</option><option value="Ciudad estado del Vaticano">Ciudad estado del Vaticano</option><option value="Colombia">Colombia</option><option value="Comores">Comores</option><option value="Congo">Congo</option><option value="Cook Islands">Cook Islands</option><option value="Corea">Corea</option><option value="Corea del Norte">Corea del Norte</option><option value="Costa del Marf&iacute;l">Costa del Marf&iacute;l</option><option value="Costa Rica">Costa Rica</option><option value="Croatia">Croatia</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouri">Djibouri</option><option value="Dominca">Dominca</option><option value="Dominican Republic">Dominican Republic</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Emiratos &Aacute;rabes Unidos">Emiratos &Aacute;rabes Unidos</option><option value="Eritrea">Eritrea</option><option value="Eslovaquia">Eslovaquia</option><option value="Eslovenia">Eslovenia</option><option value="Espa&ntilde;a">Espa&ntilde;a</option><option value="Estados Unidos">Estados Unidos</option><option value="Estonia">Estonia</option><option value="Etiop&iacute;a">Etiop&iacute;a</option><option value="Ex-Rep&uacute;blica Yugoslava de Macedonia">Ex-Rep&uacute;blica Yugoslava de Macedonia</option><option value="Filipinas">Filipinas</option><option value="Finland">Finland</option><option value="France">France</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Georgia del Sur y las islas Sandwich del Sur">Georgia del Sur y las islas Sandwich del Sur</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Grenada">Grenada</option><option value="Groenlandia">Groenlandia</option><option value="Guadalupe">Guadalupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guayana francesa">Guayana francesa</option><option value="Guinea">Guinea</option><option value="Guinea Ecuatorial">Guinea Ecuatorial</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Holanda">Holanda</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Hungr&iacute;a">Hungr&iacute;a</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Irak">Irak</option><option value="Ir&aacute;n">Ir&aacute;n</option><option value="Ireland">Ireland</option><option value="Isla Bouvet">Isla Bouvet</option><option value="Isla Christmas">Isla Christmas</option><option value="Isla Heard e Islas McDonald">Isla Heard e Islas McDonald</option><option value="Islandia">Islandia</option><option value="Islas Caim&aacute;n">Islas Caim&aacute;n</option><option value="Islas Cook">Islas Cook</option><option value="Islas de Cocos o Keeling">Islas de Cocos o Keeling</option><option value="Islas Faroe">Islas Faroe</option><option value="Islas Fiyi">Islas Fiyi</option><option value="Islas Malvinas & Islas Falkland">Islas Malvinas & Islas Falkland</option><option value="Islas Marianas del norte">Islas Marianas del norte</option><option value="Islas Marshall">Islas Marshall</option><option value="Islas menores de Estados Unidos">Islas menores de Estados Unidos</option><option value="Islas Palau">Islas Palau</option><option value="Islas Salom&oacute;n">Islas Salom&oacute;n</option><option value="Islas Tokelau">Islas Tokelau</option><option value="Islas Turks y Caicos">Islas Turks y Caicos</option><option value="&Iacute;slas V&iacute;rgenes &#40;EE.UU.&#41;">&Iacute;slas V&iacute;rgenes &#40;EE.UU.&#41;</option><option value="Islas V&iacute;rgenes & Reino Unido">Islas V&iacute;rgenes & Reino Unido</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Ivory Coast">Ivory Coast</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazajist&aacute;n">Kazajist&aacute;n</option><option value="Kenya">Kenya</option><option value="Kirguizist&aacute;n">Kirguizist&aacute;n</option><option value="Kiribati">Kiribati</option><option value="Korea">Korea</option><option value="Kuwait">Kuwait</option><option value="Laos">Laos</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Lesoto">Lesoto</option><option value="Letonia">Letonia</option><option value="L&iacute;bano">L&iacute;bano</option><option value="Liberia">Liberia</option><option value="Libia">Libia</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao R. A. E">Macao R. A. E</option><option value="Macau">Macau</option><option value="Madagascar">Madagascar</option><option value="Malasia">Malasia</option><option value="Malawi">Malawi</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldivas">Maldivas</option><option value="Mal&iacute;">Mal&iacute;</option><option value="Malta">Malta</option><option value="Marruecos">Marruecos</option><option value="Martinica">Martinica</option><option value="Mauricio">Mauricio</option><option value="Mauritania">Mauritania</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldavia">Moldavia</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Mozambique">Mozambique</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk">Norfolk</option><option value="Noruega">Noruega</option><option value="Norway">Norway</option><option value="Nueva Caledonia">Nueva Caledonia</option><option value="Nueva Zelanda">Nueva Zelanda</option><option value="Om&aacute;n">Om&aacute;n</option><option value="Panama">Panama</option><option value="Papua Nueva Guinea">Papua Nueva Guinea</option><option value="Paquist&aacute;n">Paquist&aacute;n</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn">Pitcairn</option><option value="Poland">Poland</option><option value="Polinesia francesa">Polinesia francesa</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reino Unido">Reino Unido</option><option value="Rep&uacute;blica Centroafricana">Rep&uacute;blica Centroafricana</option><option value="Rep&uacute;blica Checa">Rep&uacute;blica Checa</option><option value="Rep&uacute;blica de Sud&aacute;frica">Rep&uacute;blica de Sud&aacute;frica</option><option value="Rep&uacute;blica Democr&aacute;tica del Congo & Zaire #41;">Rep&uacute;blica Democr&aacute;tica del Congo & Zaire #41;</option><option value="Rep&uacute;blica Dominicana">Rep&uacute;blica Dominicana</option><option value="Reuni&oacute;n">Reuni&oacute;n</option><option value="Romania">Romania</option><option value="Ruanda">Ruanda</option><option value="Rumania">Rumania</option><option value="Russia">Russia</option><option value="Saipan">Saipan</option><option value="Samoa">Samoa</option><option value="Samoa occidental">Samoa occidental</option><option value="San Kitts y Nevis">San Kitts y Nevis</option><option value="San Marino">San Marino</option><option value="San Marino">San Marino</option><option value="San Pierre y Miquelon">San Pierre y Miquelon</option><option value="San Vicente e Islas Granadinas">San Vicente e Islas Granadinas</option><option value="Santa Helena">Santa Helena</option><option value="Santa Luc&iacute;a">Santa Luc&iacute;a</option><option value="Santo Tom&eacute; y Pr&iacute;ncipe">Santo Tom&eacute; y Pr&iacute;ncipe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia y Montenegro">Serbia y Montenegro</option><option value="Seychelles">Seychelles</option><option value="Sierra Leona">Sierra Leona</option><option value="Singapore">Singapore</option><option value="Siria">Siria</option><option value="Slovakia">Slovakia</option><option value="Somalia">Somalia</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="St. Kitts/Nevis">St. Kitts/Nevis</option><option value="Suazilandia">Suazilandia</option><option value="Sud&aacute;n">Sud&aacute;n</option><option value="Suecia">Suecia</option><option value="Suiza">Suiza</option><option value="Suriname">Suriname</option><option value="Svalbard">Svalbard</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Tailandia">Tailandia</option><option value="Taiwan">Taiwan</option><option value="Tanzania">Tanzania</option><option value="Tayikist&aacute;n">Tayikist&aacute;n</option><option value="Territorios brit&aacute;nicos del oc&eacute;ano &Iacute;ndico">Territorios brit&aacute;nicos del oc&eacute;ano &Iacute;ndico</option><option value="Territorios franceses del sur">Territorios franceses del sur</option><option value="Thailand">Thailand</option><option value="Timor Oriental">Timor Oriental</option><option value="Togo">Togo</option><option value="Tonga">Tonga</option><option value="Trinidad y Tobago">Trinidad y Tobago</option><option value="T&uacute;nez">T&uacute;nez</option><option value="Turkey">Turkey</option><option value="Turkmenist&aacute;n">Turkmenist&aacute;n</option><option value="Turqu&iacute;a">Turqu&iacute;a</option><option value="Tuvalu">Tuvalu</option><option value="Ucrania">Ucrania</option><option value="Uganda">Uganda</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="Uruguay">Uruguay</option><option value="Uzbekist&aacute;n">Uzbekist&aacute;n</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Vietnam">Vietnam</option><option value="Wallis y Futuna">Wallis y Futuna</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option>
						  </select>
						  <span id="span_pais"></span>
						</a>
					</div>

					<!-- REGION -->
					<div class="form-group" id="campos_region">
						<a id='a_region' data-original-title="Campo obligatorio">
							<select class="form-control" id="region" name="region">
								<option value="-" selected="">Región</option><option value="ARICA Y PARINACOTA">ARICA Y PARINACOTA</option><option value="TARAPACA">TARAPACÁ</option><option value="ANTOFAGASTA">ANTOFAGASTA</option><option value="ATACAMA">ATACAMA</option><option value="COQUIMBO">COQUIMBO</option><option value="VALPARAISO">VALPARAÍSO</option><option value="METROPOLITANA">METROPOLITANA</option><option value="OHIGGINS">O'HIGGINS</option><option value="MAULE">MAULE</option><option value="BIOBIO">BIOBÍO</option><option value="ARAUCANIA">ARAUCANÍA</option><option value="LOS RIOS">LOS RÍOS</option><option value="LOS LAGOS">LOS LAGOS</option><option value="AYSEN">AYSÉN</option><option value="MAGALLANES">MAGALLANES</option>
							</select>                
							<span id="span_region"></span>
						</a>
					</div>

					<!-- COMUNA -->
					<div class="form-group" id="campos_comuna">
						<a id='a_comuna' data-original-title="Campo obligatorio">
							<select class="form-control" id="comuna" name="comuna">
								<option value="-" selected="">Comuna</option>
							</select>
							<span id="span_comuna"></span>
						</a>
					</div>
					
						<!-- FECHA DE NACIMIENTO -->                            
					<div class="form-group" style="margin-bottom:0 !important;">
						<h5 class="text-left text-upper">Fecha de nacimiento *:</h5>
						<div class="row">
							<div class="col-xs-3 paddRight0">                
								<div class="form-group">
									<a id='a_dia' data-original-title="Campo obligatorio">
										<select class="form-control" id="dia" name="dia">
											<option value="0" selected="">Día</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>          
										</select>
										<span id='span_dia'></span>
									</a>
								</div>
							</div>  
							<div class="col-xs-5 paddRight0">                
								<div class="form-group">
								  <a id='a_mes' data-original-title="Campo obligatorio">
									<select class="form-control" id="mes" name="mes">
										<option value="0" selected="">Mes</option><option value="1">Enero</option><option value="2">Febrero</option><option value="3">Marzo</option><option value="4">Abril</option><option value="5">Mayo</option><option value="6">Junio</option><option value="7">Julio</option><option value="8">Agosto</option><option value="9">Septiembre</option><option value="10">Octubre</option><option value="11">Noviembre</option><option value="12">Diciembre</option>
									</select>
									<span id='span_mes'></span>
								  </a>
								</div>
							</div>  
							<div class="col-xs-4">
								<div class="form-group">
									<a id='a_anio' data-original-title="Campo obligatorio">
										<select class="form-control" id="anio" name="anio">
											<option value="0" selected="">Año</option><option value="1910">1910</option><option value="1911">1911</option><option value="1912">1912</option><option value="1913">1913</option><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option>
										</select>
										<span id='span_anio'></span>
									</a>
								</div>  
							</div>  
						</div>  
					</div>  
					
					
				  </div>          
				  
				  
				  
				  <!--<div style="display:none;"> -->
				  <div id="titulo_cuenta" class="box tarjeta">             
					<h3>CUENTA BANCARIA</h3>
				  </div>

				  <div id="campos_cuenta" class="box" style="padding-bottom:15px; margin-bottom:15px;">
					<!-- BANCO -->
					<div class="form-group">
					  <a id='a_banco' data-original-title="Campo obligatorio">
						<select id="banco" name="banco" class="form-control" >
							<option value="" selected>Banco *</option>
							<option value="Banco BCI">Banco BCI</option>
							<option value="Banco BICE">Banco BICE</option>
							<option value="Banco CHILE/EDWARDS">Banco CHILE/EDWARDS</option>
							<option value="Banco Citibank">Banco Citibank</option>
							<option value="Banco Corpbanca">Banco Corpbanca</option>
							<option value="Banco DESARROLLO">Banco DESARROLLO</option>
							<option value="Banco Estado">Banco Estado</option>
							<option value="Banco Falabella">Banco Falabella</option>
							<option value="Banco ITAU">Banco ITAU</option>
							<option value="Banco Santander/Santiago">Banco Santander/Santiago</option>
							<option value="Banco Scotiabank">Banco Scotiabank</option>
							<option value="Banco Scotiabank o BBVA">Banco Scotiabank o BBVA</option>
							<option value="Banco Security">Banco Security</option>
						</select>   
						<span id='span_banco'></span>
					  </a>                  
					</div>

					<!-- TIPO DE CUENTA -->
					<div class="form-group"> 
					  <a id='a_tipo_cuenta' data-original-title="Campo obligatorio">
						<select id="tipo_cuenta" name="tipo_cuenta" class="form-control" >
						  <option value="" selected>Tipo de Cuenta *</option>
						  <option value="Cuenta Vista">Cuenta Vista o Chequera Electrónica</option>
						  <option value="Cuenta Corriente">Cuenta Corriente</option>
						  <option value="Cuenta Rut">Cuenta Rut</option>
						</select>                  
						<span id='span_tipo_cuenta'></span>
					  </a>
					</div>
					
					<!-- NRO CUENTA -->
					<div class="form-group">
					  <a id='a_nro_cuenta' data-original-title="Campo obligatorio">
						<input type="text" pattern="[0-9]*" id="nro_cuenta" name="nro_cuenta" class="form-control" placeholder="Número de Cuenta *"/>
						<span id='span_nro_cuenta'></span>
					  </a>     
					  <p class="help">Escribe solo números. No agregues guiones</p>				  
					</div>			

				</div>					
					
				
					
					<!-- DONA --> 
					<button id="btn_dona" type="button" class="btn enfasis" style="margin-top:15px;">DONA!</button>   
					<br/>
						

				</div>
				<input type="hidden" id="url_return" name="url_return" value ="http://unete.greenpeace.cl/cupongral2Pasos/gracias/gracias_cupon.php">
			</form>
		</div>
	</nav>
			
		<div class="col-lg-12">  
			<div class="row">
			<!-- LOCK -->
			<div class="lock">              
				<p>Deja tus datos con confianza. Este sitio es 100% seguro. Tus datos viajarán encriptados y solo nosotros podemos acceder a ellos.</p>
				<p style="font-size:11px; font-weight: normal;">Al completar el formulario aceptás nuestra <a href="https://www.greenpeace.org/chile/politica-privacidad/ " target="_blank">política de privacidad</a>. Recibirás información sobre nuestras campañas y formas de participar. Podrás desuscribirte cuando quieras.</p>
			</div> 
			</div>
			</div>
			
			
		
	</div>
			




	
	
  <!-- Top content -->
  <!--
  <div class="top-content">  	
    <div class="inner-bg">
      <div class="container">
      </div>
    </div>
  </div>
-->
  
  <!-- Javascript -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="assets/js/validationsPasos.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>
	<script src="assets/js/retina-1.1.0.min.js"></script>
	<script src="assets/js/scripts.js"></script>
	<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5566428336b071af" async></script>
	
  <script>
		$(function() {
			<?php if ($mail_get <> '')  echo  '$("#email").val("'.$mail_get.'");'  ?>
		});  	
  </script>

</body>

</html>