import { useState } from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import TextInput from "../components/TextInput"

export default function Calculator(){
  const [valueFirst,setValueFirst] = useState(0);
  const [valueSecond,setValueSecond] = useState(0);
  const [valueResultado,setValueResultado] = useState(0);

  function handleValueFirstChange(newValue){
     
    setValueFirst(newValue);
    let result = parseInt(newValue)  + parseInt(valueSecond)
    setValueResultado(result)
  }
  function handleValueSecondChange(newValue){
//  s  console.log(newValue);
    setValueSecond(newValue)
    let result = parseInt(newValue)  + parseInt(valueFirst)
    //console.log(result);
    setValueResultado(result)

  }

  return <div>
    <Header author="Vinicius Lemos de Souza">Minha Calculadora de SOMAR Simples</Header>
  
  <Main>
    <div className="container mx-auto p-5">
       <TextInput labelDescription="Valor 1" id="inputValu1" inputValue={valueFirst} onInputChange={handleValueFirstChange} autoFocus ></TextInput>
       <TextInput labelDescription="Valor 2" id="inputValu2" inputValue={valueSecond} onInputChange={handleValueSecondChange} ></TextInput>
    
       <TextInput labelDescription="Resultado" id="inputValuResultado" inputValue={valueResultado} readOnly ></TextInput>
     
    </div>
  </Main>
  
  </div>
}