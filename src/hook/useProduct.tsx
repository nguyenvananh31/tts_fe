import { useEffect, useState } from "react";
import Axios from "../configs/axios";
import { IProduct } from "../interFaces/products";

export const useProduct = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const getAllProducts = async () => {
        try {
            const { data } = await Axios.get('/products');
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllProducts();
    }, []);

    return { products };
};
