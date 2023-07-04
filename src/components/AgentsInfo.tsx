import React from 'react'
import { Typography } from '@mui/material'
import { AgentInfo } from '../AgentInfo'

type AgentDetailsProps = {
    info: AgentInfo | null
}

const Infos: React.FC<AgentDetailsProps> = ({ info }) => {
    return (
        <div className='mt-32'>
            <Typography className='py-2' variant="h5" component="div">
                ** FUNÇÃO
            </Typography>
            <Typography className='py-2 font-extrabold' variant="h3" component="div">
                {info?.role.displayName.toUpperCase()}
            </Typography>
            <Typography className='py-2' variant="h5" component="div">
                ** BIOGRAFIA
            </Typography>
            <Typography className='py-2' variant="h6" component="div">
                {info?.description}
            </Typography>
        </div>
    )
}

export default Infos
