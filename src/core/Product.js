import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Product = (props) => { // props --> from route
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [relatedProduct, setRelatedProduct] = useState([]);

    const loadSingleProduct = (productId) => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    }
                    else {
                        setRelatedProduct(data);
                    }
                })
            }
        })
    }

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]) // now it will run every time the props will change, earlier it was running only when state was changing

    return (
        <Layout title={product && product.name} description={product && product.description && product.description.substring(0, 100)} className="container-fluid">
            <div className="row">
                <div className="col-8">
                    {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>
                <div className="col-4">
                    <h4>Related Products</h4>
                    {relatedProduct.map((p, i) => (
                        <div className="mb-3">
                            <Card key={i} product={p}/>
                        </div>
                    ))}
                </div>
            </div>

        </Layout>
    )
}

export default Product;