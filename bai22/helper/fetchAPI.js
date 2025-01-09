export const fetchApiNomal = (url) => {
    const result = fetch(url) // get link
    .then(response => response.json()) // convert from json => js
    .then(data => {
        return data;
    })
    return result;
}

//GET with Async/Await
//function of Async/Await method
export const fetchApiAsync = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
}