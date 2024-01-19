<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case "CargarClientes":
            // Preparo el  sql
            $sql = "SELECT * FROM clientes ORDER BY cli_empresa";
            // Ejecuto el SQL guardando el resultado
            $datos = BBDD_CTRLR::Consultas($sql);
            // devuelvo a JS los datos codificados como JSON
            echo json_encode($datos);      
          
            break;  
        
            case "CargarProductos":
                // Preparo el  sql
                $sql = "SELECT * FROM productos ORDER BY prod_nombre";
                // Ejecuto el SQL guardando el resultado
                $datos = BBDD_CTRLR::Consultas($sql);
                // devuelvo a JS los datos codificados como JSON
                echo json_encode($datos);      
              
                break;  

            case "CargarSecciones":
                // Preparo el  sql
                $sql = "SELECT DISTINCT prod_seccion FROM productos ORDER BY prod_seccion";
                // Ejecuto el SQL guardando el resultado
                $datos = BBDD_CTRLR::Consultas($sql);
                // devuelvo a JS los datos codificados como JSON
                echo json_encode($datos);      
                  
                    break;  

            case "CargarPaises":
                // Preparo el  sql
                $sql = "SELECT DISTINCT prod_pais_origen FROM productos ORDER BY 1";
                // Ejecuto el SQL guardando el resultado
                $datos = BBDD_CTRLR::Consultas($sql);
                // devuelvo a JS los datos codificados como JSON
                echo json_encode($datos);      
                          
                break;  
       
    }        
}