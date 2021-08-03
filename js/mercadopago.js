doSubmit = false;



function getPublicKey(){

    $.get( URL_API+'/gp/getPublicKey', function( data ) {
      Mercadopago.setPublishableKey(data);
    });

}


form = document.querySelector('#pay');

$('#finalizar').on('click', doPay);

function doPay(){
   // event.preventDefault();
    
    if(!doSubmit){

        var $form = document.querySelector('#pay');
        
        window.Mercadopago.createToken($form, sdkResponseHandler);

        return false;
    }
};

function sdkResponseHandler(status, response) {
    console.log(response);
    if (status != 200 && status != 201) {
          createError('Verificá los datos de tarjeta');
    }else{
        params.token = response.id;
        console.log(response);

        prepareSubmit();
        //window.location.replace("/greenpeace-front/greeting.html");

    }
};

 function getBin(completeCardNumber) {
  return completeCardNumber.substring(0,6);
}

function guessingPaymentMethod(formObject) {
    var bin = getBin(formObject.value);

    let payment_method_option_id = window.Mercadopago.getInstallments({
        "bin": bin,
        "amount": currentAmount
    },setInstallmentInfo);
};

function setInstallmentInfo(status, response){
    console.log(response);
    let value = false;
    jQuery.each(response, function(data, val){
                if(val.processing_mode === "gateway"){
                    value = val;
                              
                }
            });
    if(value != false){
        let valid_card = 0;
        if(specialAppeaBool || value.payment_method_id == "amex"){
            jQuery.each(value.agreements[0].merchant_accounts, function(data, val){
                if(val.branch_id == null){
                    params.payment_method_option_id = val.payment_method_option_id;
                    params.merchant_account_id = val.id;
                    console.log(params);
                    console.log('con cvv');
                    valid_card = 1;
                }
            });
                if(valid_card === 0){
                    createError("Tarjeta no Soportada!");
                }
        }else {
            jQuery.each(value.agreements[0].merchant_accounts, function(data, val){
                if(val.branch_id == "regular"){
                    params.payment_method_option_id = val.payment_method_option_id;
                    params.merchant_account_id = val.id;
                    console.log(params);
                    console.log('sin cvv');
                    valid_card = 1;
                }
            });
                if(valid_card === 0){
                    createError("Tarjeta no Soportada para suscripcion!");
                }
        }
        //params.payment_method_option_id = value.agreements[0].merchant_accounts[0].payment_method_option_id;
        params.payment_method_id = value.payment_method_id;
        params.issuer_id = value.issuer.id;
    }else{
        createError("Tarjeta no soportada");
    } 
    console.log(params.payment_method_id);
}



function createError(msg){

    $('#errormsg').empty().append('<div class="alert alert-danger" role="alert">'+msg+'</div>');
}
