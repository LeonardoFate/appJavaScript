//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
class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;https://www.youtube.com/watch?v=nqre9kKFRpc&t=900s
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
            this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage() {}
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
        ui.addProduct(product);
        ui.resetForm();

    e.preventDefault();
  });


  document.getElementById('product-list').addEventListener("click", function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
  });
