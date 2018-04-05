import homeTpl from './templates/home.html';
import productsTpl from './templates/products.html';
import shapesTpl from './templates/shapes.html';
import homeCtrl from './controllers/home';
import productsCtrl from './controllers/products';
import shapesCtrl from './controllers/shapes';
function config($stateProvider,$urlRouterProvider){
    $stateProvider.state({
        name:"home",
        url:"/home",
        template: homeTpl,
        controller: homeCtrl
    })
    .state({
        name:'products',
        url:"/products",
        template:productsTpl,
        controller:productsCtrl
    })
    .state({
        name:'shapes',
        url:"/shapes",
        template:shapesTpl,
        controller: shapesCtrl
    })
}
export default config;