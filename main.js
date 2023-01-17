const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');



// ---------------Funciones del navbar----------------------

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobilepMenu);
cartIcon.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu(){
  const isShoppingCartClosed = shoppingCart.classList.contains('inactive')

  if(!isShoppingCartClosed){
    shoppingCart.classList.add('inactive')
  };

  desktopMenu.classList.toggle('inactive')
};


function toggleMobilepMenu(){
  const isShoppingCartClosed = shoppingCart.classList.contains('inactive')

  if(!isShoppingCartClosed){
    shoppingCart.classList.add('inactive')
  };

  mobileMenu.classList.toggle('inactive');
};


function toggleShoppingCart(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  };

  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  };

  shoppingCart.classList.toggle('inactive');
};



// ---------------------Productos del Yard Sale-------------------


// Creación de Objetos

class Products{

  constructor(name, price, image){

    this.name = name,
    this.price = price,
    this.image = image
  }
};

// Almacenamiento y adición de nuevos productos

const productList = [];

productList.push(new Products('bike', '200', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'));
productList.push(new Products('compu', '242300', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'));
productList.push(new Products('car', '20235530', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'));


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
  
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