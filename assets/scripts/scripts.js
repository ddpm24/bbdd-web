function fMostrarClientes(){
    // Pedir los clientes a la base de datos
        // crear la URL con la peticion
        // El formato es: programa_a_ejecutar ? nombre_de_variable = Valor_variabe
        const URL = 'assets/php/servidor.php?peticion=CargarClientes';
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
    //  y cuando los tenga postrarlos en el section
        let html="";
        for(i=0;i<data.length;i++){
            html += "<div><p>" + data[i].cli_empresa +"</p><p>"+  data[i].cli_direccion +"</p></div>";
        }

        document.querySelector("section").innerHTML = html;

    })
}

function fMostrarProductos(){
    const URL = 'assets/php/servidor.php?peticion=CargarProductos';

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
//  y cuando los tenga postrarlos en el section
    let html="";
    for(i=0;i<data.length;i++){
        html += "<div><p>" + data[i].prod_nombre +"</p><p>"+  data[i].prod_precio +"</p></div>";
    }

    document.querySelector("section").innerHTML = html;
})
}

function fMostrarSecciones(){
    const URL = 'assets/php/servidor.php?peticion=CargarSecciones';

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
//  y cuando los tenga postrarlos en el section
    let html="";
    for(i=0;i<data.length;i++){
        html += "<div><p>" + data[i].prod_seccion + "</p></div>";
    }

    document.querySelector("section").innerHTML = html;
}) 
}

function fMostrarPaises(){
    const URL = 'assets/php/servidor.php?peticion=CargarPaises';

    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
//  y cuando los tenga postrarlos en el section
    let html="";
    for(i=0;i<data.length;i++){
        html += "<div><p>" + data[i].prod_pais_origen +"</p></div>";
    }

    document.querySelector("section").innerHTML = html;
}) 
}