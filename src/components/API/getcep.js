import React, {useState, useEffect, useRef} from "react"
import axios from "axios"
export default function GetCepComponent (){
    const {input2, setInput2} = useState()
    const {inputtwo, setInputtwo} = useState()
    const {inputthree, setInputthree} = useState()
    const GetCep = ()=>{
        axios.get(`https://viacep.com.br/ws/${inputthree}/${inputtwo}/${input2}/json/`).then((response)=>{
            console.log(response.data)
        })
    }
    return(
        <form onSubmit={e=>{
            e.preventDefault()
        }}>
            <label>Rua:</label>
            <input value={input2} onChange={e=>{setInput2(e.target.value)}} />
            <label>Cidade</label>
            <input value={inputtwo} onChange={e=>{
                setInputtwo(e.target.value)
            }}/>
            <label>Estado(sigla):</label>
            <input value={inputthree} onChange={e=>{
                setInputthree(e.target.value)
            }}/>
            <button onClick={()=>{
                GetCep()
            }}>Buscar cep</button>
            {input2}
            {inputthree}
            {inputtwo}
        </form>
    )
}