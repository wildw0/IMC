import { useState, useEffect } from "react"

import styles from './Calc.module.css';

const Formulario = () => {
    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
        return evento.target.value
        })
    }
    const [valorPeso,setValorPeso] = useState(0);
    const [valorAltura,setValorAltura] = useState(400); 
    const [nome, setNome] = useState('');
    const [pontoDecimal, setpontoDecimal] = useState(false);

    const AlturaErro = (event) => {
        if (event.key === ".") {
        if (pontoDecimal) {
            event.preventDefault()
        } else {
            setpontoDecimal(true);
        }
        }
    }

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
            <p className={styles.instrucao}>Preencha os dados corretamente para calcular seu IMC.<br />
                <b> Altura em metros (ex.:1,80)</b></p>
            
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
            <input className={styles.inputs} type="number" placeholder="Altura (ex.: 1,80)" onKeyDown={AlturaErro} onChange={evento => setValorAltura(evento.target.value)}/>
            {ResultadoIMC()}
        </form>
        </>  
    )
    }

export default Formulario