import React from 'react'

type SkillCardProps = {
    skills: {
        displayName: string
        description: string
        displayIcon: string
        slot: string
    }
    isSelected: boolean
    onClick: () => void
}

const SkillCard = ({ skills, isSelected, onClick }: SkillCardProps) => {

    const slotLabels: { [key: string]: string } = {
        Ability1: 'Q',
        Ability2: 'E',
        Grenade: 'C',
        Ultimate: 'X',
    }

    const getSlotLabel = (slot: string): string => {
        return slotLabels[slot] || slot
    }

    return (
        <div>
            <div
                className={`cursor-pointer border border-white rounded-lg flex justify-center h-14 w-14 m-2 p-2 ${isSelected ? 'bg-red-500' : ''
                    }`}
                onClick={onClick}
            >
                <img alt="agente Icon" height="140" src={skills.displayIcon} />
            </div>
            {isSelected && (
                <div className='max-w-xl text-white'>
                    <h3>{getSlotLabel(skills.slot)} - {skills.displayName}</h3>
                    <p>{skills.description}</p>
                </div>
            )}
        </div>
    )
}

export default SkillCard
