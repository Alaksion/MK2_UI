import React, {useState, useCallback} from 'react'
import {personagens} from '../../db/personages'
import styles from './styles.module.css'
import Card from '../Card/Card.component'
import Header from '../Header/header.component'
import Personagem from '../Personagem/personagem.component'

const Listagem = ()=>{
    const [selectedCharacter, setSelectedCharacter] = useState({})
    const [selectCharacterPlayer2, setSelectedCharacterPlayer2] = useState({})

    const handleSelectCharacter = useCallback((nome, imagem, id) =>{
        if(selectedCharacter.id === undefined){
            setSelectedCharacter({nome, imagem, id})
            return
        }
        if(selectCharacterPlayer2.id === undefined){
            console.log(setSelectedCharacterPlayer2.id)
            setSelectedCharacterPlayer2({nome, imagem, id})
            return
        }
    }, [selectCharacterPlayer2.id, selectedCharacter.id] )


   const handleRemoveCharacter = useCallback((player)=>{
       if(player === 1){
            setSelectedCharacter({})
            return
       }
       setSelectedCharacterPlayer2({})

    }, [])

    return (
        <div className={styles.ListagemContainer}>
            <Header/>
            <div className={styles.ListagemContent}>
                
                <Personagem 
                    Player={1} 
                    Personagem={selectedCharacter} 
                    handleRemoveCharacter={handleRemoveCharacter}
                />
                
                <div className={styles.ListagemItemsContainer}>
                    {
                        personagens.map(personagem => {
                            return <Card 
                                    key={personagem.id} 
                                    personagem={personagem}
                                    selecionado={personagem.id === selectedCharacter.id || personagem.id === selectCharacterPlayer2.id}
                                    handleSelectCharacter={handleSelectCharacter}
                                    />
                        })
                    }
                </div>

                <Personagem 
                    Player={2} 
                    Personagem={selectCharacterPlayer2} 
                    handleRemoveCharacter={handleRemoveCharacter}
                />             
            </div>
        </div>
    )
}

export default Listagem