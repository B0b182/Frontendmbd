mostrarProductos = () => {
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('llenarpro');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data);

        data.forEach(element => {
            table.innerHTML += `
            
            <tr>
            <th>${element._id}</th>
            <td>${element.producto}</td>
            <td>${element.codigo}</td>
            <td>${element.proveedor}</td>
             <td>${element.unidades}</td>
             <td>${element.ingreso}</td>
              <td>
              <button type="button" class="btn btn-primary" onclick='window.location="/form_producto.html?id=${element._id}"'>Editar</button>
              <button type="button" class="btn btn-danger" onclick="Eliminarproducto('${element._id}')">Eliminar</button>
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

Eliminarproducto = (id) => {
    let request = sendRequest('productos/' + id, 'DELETE', '');
    request.onload = () => {
        mostrarProductos();

    }
}

guardarproducto = () => {

    let pro = document.getElementById('productoC').value
    let cod = document.getElementById('codigoC').value
    let prv = document.getElementById('proveedorC').value
    let uni = document.getElementById('unidadesC').value
    let ing = document.getElementById('ingresoC').value

    let data = { 'producto': pro, 'codigo': cod, 'proveedor': prv, 'unidades': uni, 'ingreso': ing, }
    let request = sendRequest('productos/', 'POST', data);
    request.onload = () => { window.location = 'productos.html' }

    request.onerror = () => {
        alert("error al guardar los datos")
    }
}


cargardatos = (id) => {
    let request = sendRequest('productos/' + id, 'GET', '');

    let pro = document.getElementById('productoC')
    let cod = document.getElementById('codigoC')
    let prv = document.getElementById('proveedorC')
    let uni = document.getElementById('unidadesC')
    let ing = document.getElementById('ingresoC')


    request.onload = () => {
        let data = request.response;
        pro.value = data.producto
        cod.value = data.codigo
        prv.value = data.proveedor
        uni.value = data.unidades
        ing.value = data.ingreso

        console.log(data);
    }


    request.onerror = () => {
        alert("error al cargar los datos")

    }


}




editarproducto = (id) => {

    let pro = document.getElementById('productoC').value
    let cod = document.getElementById('codigoC').value
    let prv = document.getElementById('proveedorC').value
    let uni = document.getElementById('unidadesC').value
    let ing = document.getElementById('ingresoC').value

    let data = { 'producto': pro, 'codigo': cod, 'proveedor': prv, 'unidades': uni, 'ingreso': ing, }
    let request = sendRequest('productos/' + id, 'PUT', data);
    request.onload = () => { window.location = 'productos.html' }

    request.onerror = () => {
        alert("error al guardar los datos")


    }
}