import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Target from '../components/target';
import "../App.css"

const Product = () => {
    const { id } = useParams();

    return (
        <div className="container-fluid">
            <div className="container d-flex justify-content-center">
                <div
                    style={{ borderRadius: "5px", minHeight: "60vh" }}
                    className="col-md-10 col-10 p-4 shadow m-2 bg-light"
                >
                    <div className='row banner'>
                        <div className="col align-self-center"><h1 className="text-center text-white">INFORMACIÓN PRODUCTO {id}</h1></div>
                    </div>
                    
                    <div className='container d-flex justify-content-center'>
                        <Target/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

