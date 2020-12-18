// products context
import React from 'react';
import axios from 'axios';
import url from '../utils/URL'

export const ProductContext = React.createContext();

//provider, consumer, usecontext

export default function ProductProvider({children}) {
    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [featured, setFeatured] = React.useState([]);

    React.useEffect(()=>{
        setLoading(true);
        axios.get(`${url}/products`)
            .then(response=>{
                setProducts(response.data)
                setLoading(false);
            })
        return()=>{

        }
    },[])

    return (
        <ProductContext.Provider value={{products,loading,featured}}>
            {children}
        </ProductContext.Provider>
    );
}
