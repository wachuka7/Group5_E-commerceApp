//fetch products from API
const productsUrl = 'https://fakestoreapi.com/products';

function fetchProducts() {
    fetch(productsUrl)
        .then(response => response.json())
        .then(products => {
            console.log(products);
            displayData(products);
        })
}
// const title=document.createElement('h1')
// title.textContent='Store'
// document.body.appendChild(title)


function displayData(products) {
    products.forEach(product => {
        const displayedData = document.createElement('div');
        displayedData.id = 'displayed-data';
        displayedData.innerHTML = `
        <img src=${product.image} alt=${product.image}/>
        <h3>${product.title}</h3>
        <p><span>price:${product.price}</span></p>
        `;
        document.querySelector('.data-container').appendChild(displayedData);
        const viewButton = document.createElement('button')
        viewButton.id = 'view-button'
        viewButton.textContent = 'View'
        displayedData.appendChild(viewButton)
        viewButton.addEventListener('click', () => {
            displayAllDetails(product)
        })
    });
}

function displayAllDetails(product) {

    const productDetails = document.createElement('div');
    productDetails.id = 'product-details'

    const dataContainer = document.querySelector('.data-container');
    dataContainer.style.display = "none";
    // dataContainer.innerHTML = " ";


    //create exit button
    const exitBtn = document.createElement('button');
    exitBtn.textContent = "X";
    exitBtn.id = "exit-button ";
    exitBtn.style.display.width = "50px "
    exitBtn.style.display.height = "50px "


    productDetails.innerHTML = `
    <img src=${product.image} alt=${product.image}/>
    <h3>${product.title}</h3>
    <h4>${product.category}</h4>
    <p>${product.description}</p>
    <p><span><strong>Price: ksh. ${product.price}</strong></span></p>
    <p> <strong>Rating: ${product.rating.rate}</strong></p>
    `;
    document.querySelector('.details-container').innerHTML = "";
    //append details and exit button to the  DOM
    document.querySelector('.details-container').appendChild(exitBtn)
    document.querySelector('.details-container').appendChild(productDetails)
        //exit modal when clicked
    exitBtn.addEventListener('click', () => {
        document.querySelector('.details-container').style.display = "none";
        document.querySelector('.data-container').style.display = "grid"
    })
}
fetchProducts();