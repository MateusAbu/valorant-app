import React from 'react'

type AgentImageProps = {
    displayName: string | undefined
    fullPortrait: string | undefined
}

const AgentImage: React.FC<AgentImageProps> = ({ displayName, fullPortrait }) => {
    return (
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-8">
            <h2 className="text-white text-5xl font-bold mt-2">{displayName}</h2>
            <img style={{ width: 1200 }} src={fullPortrait} alt="FullBodyAgente" />
        </div>
    )
}

export default AgentImage
