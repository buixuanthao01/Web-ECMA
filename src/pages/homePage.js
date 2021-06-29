//object literal
import{ $ } from '../utils';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage = {
    //thuộc tính 
    render(){
            return/*html*/`
            ${Header.render()}

            <div class="bg-gray-200">Banner</div>
            <section>
                <div class="grid grid cols-3">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <a href="#/about">Sản phẩm 1</a>
                </div>
                <button id="btn">Click</button>
            </section>
            ${Footer.render()}
            `;
    },
    afterRender(){
        $('#btn').addEventListener('click', function(){
            console.log('click success');
        })
    }
}
export default HomePage;