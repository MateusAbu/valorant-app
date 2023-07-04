import React from 'react'

interface AgentCardProps {
    agente: {
        displayName: string;
        displayIcon: string;
        uuid: string;
    }
    isSelected: boolean;
}

const Cards: React.FC<AgentCardProps> = ({ agente, isSelected }) => {
    return (
        <div className={`border ${isSelected ? 'border-red-500' : 'border-white'} rounded-lg flex justify-center h-14 w-14`}>
            <a href={`/agents/?uuid=${agente.uuid}&agente=${agente.displayName.toLowerCase()}`}>
                <img alt="agente Icon" height="140" src={agente.displayIcon} />
            </a>
        </div>
    )
}

export default Cards
