/*
var portalUserMobile = {{portal.user.mobile}}
var portalName = {{portal.name}}
var portalCurrentPage = {{portal.current_page}}


*/





if(portalName == "PBA") {
    //Redireccionar a DTD si es 8, y a CF si es 9
    if(portalUserMobile == 8) {
        window.location.replace("http://att.dtd.productos-iot.mx/es-LA/support/tickets");
        alert("Redireccionando a portal de DTD, volver a iniciar sesión si lo pide")
    } else if (portalUserMobile == 9) {
        window.location.replace("http://att.cf.productos-iot.mx/es-LA/support/tickets");
        alert("Redireccionando a portal de CF, volver a iniciar sesión si lo pide") 
    }




} else if(portalName == "Door to Door") {

    // Redireccionar a PBA si es < 4, y a CF si es 9
    if(portalUserMobile < 4) {
        window.location.replace("http://att.pba.productos-iot.mx/es-LA/support/tickets");
    	alert("Redireccionando a portal de PBA, volver a iniciar sesión si lo pide")
    } else if (portalUserMobile == 9) {
        window.location.replace("http://att.cf.productos-iot.mx/es-LA/support/tickets");
        alert("Redireccionando a portal de CF, volver a iniciar sesión si lo pide") 
    }







}else if(portalName == "Control Flotilla") {

    //Redireccionar a PBA si es <4, y a DTD si es 8
    if(portalUserMobile < 4) {
        window.location.replace("http://att.pba.productos-iot.mx/es-LA/support/tickets");
    	alert("Redireccionando a portal de PBA, volver a iniciar sesión si lo pide")
    } else if (portalUserMobile == 8) {
		window.location.replace("http://att.dtd.productos-iot.mx/es-LA/support/tickets");
        alert("Redireccionando a portal de DTD, volver a iniciar sesión si lo pide")
    }


//Esconder y poblar tickets

if(portalCurrentPage == "submit_ticket"){
    prellenarCF()
}
esconderCF()

}

function esconderCF(){
    jQuery("#helpdesk_ticket_ticket_type").parent().parent().hide();  
    jQuery("#helpdesk_ticket_custom_field_cf_dn_1721157").parent().parent().hide();  
    jQuery("#helpdesk_ticket_custom_field_cf_sim_1721157").parent().parent().hide();
    jQuery("#helpdesk_ticket_custom_field_cf_imei_1721157").parent().parent().hide();
    jQuery("#helpdesk_ticket_custom_field_cf_marca100775_1721157").parent().parent().hide();  
    jQuery("#helpdesk_ticket_custom_field_cf_tipo_de_cliente_1721157").parent().parent().hide();  
    jQuery("#helpdesk_ticket_custom_field_cf_fecha_de_activacin_1721157").parent().parent().hide();  
    jQuery("#helpdesk_ticket_custom_field_cf_equipos_instalados_1721157").parent().parent().hide();  
}

function prellenarCF() {
    jQuery("#helpdesk_ticket_ticket_type").val("SD");  
    jQuery("#helpdesk_ticket_custom_field_cf_dn_1721157").val("0");
    jQuery("#helpdesk_ticket_custom_field_cf_sim_1721157").val("0");
    jQuery("#helpdesk_ticket_custom_field_cf_imei_1721157").val("0");
    jQuery("#helpdesk_ticket_custom_field_cf_tipo_de_cliente_1721157").val("Rojo"); 
    jQuery("#helpdesk_ticket_custom_field_cf_fecha_de_activacin_1721157").val("SD");
    jQuery("#helpdesk_ticket_custom_field_cf_confirmado_por_mesa_de_ayuda_1721157").parent().parent().hide();    
    
    jQuery("#helpdesk_ticket_custom_field_cf_marca100775_1721157").val("Apple");  
    jQuery("#helpdesk_ticket_custom_field_cf_marca100775_1721157").change();  
    setTimeout(() => { jQuery("#helpdesk_ticket_custom_field_cf_modelo688253_1721157").val("iPhone 5C Azul 16GB");  }, 500);   
}

function esconderDTD(){

}

function prellenarDTD(){

}

function esconderPBA(){

}

function prellenarPBA(){
    
}