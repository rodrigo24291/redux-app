import React, { useEffect } from 'react'
import { mostrarproducto } from '../actions/productoActions';
import { useDispatch,useSelector } from 'react-redux';
import { eliminarproducto } from '../actions/productoActions';
import { useHistory } from 'react-router-dom';
import { editarpro } from '../actions/productoActions';
export const Producto=()=>{
const dispatch=useDispatch();
const history=useHistory();
useEffect(()=>{
    const cargardatos=()=>dispatch(mostrarproducto())
    cargardatos()
},[])

const productos=useSelector(state=>state.productos.productos)
const error=useSelector(state=>state.productos.error)
const cargando=useSelector(state=>state.productos.cargando)

const borrar=(e)=>{
    e.preventDefault();
    const delet=()=>{dispatch(eliminarproducto(e.target.value))}
delet() 
}
const edicion=(e)=>{
dispatch(editarpro(e.target.value));
    history.push(`/producto/editar/${e.target.value}`)
}
    return(
        <>
        
        <h2 className="text-center my-5">Listado de Productos</h2>


        { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null }
           
        { cargando ? <p className="text-center">Cargando....</p> : null }

<table className="table table-striped">
    <thead className="bg-primary table-dark">
         <tr>
             <th scope="col">Nombre</th>
             <th scope="col">Precio</th>
             <th scope="col">Acciones</th>
         </tr>
    </thead>

    <tbody>
 
{productos.map(pro=>{
return <tr key={pro.id}> <td > {pro.nombre}  </td> <td><span className="font-weight-bold"> {pro.precio} </span> </td> 
<td> <button 
type="button"
className="btn btn-primary mr-2"
value={pro.id}
onClick={edicion}
>
Editar
</button>
<button 
type="button"
className="btn btn-danger"
value={pro.id}
onClick={borrar}
>Eliminar </button> </td> </tr>

})}       

    </tbody>
</table>




        </>
    );
}