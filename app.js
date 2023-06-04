//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
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;

    }


}

class UI{
    addProduct(){
        const productList =  document.getElementById('product-list');
        const element = document.createElement('div');
    }
    deleteProduct(){

    }

    showMessage(){

    }

}

//DOM Events

document.getElementById('product-form')
.addEventListener('submit' , function(e)  {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    console.log(name, price, year);

    const product = new product(name, price, year);


e.preventDefault();
});