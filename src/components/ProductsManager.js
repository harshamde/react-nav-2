import React from 'react';
import productsSlice from './../redux-store/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductsThunk from './../redux-store/productsThunk';
const { getProductsFromServer, saveProductsToServer } = ProductsThunk;





function ProductView({ product, index }) {
    const dispatch = useDispatch();
    return (
        <div key={index} style={{ border: "1px solid black", padding: "5px", margin: "5px", display: "inline-block" }}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.quantity}</div>
            <button onClick={() => dispatch(productsSlice.actions.deleteProduct({ product }))}>Delete</button>&nbsp;
            <button onClick={() => dispatch(productsSlice.actions.editProduct({ product }))}>Edit</button>
            <br />
            <label style={{ fontSize: "13px" }}>status: {product.status}</label>
        </div>
    );
}


function ProductEditView({ product, index }) {
    const dispatch = useDispatch();
    return (
        <div key={index} tyle={{ border: "1px solid black", padding: "10px", margin: "5px", display: "inline-block" }}>
            Name: <input type="text" value={product.name} onChange={(e) => dispatch(productsSlice.actions.nameChange({ product, name: e.target.value }))} />
            <br />
            Price: <input type="number" value={product.price} onChange={(e) => dispatch(productsSlice.actions.priceChange({ product, price: e.target.value }))} />
            <br />
            Quantity: <input type="text" value={product.quantity} onChange={(e) => dispatch(productsSlice.actions.quantityChange({ product, quantity: e.target.value }))} />
            <br />

            <button onClick={() => dispatch(productsSlice.actions.updateProduct({ product }))}>Update</button> &nbsp;
            <button onClick={() => dispatch(productsSlice.actions.cancelEditProduct({ product }))}>Cancel</button>
            <br />
            <label style={{ fontSize: "13px" }}>status: {product.status}</label>

        </div>
    );
}

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
                (product.status === "from-server" || product.status === "from-server & updated" || product.status === "new & updated")
                    ? <ProductView product={product} index={index} />
                    : (product.status === "from-server & edit" || product.status === "new & edit") && <ProductEditView product={product} index={index} />
            ))}


            <br />
            <button onClick={() => dispatch(productsSlice.actions.addNewProduct())}>Add New Product</button>
            <br />
            <button onClick={() => dispatch(saveProductsToServer(productsSliceState.products))}>Save To Database</button>

        </div>);
}

export default ProductsManager;