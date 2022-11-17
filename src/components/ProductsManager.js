import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getProductsFromServer from './../redux-store/productsThunk';

function ProductsManager() {
    const productsSliceState = useSelector(store => store.productsSliceState);
    const dispatch = useDispatch();

    const getProductsData = () => {
        dispatch(getProductsFromServer());
    };


    return (
        <div>
            <br />
            <button onClick={getProductsData}>Get Products</button>
            <br />
            {productsSliceState.isLoading && <div style={{ margin: '40px', display: 'inline-block' }}>
                Please Wait...</div>
            }

            {!productsSliceState.isLoading && productsSliceState.error && <div style={{ margin: '40px', display: 'inline-block', color: "red" }}>
                {productsSliceState.error}  </div>
            }

            {!productsSliceState.isLoading && productsSliceState.products.map((product, index) => (
                <div
                    key={index}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        margin: "10px",
                        display: "inline-block",
                    }}
                >
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.quantity}</div>
                </div>
            ))}
        </div>);
}

export default ProductsManager;