mostrarDatos = () => {
    let request = sendRequest('clientes', 'GET', '');
    let table = document.getElementById('llenarcli');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data);

        data.forEach(element => {
            table.innerHTML += `
            
            <tr>
            <th>${element._id}</th>
            <td>${element.nombres}</td>
            <td>${element.apellidos}</td>
            <td>${element.cedula}</td>
             <td>${element.correo}</td>
             <td>${element.telefono}</td>
              <td>${element.direccion}</td>
              <td>
              <button type="button" class="btn btn-primary" onclick='window.location="/form_clientes.html?id=${element._id}"'>Editar</button>
              <button type="button" class="btn btn-danger" onclick="EliminarClientes('${element._id}')">Eliminar</button>
              </td>
              

            </tr>
            
            
            `

        });

        request.onerror = () => {
            table.innerHTML = ` <tr> 

            <td colspan=""> Error al traer los datos
            
            </td>
            
            
            </tr>


            `

        }

    }

}


EliminarClientes = (id) => {
    let request = sendRequest('clientes/' + id, 'DELETE', '');
    request.onload = () => {
        mostrarDatos();

    }
}


guardarClientes = () => {

    let nom = document.getElementById('nombresC').value
    let ape = document.getElementById('apellidosC').value
    let ced = document.getElementById('cedulaC').value
    let cor = document.getElementById('correoC').value
    let tel = document.getElementById('telefonoC').value
    let dir = document.getElementById('direccionC').value
    let data = { 'nombres': nom, 'apellidos': ape, 'cedula': ced, 'correo': cor, 'telefono': tel, 'direccion': dir, }
    let request = sendRequest('clientes/', 'POST', data);
    request.onload = () => { window.location = 'clientes.html' }

    request.onerror = () => {
        alert("error al guardar los datos")
    }


}


cargardatos = (id) => {
    let request = sendRequest('clientes/' + id, 'GET', '');

    let nom = document.getElementById('nombresC')
    let ape = document.getElementById('apellidosC')
    let ced = document.getElementById('cedulaC')
    let cor = document.getElementById('correoC')
    let tel = document.getElementById('telefonoC')
    let dir = document.getElementById('direccionC')

    request.onload = () => {
        let data = request.response;
        nom.value = data.nombres
        ape.value = data.apellidos
        ced.value = data.cedula
        cor.value = data.correo
        tel.value = data.telefono
        dir.value = data.direccion
        console.log(data);
    }


    request.onerror = () => {
        alert("error al guardar los datos")

    }


}


editarClientes = (id) => {

    let nom = document.getElementById('nombresC').value
    let ape = document.getElementById('apellidosC').value
    let ced = document.getElementById('cedulaC').value
    let cor = document.getElementById('correoC').value
    let tel = document.getElementById('telefonoC').value
    let dir = document.getElementById('direccionC').value
    let data = { 'nombres': nom, 'apellidos': ape, 'cedula': ced, 'correo': cor, 'telefono': tel, 'direccion': dir, }
    let request = sendRequest('clientes/' + id, 'PUT', data);
    console.log(request);

    request.onload = () => { window.location = 'clientes.html' }

    request.onerror = () => {
        alert("error al guardar los datos")
    }


}
