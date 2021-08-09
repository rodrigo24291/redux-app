import React from 'react'
import { Link } from 'react-router-dom';

export const Header=()=>{

    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1> 
                        CRUD - React, Redux, REST API & Axios
                    
                </h1>
            </div> <Link to={"/producto"} 
            className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >Agregar Producto &#43;</Link>
        </nav>
        </>
    )
}