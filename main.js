const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const closeProductDetailBtn = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#productDetail');



// ---------------Funciones del navbar----------------------

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu(){
  const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
  const isProductDetailClosed = productDetail.classList.contains('inactive');

  if(!isShoppingCartClosed){
    shoppingCart.classList.add('inactive');
  };

  if(!isProductDetailClosed){
    productDetail.classList.add('inactive');
  };

  desktopMenu.classList.toggle('inactive');
};


function toggleMobileMenu(){
  const isProductDetailClosed = productDetail.classList.contains('inactive');
  const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
  

  if(!isShoppingCartClosed){
    shoppingCart.classList.add('inactive');
  };

  if(!isProductDetailClosed){
    productDetail.classList.add('inactive');
  };

  mobileMenu.classList.toggle('inactive');
};


function toggleShoppingCart(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetail.classList.contains('inactive');


  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  };

  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  };

  if(!isProductDetailClosed){
    productDetail.classList.add('inactive');
  };

  shoppingCart.classList.toggle('inactive');
};



// ---------------------Productos del Yard Sale-------------------


// Creación de Objetos

class Products{

  constructor(name, price, image, info){

    this.name = name,
    this.price = price,
    this.image = image,
    this.info = info
  }
};

// Almacenamiento y adición de nuevos productos

const productList = [];

productList.push(new Products('Bike', '200', 'https://cdn.shopify.com/s/files/1/0570/8021/7797/products/2021_BREEZER_MIDTOWN_15_SATIN_SILVER_FRONT_1024x1024.jpg?v=1641399739', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Macbook', '1000', 'https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-171890_823x.jpg?v=1660440284', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Car', '20000', 'https://media.zigcdn.com/media/model/2021/Nov/q5-2021-1_360x240.jpg', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Bike', '200', 'https://cdn.shopify.com/s/files/1/0570/8021/7797/products/2021_BREEZER_MIDTOWN_15_SATIN_SILVER_FRONT_1024x1024.jpg?v=1641399739', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Macbook', '1000', 'https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-171890_823x.jpg?v=1660440284', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Car', '20000', 'https://media.zigcdn.com/media/model/2021/Nov/q5-2021-1_360x240.jpg', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Bike', '200', 'https://cdn.shopify.com/s/files/1/0570/8021/7797/products/2021_BREEZER_MIDTOWN_15_SATIN_SILVER_FRONT_1024x1024.jpg?v=1641399739', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Macbook', '1000', 'https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-171890_823x.jpg?v=1660440284', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Car', '20000', 'https://media.zigcdn.com/media/model/2021/Nov/q5-2021-1_360x240.jpg', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));

productList.push(new Products('Bike', '200', 'https://cdn.shopify.com/s/files/1/0570/8021/7797/products/2021_BREEZER_MIDTOWN_15_SATIN_SILVER_FRONT_1024x1024.jpg?v=1641399739', 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'));


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);
  
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
  
    const productInfoDiv = document.createElement('div');
  
  
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = '$' + product.price;
    const productInfoName = document.createElement('p');
    productInfoName.innerText = product.name;
  
    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);
  
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList)




// --------------productDetail--------------------


// Crear product detail

    // <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    // <div class="product-info">
    //   <p>$35,00</p>
    //   <p>Bike</p>
    //   <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    //   <button class="primary-button add-to-cart-button">
    //     <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    //     Add to cart
    //   </button>
    // </div>

// function renderProductDetail(arr){
//   for(product of arr){
//     const productImg = document.createElement('img');
//     productImg.setAttribute('src', product.image);


//     const productInfo = document.createElement('div');
//     productInfo.classList.add('product-info');
  
  
//     const productInfoPrice = document.createElement('p');
//     productInfoPrice.innerText = '$' + product.price;
//     const productInfoName = document.createElement('p');
//     productInfoName.innerText = product.name;
//     const productInfoText = document.createElement('p');
//     productInfoText.innerText = product.info;
  
  
  
//     const cartButton = document.createElement('button');
//     cartButton.classList.add('primary-button add-to-cart-button')
//     const cartIcon = document.createElement('img');
//     cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg')
  
//     cartButton.appendChild(cartIcon);

//     productInfo.appendChild(productInfoPrice)
//     productInfo.appendChild(productInfoName)
//     productInfo.appendChild(productInfoText)


//     productDetail.appendChild(productImg)
//     productDetail.appendChild(productInfo)
//   }
// }


// Abrir product detail


function openProductDetail(){
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCart.classList.add('inactive');


  // renderProductDetail(productList)
  productDetail.classList.remove('inactive');
}


// Cerrar product detail
closeProductDetailBtn.addEventListener('click', closeProductDetail);


function closeProductDetail(){
  productDetail.classList.add('inactive');
};
