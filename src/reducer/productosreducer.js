import { Editarproducto } from '../component/Editarproducto'
import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO, COMENZAR_DESCARGAR_EXITO, COMENZAR_DESCARGAR_PRODUCTO,COMENZAR_DESCARGAR_ERROR,OBTENER_PRODUCTO_ERROR,OBTENER_PRODUCTO_ELIMINAR_EXITO, OBTENER_PRODUCTO_ELIMINAR,EDITAR_PRODUCTO,EDITAR_PRODUCTO_ERROR,EDITAR_PRODUCTO_EXITO } from '../types'

const initialization = {
    productos: [],
    error: null,
    loading: false,
    productoeliminar:null,
    editarproducto:null

}

export default function (state = initialization, action) {

    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
        case OBTENER_PRODUCTO_ERROR:
        case EDITAR_PRODUCTO_ERROR:        
            return {
                ...state,
                loading: action.payload
            }


        case COMENZAR_DESCARGAR_PRODUCTO:
            return {
                ...state,
                loading: true
            }

        case COMENZAR_DESCARGAR_EXITO:
            return {
                ...state,
                loading: false,
                productos: action.payload
            }

        case COMENZAR_DESCARGAR_ERROR:
            return {
                ...state,
                loading:false,
                error:true
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoeliminar:action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR_EXITO:
            return{
                ...state,
                productos:state.productos.filter(pro=>pro.id!=state.productoeliminar
                ),
                productoeliminar:null
            }
            
        case EDITAR_PRODUCTO:
            return{
                ...state,
                editarproducto:state.productos.filter(pro=>pro.id==action.payload)
            }

            case EDITAR_PRODUCTO_EXITO:
                return{
                    ...state,
                    producto:[state.productos.filter(pro=>pro.id!=state.editarproducto[0].id),action.payload],
                    editarproducto:null
                }

        default:
            return state;
    }

}