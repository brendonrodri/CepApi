import React, {useState, useRef, useEffect} from "react"
import axios from "axios"
export default function ApiComponent (){
    const [input, setInput] = useState()
    const [rua, setRua] = useState([])
    const [bairro,setBairro] = useState()
    const [estado,setEstado] = useState()
    const [cep, setCep] = useState()
    const getAdress = ()=>{
        axios.get(`https://viacep.com.br/ws/${input}/json/`).then((response)=>{
            setRua(response.data.logradouro)
            setBairro(response.data.bairro)
            setEstado(response.data.uf)
            setCep(response.data.cep)
            setInput("")
        })
    };
    return(
        <>
            <input value={input} onChange={e=>{setInput(e.target.value)}} />
            <button onClick={()=>{getAdress()}}> Buscar </button>
            <ul>
                <li>{rua}</li>
                <li>{bairro}</li>
                <li>{estado}</li>
                <li>{cep}</li>
            </ul>
        </>
    );
}