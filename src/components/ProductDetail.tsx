import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import type { RootState } from '../redux/store';
import "../css/detail.css"
import Container from "@mui/material/Container";
import type { BasketProductType } from '../types/Types';
import { setBasket } from '../redux/slices/basketSlice';
import Header from './Header';
function ProductDetail() {
    const dispatch = useDispatch();
    const [numOfProduct, setNumOfProduct]=useState(0);
    const { id } = useParams();
    const { products } = useSelector((state: RootState) => state.product);
    
    const product = products.find((product) => product.id === Number(id));
    const submit = () => {
        
        if (product) {
            const payload: BasketProductType = {
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                image: product.image,
                category: product.category,
                rating: product.rating,
                count: numOfProduct,
            };
            dispatch(setBasket(payload));
          
        }
        }
        

if(product)
    return (
        <div>
            <Header />
            <Container>
                <div className="container">
                    <div>
                        <img
                            style={{
                                width: "400px", 
                                height:"400px"
                            }}
                            src={product.image}
                            alt="Görsel bulunamadı"
                        />
                    </div>
                    <div className="text-container">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p style={{ fontSize: "30px" }}>{product.price} ₺</p>
                        <div className="btn-container">
                            <button
                                onClick={() =>
                                    setNumOfProduct((count) =>
                                        count > 0 ? numOfProduct - 1 : 0
                                    )
                                }
                                className="btn"
                            >
                                -
                            </button>
                            <p
                                style={{
                                    textAlign: "center",
                                    fontSize: "25px",
                                }}
                            >
                                {numOfProduct}
                            </p>
                            <button
                                onClick={() =>
                                    setNumOfProduct(numOfProduct + 1)
                                }
                                className="btn"
                            >
                                +
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => submit()}
                                className="add-btn"
                            >
                                Sepete Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProductDetail
