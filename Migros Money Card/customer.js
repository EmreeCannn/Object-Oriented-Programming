//  migros money card
//  if you have an money card you could get product with discount 

class Customer extends MigrosBase{
    constructor(name,surname,moneycar_exist,products){
        super(name,surname,moneycar_exist,products);
        //  miras aldığım sınıfın constructoruna bu customer constructorundan gelen paramtere değerlerini gönderdim 
    }
    calculate(){
       return super.calculate();
        //  üst sınıf içindeki hesapla methoduna sektim
    }
    //  bu sınıfın bu methodundan üst sınıfa sekicem 

    
}



