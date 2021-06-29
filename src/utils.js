export const parseRequesUrl = () =>{
    const url = window.location.hash.toLocaleLowerCase(); //lấy đường dẫn /#/product
    console.log(url);
    const request = url.split('/'); //tách phần tử thành mảng ["#", "product" ,"1"]
    console.log(request);
    return{
        resource: request[1],
        id: request[2],
        action: request[3]
    }
    
}
export const $ = selector =>{
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements
}

