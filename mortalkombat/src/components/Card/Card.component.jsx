import React, { useCallback } from 'react'
import './CardStyle.css'


const ListagemCard = ({personagem, selecionado, handleSelectCharacter })=>{
    const handleClick = useCallback(()=>{
        handleSelectCharacter(personagem.nome, personagem.imagemDetalhe, personagem.id)

    }, [handleSelectCharacter, personagem.id, personagem.imagemDetalhe, personagem.nome])

    return(
        <button 
            className={[`ListagemCardContainer ${selecionado && "FiltroSelecionado"}`]} 
            style={{backgroundImage: `url(${personagem.imagemListagem})`}}
            onClick={handleClick}
            disabled={selecionado}>
        </button>
    )
}

export default ListagemCard