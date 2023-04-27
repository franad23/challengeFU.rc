const $formAgregar = document.getElementById('formAgregar'); 
const $cosasCarrito = document.getElementById('cosasCarrito');
// console.log($cosasCarrito.childElementCount);
let $cbCosasCarrito;
const agregarToDo = (e) => {
    event.preventDefault();
    const articuloCarrito = document.createElement('span');
    articuloCarrito.innerHTML = `<input type="checkbox" class="cbCosasCarrito" name="cbCosasCarrito">${event.target.agregarCosas.value}` ;
    articuloCarrito.classList.add("cssProd");
    console.log(event.target.agregarCosas.value);
    console.log(typeof event.target.agregarCosas.value);
    if(event.target.agregarCosas.value !== "" && $cosasCarrito.childElementCount <= 2) {
        $cosasCarrito.appendChild(articuloCarrito);
    }
    if ($cosasCarrito.childElementCount>=3) {
        alert("Lista llena! elimina algo!");
    }
    else if (event.target.agregarCosas.value == "" && $cosasCarrito.childElementCount <= 2) {
        alert("No puedes dejar el campo agregar vacio!");
    }
    console.log($cosasCarrito.childElementCount);
    $cbCosasCarrito = document.querySelectorAll(".cbCosasCarrito");
    $formAgregar.reset();
};
$formAgregar.addEventListener('submit', agregarToDo)
const $btnEliminar = document.getElementById('btnEliminar');

console.log($cbCosasCarrito);
$btnEliminar.addEventListener('click', function() {
    $cbCosasCarrito.forEach((e) => {
        if (e.checked) {
            console.log(e.parentNode);
            e.parentNode.remove()
        }
    })
})

// botonesNumeros.forEach(boton => {
//     boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
// });




// const $formulario = document.getElementById('formulario');
// const enviarFormulario = (e) => {
//     event.preventDefault();
//     console.log(event.target.text.value, event.target.email.value, event.target.password.value);
// }
// $formulario.addEventListener('submit', enviarFormulario);





// const $cosasCarrito = document.getElementById('cosasCarrito');
// let contador = 1;
// let carritoArr = [];
// const agregarCosas = () => {    
//     const $agregarCosas = document.getElementById('agregarCosas').value;
//     // console.log($agregarCosas);
//     if ($agregarCosas !== '' && contador <= 8 ) {
//         document.getElementById('agregarCosas').value = '';
//         let productos = document.createElement("div");
//         productos.setAttribute("id", `${contador}`);
//         productos.setAttribute("class", "cssProd");
//         // productos.innerHTML = `<input type="checkbox" id="prodEnCarrito${contador}"> ${$agregarCosas}`;
//         // productos.setAttribute("id", "cssProd");
//         productos.innerHTML = `<input type="checkbox" id="prodEnCarrito${contador}" onclick="eliminar()"> ${$agregarCosas}`;
//         $cosasCarrito.insertAdjacentElement('afterbegin', productos);
//         carritoArr.push(`prodEnCarrito${contador}`);
//         contador++;
//     } 
//     if ($agregarCosas == '') {
//         alert("El campo esta vacio, tienes que agregar algo");
//     }
//     if (contador >= 9) {
//         alert("Tu carrito esta lleno! elimina algun producto");
//     }
//     console.log(carritoArr);
// }

// function eliminar (e) {
//     console.log(e);
//     const remo = document.getElementsByClassName("cssProd");
//     console.log(remo.getAttribute("id"));
// }

// const toRem = document.getElementById(e.target);
// console.log(target);
// this.addEventListener('click', () => {alert(e.target)});
// console.log(this);
// const $btnEliminar = document.getElementById('btnEliminar');
// $btnEliminar.addEventListener('click', () => {
//     carritoArr.forEach(prod => {
//         const toChild = prod.slice(-1)
//         const $child = document.getElementById(toChild); //.slice(-1)
//         const $childs = document.querySelectorAll(".prodEnCarrito");
//         const $cbProdEnCarrito = document.getElementById(prod).checked;
//         let remCarritoArr = 0;
//         console.log($childs);
//         console.log($child);
//         console.log($cbProdEnCarrito);
//         // console.log(prod.slice(-1));
//         if ($cbProdEnCarrito) {
//             $child.remove();
//             contador--;
//             remCarritoArr = carritoArr.indexOf(prod);
//             carritoArr.splice(remCarritoArr, 1)

//         }
        
//     })
// })

// const $btnEliminar = document.getElementById('btnEliminar');
// $btnEliminar.addEventListener('click', () => {
//     carritoArr.forEach(prod => {
//         const toChild = prod.slice(-1)
//         const $child = document.getElementById(toChild); //.slice(-1)
//         const $cbProdEnCarrito = document.getElementById(prod).checked;
//         let remCarritoArr = 0;
//         // console.log($child);
//         // console.log($cbProdEnCarrito);
//         // console.log(prod.slice(-1));
//         if ($cbProdEnCarrito) {
//             $child.remove();
//             contador--;
//             remCarritoArr = carritoArr.indexOf(prod);
//             carritoArr.splice(remCarritoArr, 1)
//             console.log(remCarritoArr);
//         }
        
//     })
// })
