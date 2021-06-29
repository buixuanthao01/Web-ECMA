import HomePage from './pages/homePage';
import AboutPage from './pages/about';
import ProductPage from './pages/product';
import { parseRequesUrl, $ } from './utils';
import ProductDetailPage from './Pages/product-detail';

const routes = {
    '/': HomePage,
    '/about': AboutPage,
    '/product': ProductPage,
    '/productdetail': ProductDetailPage,
}
const router = () => {
    const { resource, id } = parseRequesUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : "");
    //truy cập vào phần tử trong object routes
    console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : 'Error404Page';
    $('#root').innerHTML = page.render();
    console.log(page);
    if (page.afterRender) {
        page.afterRender();
    }

}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);