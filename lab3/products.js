const products = [
    { id: 1, name: 'marker', qty: 100, price: 15 },
    { id: 2, name: 'pen', qty: 50, price: 10 }
];
let nextId = 3;
// Get all products
export const getAllProducts = () => {
    return products;
};
// Add product
export const addProduct = (item) => {
    item.id = nextId;
    nextId++;
    products.push(item);
    return item;
};

export const deleteproduct =(pid)=>{
    const item=products.findIndex((prd)=>prd.id==pid);
    if(item==-1)
        return false;
    products.splice(item,1);
    console.log("products remaning:",products);
    return true

};
//create a function to update any fuction to return pid call this function into prg6.js and veify its working by echo api