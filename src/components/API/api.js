import React, {useState, useRef, useEffect} from "react"
import axios from "axios"
export default function ApiComponent (){
    const [input, setInput] = useState()
    const [input2, setInput2] = useState()
    const [input3, setInput3] = useState()
    const [input4, setInput4] = useState()
    const [rua, setRua] = useState([])
    const [bairro,setBairro] = useState()
    const [estado,setEstado] = useState()
    const [cep, setCep] = useState([])
    const getAdress = ()=>{
        axios.get(`https://viacep.com.br/ws/${input}/json/`).then((response)=>{
            setRua(response.data.logradouro)
            setBairro(response.data.bairro)
            setEstado(response.data.uf)
            setInput("")
        })
    };
    const GetCep = () =>{
        axios.get(`https://viacep.com.br/ws/${input4}/${input3}/${input2}/json/`).then((response)=>{
            console.log(response.data)
            setCep(response.data)
        })
    }
    const refInput = useRef()
    useEffect(()=>{
        setTimeout(()=>{
            refInput.current.focus()
        },2000)
    },[])
    return(
        <form onSubmit={e=>{
            e.preventDefault()
        }}>
            <label>Cep</label>
            <input ref={refInput} value={input} onChange={e=>{setInput(e.target.value)}} />
            <button onClick={()=>{getAdress()}}> Buscar </button>
            <ul>
                <li>{rua}</li>
                <li>{bairro}</li>
                <li>{estado}</li>
            </ul>
            <label>Rua</label>
            <input value={input2} onChange={e=>{setInput2(e.target.value)}} />
            <label>Cidade</label>
            <input value={input3} onChange={e=>{setInput3(e.target.value)}} />
            <label>Estado(sigla)</label>
            <input value={input4} onChange={e=>{setInput4(e.target.value)}} />
            <button onClick={()=>{
                GetCep()
            }}>Buscar Cep</button>
        </form>
    );
}