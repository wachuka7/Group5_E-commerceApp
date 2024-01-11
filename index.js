//fetch products from API
const productsUrl= 'https://fakestoreapi.com/products';
function fetchProducts(){
    fetch(productsUrl)
    .then(response=>response.json())
    .then(products=>{ 
            console.log(products);
            displayData(products);  
})
}
function displayData(products){
    products.forEach(product=>{
        const displayedData=document.createElement('div');
        displayedData.id='displayed-data';
        displayedData.innerHTML=`
        <img src=${product.image} alt=${product.image}/>
        <h3>${product.title}</h3>
        <p><span>price:${product.price}</span></p>
        `;
        document.querySelector('.data-container').appendChild(displayedData);
        const viewButton=document.createElement('button')
        viewButton.id='view-button'
        viewButton.textContent='View'
        displayedData.appendChild(viewButton)
        viewButton.addEventListener('click', (product)=> {
            console.log('clicked')
        displayAllDetails(product)
    })
    });
}
function displayAllDetails(product){
    const productDetails=document.createElement('div');
    productDetails.id='product-details'
    productDetails.innerHTML=`
    <img src=${product.image} alt=${product.image}/>
    <h3>${product.title}</h3>
    <h4>${product.category}</h4>
    <p>${product.description}</p>
    <p><span>${product.price}</span> <span>${product.rating}</span></p>
    `;
    
    document.querySelector('.details-container').appendChild(productDetails)
}
fetchProducts();

   