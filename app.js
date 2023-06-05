//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
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = ` 

            <div class="card text-center mb-2">
                <div class="">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger mt-1 mb-1" name="delete">Delete</a>
                </div>
            </div>
            </div>
        `;
    productList.appendChild(element);
    this.resetForm();
  }
  resetForm(){
        document.getElementById('product-form').reset();
        
  }


  deleteProduct(element) {
    if(element.name === 'delete'){
        element.parentElement.parentElement.remove();
            this.showMessage("Producto Eliimnado", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement('div');
    div.className = `alert alert-${cssClass} mt-2` ;
    div.appendChild(document.createTextNode(message));
    //showing in DOM
      const container = document.querySelector('.container');
      const app = document.querySelector('#App');
      container.insertBefore(div, app);
      setTimeout(function () { 
        document.querySelector('.alert').remove();
       }, 1000)

  }
}

//DOM Events

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

     const product = new Product(name, price, year);
        const ui =  new UI();

        if(name === '' || price ==='' || year === ''){
        return ui.showMessage('Complete los campos', 'danger');

        }

        ui.addProduct(product);
        ui.resetForm();
        ui.showMessage('Producto Agregado', 'success')
    e.preventDefault();
  });


  document.getElementById('product-list').addEventListener("click", function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
  });
