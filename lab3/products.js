const product = [
    {id:1,name:'marker',qty:122,price:13},
    {id:2,name:'duster', qty:50,price:10},
]

let nextid =3;

 export const getAllproducts = ()=>{
    return products;
}

export const addproducts = () =>{
    item.id=nextid;
    nextid++;
    products.push(item);
    return item;

};