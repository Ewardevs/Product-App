//crea la clase de productos
class Product{
    constructor(name,price,year){
        this.name = name
        this.price = price
        this.year = year
    }
}

//crea la clase de UI para la grafica
class UI{
    addProduct(product){
        const productlist = document.getElementById("product-list")
        const element = document.createElement("div")
        element.innerHTML = `
        <div class="card text-center mb-4">
          <div class="card-body">
            <strong>Product Name</strong>: ${product.name}<br>
            <strong>Product Price</strong>: ${product.price}<br>
            <strong>Product Year</strong>: ${product.year}<br>
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
          </div>
        </div>
      `;
        productlist.appendChild(element)



    }

    resetform(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(element){
        if (element.name === "delete"){
            console.log(element.parentElement.parentElement.parentElement.remove())
            this.showmessage("Product deleted successfully.","danger")
        }


    }

    showmessage(message,cssClass){
        const div = document.createElement("div")
        div.className =`alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message))

        const container = document.querySelector(".container");
        const app = document.querySelector("#app")
        container.insertBefore(div,app);

        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);
    }
}


document.getElementById("product-form").addEventListener("submit",
    function(e){
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const year = document.getElementById("year").value;

        const product = new Product(name,price,year);

        const ui = new UI()

        if (name==="" || price==="" || year ===""){
            return ui.showmessage("Complete all fields","danger");
        }
        ui.addProduct(product)
        ui.showmessage("Product added successfully.","success")

        ui.resetform()

        e.preventDefault();
    });
document.getElementById("product-list").addEventListener("click",function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})