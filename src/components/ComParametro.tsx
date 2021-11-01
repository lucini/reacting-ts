import React from 'react';
import './Primeiro.css';

export default (props: { titulo: string }) => {

    const products = [{ id: 1, name: 'Produto 1' }, { id: 2, name: 'Produto 2' }, { id: 3, name: null }];

    return <>
        <div>
            <h1>{props.titulo}</h1>
        </div>
        <div>
            <ul>
                {getProduct()}
            </ul>
        </div>
    </>;

    function getProduct() {
        return products.map(product => <li key={product.id}>{product?.name}</li>);
    }
}

