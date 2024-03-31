let message=
`
Welcome to Migros 
Do you have a Money Card ?
1-Yes
2-No
`
const products=[
    {name:"milk",price:15},
    {name:"Bebek bezi",price:100},
    {name:"kuşbaşi",price:220}
];

let sonuc=confirm(message);
//  confirm sayesinde  onay işlemi alabilmekteyiz
//  bana true veya false değer döndürür
let total_price;

if(sonuc){
    //  money kartı vardir 
    let name=prompt("enter your name");
    let surname=prompt("enter your surname");
    if(name=="" || surname==""){
        alert("ad ve soyad zorunludur");
    }
    else{
        const musteri=new Customer(name,surname,sonuc,products);
        total_price=musteri.calculate()
        alert(
        `
        Customer İnformation:${musteri.name} ${musteri.surname}

        Total Price: ${total_price}
        `
    )
    }
}else{
    const musteri=new Customer(null,null,sonuc,products);
     total_price=musteri.calculate()
    alert(`total price ${total_price}`);
}
