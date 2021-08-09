import {AGREGAR_PRODUCTO,AGREGAR_PRODUCTO_ERROR,AGREGAR_PRODUCTO_EXITO,COMENZAR_DESCARGAR_EXITO,COMENZAR_DESCARGAR_PRODUCTO,COMENZAR_DESCARGAR_ERROR,OBTENER_PRODUCTO_ELIMINAR,OBTENER_PRODUCTO_ERROR,OBTENER_PRODUCTO_ELIMINAR_EXITO,EDITAR_PRODUCTO,EDITAR_PRODUCTO_ERROR,EDITAR_PRODUCTO_EXITO} from '../types'
import clienteaxios from '../config/axio'
import Swal from 'sweetalert2';
export const CrearNuevoProductionAction=(producto)=>{
return async (dispatch)=>{
    dispatch(agregarproducto())
    
try {
    await clienteaxios.post('/productos',producto)
 dispatch(agregarexito(producto))
 Swal.fire(
     'correcto',
     'el prodcuto se agrego',
     'success'
 )   
} catch (error) {
    dispatch(agregarproductoerror(true))
    Swal.fire(
        {
            icon:'error',
            title:'hubo un error',
            text:'hubo un error intenta de nuevo'
        }
    )
}
}
}

const agregarproducto=()=>({
  type:AGREGAR_PRODUCTO,
  
   
})

const agregarexito=(producto)=>({
    type:AGREGAR_PRODUCTO_EXITO,  
    payload:producto
})

const agregarproductoerror=(dato)=>({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:dato
})


export const mostrarproducto=()=>{
return async(dispatch)=>{
    dispatch(descargar())
   try { 
       
        const api=await clienteaxios.get('/productos')
        dispatch(descargado(api.data))    
   } catch (error) {
       dispatch(errordescarga(error))
   }
}
}

const descargar=()=>({
    type:COMENZAR_DESCARGAR_PRODUCTO,
    payload:true
})

const descargado=(producto)=>({
    type:COMENZAR_DESCARGAR_EXITO,
    payload:producto
})

const errordescarga=()=>({
    type:COMENZAR_DESCARGAR_ERROR,
    error:true
})

export const eliminarproducto=(id)=>{
return async(dispatch)=>{
dispatch(borrar(id))
console.log(id)
try {
const de=clienteaxios.delete(`/productos/${id}`)

dispatch(borarexito())    
} catch (error) {
    dispatch(errorborrar())
}
}}

const borrar=(id)=>({
    type:OBTENER_PRODUCTO_ELIMINAR,
    payload:id

})

const borarexito=()=>({

    type:OBTENER_PRODUCTO_ELIMINAR_EXITO,
    
})

const errorborrar=()=>(
{   type:OBTENER_PRODUCTO_ELIMINAR_EXITO,
    payload:true
})

export const editarpro=(id)=>{
return(dispatch)=>{
dispatch(edicion(id))
}
}

const edicion=(id)=>({
type:EDITAR_PRODUCTO,
payload:id
})

export const editarfinal=(objeto)=>{
return (dispatch)=>{
    try {
        clienteaxios.put(`/productos/${objeto.id}`,objeto)   
    dispatch(ed(objeto))   
    } catch (error) {
        
    }
}
}

const ed=(ob)=>({
type:EDITAR_PRODUCTO_EXITO,
payload:ob
})