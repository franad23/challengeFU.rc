const $btn = document.querySelectorAll('.btn');
// const $badge = document.querySelectorAll(".badge")
const $badgeCart = document.getElementById('badgeCart')
const $itemsInCart = document.getElementById('itemsInCart');
$btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.firstElementChild.innerHTML > 0) {
            console.log(e.target.firstElementChild.innerHTML);
            let actual = parseInt(e.target.firstElementChild.innerHTML) - 1;
            e.target.firstElementChild.innerHTML = actual;
            let actualBadgeCart = parseInt($badgeCart.innerHTML)+1;
            console.log(actualBadgeCart);
            if (actualBadgeCart > 9) {
                $badgeCart.innerHTML = '9+';
            } else {
                $badgeCart.innerHTML = actualBadgeCart;
            }
            let itemToCart = e.target.id.toString();
            let itemToCartContainer = document.createElement('div');
            itemToCartContainer.classList.add("itemInCart")
            let textItemToCard = `<div  class="itemInCartName">${itemToCart}</div>
            <div class="btnCartItemsContainer">
            <button class="btnCartItems btn-subtract">-</button>
            <span class="itemCounter">1</span>
            <button class="btnCartItems btn-plus">+</button>
            </div>`
            const $itemInCart = document.querySelectorAll('.itemInCart')
            const $itemInCartName = document.querySelectorAll('.itemInCartName')
            const $itemCounter = document.querySelectorAll('.itemCounter');
            // console.log($itemCounter.forEach(item => {
            //     console.log(item.innerHTML);
            // }));
            console.log(itemToCart);
            console.log($itemInCartName.forEach(item => console.log(item.innerHTML) ));
            
            if ( itemToCart == $itemInCartName.forEach(item => console.log(item.innerHTML) )) {
                alert('Hola!')
            }
            // $itemCounter.forEach(itemCounter => {
            //     console.log(itemCounter.innerHTML);
            // })

            itemToCartContainer.innerHTML = textItemToCard;
            $itemsInCart.appendChild(itemToCartContainer);
        }
    })
})


/* <div class="itemInCart">
        <div  id="itemInCart"></div>
        <div class="btnCartItemsContainer"><button class="btnCartItems"
        id="btn-subtract">-</button>0<button class="btnCartItems" id="btn-plus">+</button>
        </div>
</div> */







// botonesNumeros.forEach(boton => {
    // const $prueba = document.getElementById('prueba');
    
    // $prueba.addEventListener('click', (e) => {
    //     console.log(e.target.innerHTML);
    //     let actual = parseInt(e.target.innerHTML) - 1;
    //     e.target.innerHTML = actual;
    //     console.log(actual);
    // })
//     boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
// });

// $btnEliminar.addEventListener('click', function() {
//     $cbCosasCarrito.forEach((e) => {
//         if (e.checked) {
//              console.log(e.parentNode);
//             e.parentNode.remove()
//         }
//     })
// })