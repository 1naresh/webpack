import homeTpl from './templates/home.html';
import productsTpl from './templates/products.html';
import shapesTpl from './templates/shapes.html';
import LShapeTpl from './templates/lshape.html';
import UShapeTpl from './templates/UShape.html';
import parallelShapeTpl from './templates/parallelShape.html';
import straightShapeTpl from './templates/straightShape.html';
import wordrobesTpl from './templates/wordrobes.html'; 
import fulllInteriorsTpl from './templates/fulllInteriors.html'; 
import registerTpl from './templates/register.html'; 
import phoneVerifyTpl from './templates/phoneVerify.html'; 
import finalTpl from './templates/final.html'; 
import sheetsTpl from './templates/sheets.html'; 

import homeCtrl from './controllers/home';
import productsCtrl from './controllers/products';
import shapesCtrl from './controllers/shape';
import kitchenCtrl from './controllers/kitchen';
import wordrobesCtrl from './controllers/wordrobes';
import bedCtrl from './controllers/bed';
import registerCtrl from './controllers/register';
import phoneVerifyCtrl from './controllers/phoneVerify';
import finalCtrl from './controllers/final';
import fulllInteriorsCtrl from './controllers/fulllInteriors';
import kitchenSheetsCtrl from './controllers/kitchenSheets';
import bedroomSheetsCtrl from './controllers/bedroomSheets';
function config($stateProvider,$urlRouterProvider){
    $stateProvider
    .state({
        name:"home",
        url:"/home",
        views:{
            "main":{
                template:homeTpl,
                controller:homeCtrl
            }
        }
    })
    .state({
        name:"products",
        url:"/products",
        views:{
            "main":{
                template:productsTpl,
                controller:productsCtrl
            }
        }
    })
    .state({
        name:"shapes",
        url:"/shapes",
        views:{
            "main":{
                template:shapesTpl,
                controller:shapesCtrl
            }
        }
    })
    .state({
        name:"LShape",
        url:"/LShape",
        views:{
            "main":{
                template:LShapeTpl,
                controller:kitchenCtrl
            }
        }
    })
    .state({
        name:"UShape",
        url:"/UShape",
        views:{
            "main":{
                template:UShapeTpl,
                controller:kitchenCtrl
            }
        }
    })
    .state({
        name:"parallelShape",
        url:"/parallelShape",
        views:{
            "main":{
                template:parallelShapeTpl,
                controller:kitchenCtrl
            }
        }
    })
    .state({
        name:"straightShape",
        url:"/straightShape",
        views:{
            "main":{
                template:straightShapeTpl,
                controller:kitchenCtrl
            }
        }
    })
    .state({
        name:"wordrobes",
        url:"/wordrobes",
        views:{
            "main":{
                template:wordrobesTpl,
                controller:wordrobesCtrl
            }
        }
    })
    .state({
        name:"singleBed",
        url:"/singleBed",
        views:{
            "main":{
                template:straightShapeTpl,
                controller:bedCtrl
            }
        }
    })
    .state({
        name:"doubleBed",
        url:"/doubleBed",
        views:{
            "main":{
                template:LShapeTpl,
                controller:bedCtrl
            }
        }
    })
    .state({
        name:"tripleBed",
        url:"/tripleBed",
        views:{
            "main":{
                template:UShapeTpl,
                controller:bedCtrl
            }
        }
    })
    .state({
        name:"register",
        url:"/register",
        views:{
            "main":{
                template:registerTpl,
                controller:registerCtrl
            }
        }
    })
    .state({
        name:"phoneVerify",
        url:"/phoneVerify",
        views:{
            "main":{
                template:phoneVerifyTpl,
                controller:phoneVerifyCtrl
            }
        }
    })
    .state({
        name:"final",
        url:"/final",
        views:{
            "main":{
                template:finalTpl,
                controller:finalCtrl
            }
        }
    })
    .state({
        name:"fullInteriors",
        url:"/fullInteriors",
        views:{
            "main":{
                template:fulllInteriorsTpl,
                controller:fulllInteriorsCtrl
            }
        }
    })
    .state({
        name:"kitchenSheets",
        url:"/kitchenSheets",
        views:{
            "main":{
                template:sheetsTpl,
                controller:kitchenSheetsCtrl
            }
        }
    })
    .state({
        name:"bedroomSheets",
        url:"/bedroomSheets",
        views:{
            "main":{
                template:sheetsTpl,
                controller:bedroomSheetsCtrl
            }
        }
    })
    $urlRouterProvider.otherwise("/home")
}
config.$inject=["$stateProvider","$urlRouterProvider"]
export default config; 