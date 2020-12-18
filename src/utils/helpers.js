// helper functions
export function feturedProducts(data) {
    return data.filter(item=>{
        return item.featured===true;
    })
}