import { fetchApiAsync } from "./helper/fetchAPI.js";
import { fetchApiNomal } from "./helper/fetchAPI.js";

// GET with Fetch API
// fetch("https://dummyjson.com/products") // get link
//     .then(response => response.json()) // convert from json => js
//     .then(data => {
//         console.log(data.products);
//         var count = 1;
//         let htmls = "";
//         data.products.forEach(element => {
//             htmls += `
//                 <div class="product-list">
//                     <img src=" ${element.thumbnail} "alt="${element.title}" >
//                     <h3>${count++} ${". "}  ${element.description}</h3>
//                     <p>${element.price}</p>
//                 </div>
//             `
//         });
//         const divProducts = document.querySelector("#products");
//         divProducts.innerHTML = htmls;
//     })

// call function fetchApiAsync
fetchApiAsync("https://dummyjson.com/products")
    .then(data => {
        let htmls = "";
        const prod = data.products;
        prod.forEach((element) => {
        htmls += `
            <div class="product-list">
                <img src=" ${element.thumbnail} "alt="${element.title}" />
                <h3 class="desc">${element.description}</h3>
                <p class="price">$${element.price}</p> 
            </div> `;
        });
        const divProducts = document.querySelector("#products");
        divProducts.innerHTML = htmls;
    })


//call func Nomal ... (vẫn chưa hiểu tại sao bị Promise)
fetchApiNomal("https://dummyjson.com/products").then((data) => {
  console.log(data);
});
