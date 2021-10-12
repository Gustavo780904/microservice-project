$(document).ready(function () {
    // requestDarksky ();
    // insertGoogleScript();
    // initGoogleAPI();
    // exibeTabela(data);
})
function init(){
    console.log(">>> INIT...")
}
    //Requisição do clima
function requestDarksky (){
    // var apiKey = 'AIzaSyCNbnbPk4j0pu8zrMkZtbsuqS0mwhr3NfI',
    //     url = 'https://api.darksky.net/forecast/',
    //     lati = '-18.9127749',
    //     longi = '-48.2755227'
    //     opcoes = '?exclude=minutely,hourly,daily,flags,alerts'

    // api_call = url + apiKey + "/" + lati + "," + longi + opcoes;
   var api_call = 'https://api.darksky.net/forecast/8eeafa93fa171bb970bfac9b03caa3a3/-18.9127749,-48.2755227?exclude=minutely,hourly,daily,flags,alerts';
    // console.log('melsaco')
    // console.log('teste')
    console.log("==>sky")

    $.get(api_call, function(data){
        // var clima = JSON.parse(data);
        // var clima = userData.data.userList;
        // var clima = JSON.parse(JSON.stringify(userData));
        // console.log(clima)
        console.log(data)
    })
}

    // PARTE DO GOOGLE:
function insertGoogleScript() {
    console.log("==>script")

    var google_api = document.createElement('script'),
        api_key = 'AIzaSyDKDfGrENoS1zeo4dyLT4gLGekkULoWbTE';
    // Inject the script for Google's API and reference the initGoogleAPI
    // function as a callback.
    google_api.src = 'https://maps.googleapis.com/maps/api/js?key=' + api_key + '&callback=initGoogleAPI&libraries=places,geometry';
    document.body.appendChild(google_api);
}

// SearchBox Method
function initGoogleAPI() {
    console.log("==>teste")
    var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city-search"));
    autocomplete.addListener('places_changed', function () {
        var place = autocomplete.getPlaces()[0];
        latitude = place.geometry.location.lat();
        console.log("A= "+latitude);
        longitude = place.geometry.location.lng();
        console.log("A= "+longitude);
        sessionStorage.setItem("pegaLat", latitude);
        sessionStorage.setItem("pegaLong", longitude);
        console.log($('#city-search').val());
        sessionStorage.setItem("pegaCid", JSON.stringify($('#city-search').val()));
    });
}


    function exibeTabela(data) {
        //apaga atabela para não repetir
        document.querySelectorAll("table tbody tr").forEach(function (linha) { linha.remove() })
    var tab = document.getElementById("exibeTabela")
    // var tbody = document.getElementById("tbody")
        data.forEach(cliente => {
    
                var linhaTab = document.createElement("tr")
                var colNome = document.createElement("td")
                var colCep = document.createElement("td")
                var colRua = document.createElement("td")
                var colBairro = document.createElement("td")
                var colCidade = document.createElement("td")
                var colEstado = document.createElement("td")
                var colIbge = document.createElement("td")
                customersNome = document.createTextNode(cliente.nome)
                customersCep = document.createTextNode(cliente.cep)
                customersRua = document.createTextNode(cliente.rua)
                customersBairro = document.createTextNode(cliente.bairro)
                customersCidade = document.createTextNode(cliente.cidade)
                customersEstado = document.createTextNode(cliente.estado)
                customersIbge = document.createTextNode(cliente.ibge)
                colNome.appendChild(customerNome)
                colCep.appendChild(customerCep)
                colRua.appendChild(customerRua)
                colBairro.appendChild(customerBairro)
                colCidade.appendChild(customerCidade)
                colEstado.appendChild(customerEstado)
                colIbge.appendChild(customerIbge)
                linhaTab.appendChild(colNome)
                linhaTab.appendChild(colCep)
                linhaTab.appendChild(colRua)
                linhaTab.appendChild(colBairro)
                linhaTab.appendChild(colCidade)
                linhaTab.appendChild(colEstado)
                linhaTab.appendChild(colIbge)
                tab.appendChild(linha)
            }
    
        )
    }

