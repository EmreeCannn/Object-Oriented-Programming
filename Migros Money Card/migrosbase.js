class MigrosBase{
    discount_rate=20;
    constructor(name,surname,moneycar_exist,products){
        this.name=name;
        this.surname=surname;
        this.moneycar_exist=moneycar_exist;
        this.products=products;
    }  
    calculate(){
        let totol_price=0;
        // burda değişken tanımlamamın amacı methodun heryerinden erişebilmek 
        //  eğer ben if ya da else içinde tanımlarsam sadece onların içinde erişebilirim
        if(this.is_product_exist(this.products)){
            // this keywordu ile methotlara ve özelliklere erişebilirim
            // sepetimin içinde ürünler var
            if(this.moneycar_exist==true){
                this.products.forEach(product=>{
                   // her ürünümde %20 lik indirim yapicam
                   totol_price+=(product.price*(100-this.discount_rate)/100);
                })
            }else{
                this.products.forEach(product=>{
                    totol_price+=product.price;
                })
            }
        }else{
            alert("you should buy product");
        }
        return totol_price;
    }
    is_product_exist(products){
        if(products!=NaN && products.length>0){
            return true;
        }
        return false;
    }
}

