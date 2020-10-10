import React, {useCallback} from 'react'
import "./personagemStyle.css"

const Personagem = ({Personagem, handleRemoveCharacter, Player})=>{
    
    const removerPersonagem = useCallback(()=>{
        handleRemoveCharacter(Player)
    }, [Player, handleRemoveCharacter])

    return(
        <div className={`PersonagemContainer ${Personagem.id === undefined && "Esconder"}`}>
            
            <span>{Personagem.nome}</span>
            <img className={`${Player === 2 && "Player2Img"}`} src={Personagem.imagem} alt={"personagem"}/>
            <button onClick={removerPersonagem}>Remover</button>

        </div>
    )
}

export default Personagem