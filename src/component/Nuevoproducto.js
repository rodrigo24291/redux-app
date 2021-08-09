import React, { useState } from 'react'
import { CrearNuevoProductionAction } from '../actions/productoActions';
import { useDispatch,useSelector } from 'react-redux';

export const Nuevoproducto=({history})=>{
    const[nombre,setnombre]=useState('');
    const[precio,setprecio]=useState(0);
    
    const dispatch=useDispatch();
    const agregarproductonu=(producto)=>dispatch(CrearNuevoProductionAction(producto))

    const Agregar=(e)=>{
        e.preventDefault();
  agregarproductonu({
nombre,precio
   })
   history.push('/')
        }
        
const cargando=useSelector(state=>state.productos.loading)
const error=useSelector(state=>state.productos.error)

    return(
        <>

<div className="row justify-content-center mt-4">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>


                        <form
                        onSubmit={Agregar}
                        >
                            <div className="form-group">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=>setnombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                   
                                    value={precio}
                                    onChange={e=>setprecio(e.target.value)}
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        {cargando ? <p>Cargando...</p> :null}
                        
                        {error ? <p className="alert alert-danger p-2"> Hubo un error</p> :null}
</div>
</div>
</div>
</div>
        </>
    );
}