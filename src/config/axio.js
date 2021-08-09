import axios from 'axios'

const clienteaxios=axios.create({
    baseURL:'http://localhost:4000/'
})

export default clienteaxios