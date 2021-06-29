import {parseRequesUrl} from '../utils';
import products from '../db/data';

const ProductDetailPage = {
    render(){
        const {id} = parseRequesUrl(); //lấy ID trên url
        const result = products.find(product =>{
            return product.id === id
        })
        return /*html*/`
            <div class="grid grid-cols-2">
                <div class="">
                    <img src="${result.image}">
                </div>
                <div>
                    <h1>${result.name}</h1>
                </div>
            </div>
        `

    }
}
export default ProductDetailPage;