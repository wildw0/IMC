import { useState, useEffect } from "react"

import styles from './Calc.module.css';

const Formulario = () => {

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {

            return evento.target.value
    })

    }
    const [valorPeso,setValorPeso] = useState(0);
    const [valorAltura,setValorAltura] = useState(400); //Jeito mais simples para ela só alterar depois de colocar o tamanho ;P
    const [nome, setNome] = useState('');


    const ResultadoIMC = () => {
        const mult = valorAltura ** valorAltura;
        const IMC = valorPeso / mult;
        console.log(IMC);

        if (IMC <= 18.5 && IMC > 0) {
            return (
                <p className={styles.subpeso}>Atenção {nome}! você está abaixo do peso!</p>
            )
        } if (IMC >= 18.5 && IMC < 24.9 ) {
            return (
                <p className={styles.peso}>{nome} você está no seu peso ideal!</p>
            )
        } if (IMC >= 25 && IMC < 29.9 ) {
            return (
                <p className={styles.sobrepeso}>{nome} você está com excesso de peso!</p>
            )    
        } if (IMC >= 30) {
            return (
                <p className={styles.obeso}>Atenção {nome}! Você está no nível de obesidade!</p>
            )
        } else {
            return (
                <p>Preencha os dados para calcular seu IMC.</p>
            )
        }
    }

    return (
        <>
            <header className={styles.header}>
                <p>Calculadora de IMC</p>
            </header>
            <form className={styles.form}>
                <input className={styles.inputs} type="text" placeholder="Seu nome"  onChange={alteraNome}/>
                <input className={styles.inputs} type="number" placeholder="Digite seu peso" onChange={evento => setValorPeso(evento.target.value)}/>
                <input className={styles.inputs} type="number" placeholder="Altura (ex.: 1,80)" onChange={evento => setValorAltura(evento.target.value)}/>
                {ResultadoIMC()}
            </form>
        </>  
    )
}

export default Formulario