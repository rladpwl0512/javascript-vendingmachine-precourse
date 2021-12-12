import $ from './utils/dom.js';
import renderNavbar from './views/renderNavbar.js';
import renderProductAdd from './views/renderProductAdd.js';
import renderVendingMachine from './views/renderVendingMachine.js';
import renderProductPurchase from './views/renderProductPurchase.js';
import HandleProductAdd from './controllers/HandleProductAdd.js';
import HandleVendingMachine from './controllers/HandleVendingMachine.js';
import HandleProductPurchase from './controllers/HandleProductPurchase.js';

function VendingMachineApp() {
  this.init = () => {
    $('head').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="./src/css/style.css">');
    renderNavbar();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'product-add-menu') {
      renderProductAdd();
      new HandleProductAdd();
    }

    if (e.target.id === 'vending-machine-manage-menu') {
      renderVendingMachine();
      new HandleVendingMachine();
    }

    if (e.target.id === 'product-purchase-menu') {
      renderProductPurchase();
      new HandleProductPurchase();
    }
  });
}

const app = new VendingMachineApp();
app.init();
