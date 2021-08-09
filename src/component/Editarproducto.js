import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editarfinal } from '../actions/productoActions';


export const Editarproducto=()=>{
const history=useHistory()
    const[valor,setvalor]=useState({
        precio:"",
        nombre:"",
        id:"",
        })
const dispat=useDispatch();    
        const selector=useSelector(state=>state.productos.editarproducto)
        useEffect(()=>{
setvalor({
    precio:selector[0].precio,
    nombre:selector[0].nombre,
    id:selector[0].id
})
        },[])    
        const cambiarvalor=(e)=>{
            setvalor({
                ...valor,[e.target.name]:e.target.value
            })
        }
        
        const sub=(e)=>{
        e.preventDefault();
        dispat(editarfinal(valor))
        history.push('/')
        }
    return(
        <>
          <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                        onSubmit={sub}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={valor.nombre}
                                    onChange={cambiarvalor}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                    value={valor.precio}
                                    onChange={cambiarvalor}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
        </>
    );
}