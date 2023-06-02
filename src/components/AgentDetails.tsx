import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AudioPlayer from './AudioPlayer';
import { AgentInfo } from '../AgentInfo';

type AgentDetailsProps = {
    info: AgentInfo;
};

const AgentDetails: React.FC<AgentDetailsProps> = ({ info }) => {
    return (
        <div className="p-6 mt-5 mr-5 rounded-lg shadow relative h-full bg-[#505053]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${info.background})`, opacity: 0.08 }}></div>
            <Box sx={{ width: '100%', maxWidth: 1000, color: 'white' }}>
                <Typography className="flex items-center justify-center" variant="h3" gutterBottom>
                    {info.role.displayName}
                    <img className="ml-5 h-10" src={info.role.displayIcon} alt="Icon" />
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {info.role.description}
                </Typography>
                <Typography className="flex items-center justify-center" variant="h3" gutterBottom>
                    Skills
                </Typography>
                {info.abilities.map((skills, i) => (
                    <Typography className="flex" variant="h5" gutterBottom key={i}>
                        <img className="mr-2 h-10" src={skills.displayIcon} alt="Icon" />
                        <Typography variant="overline" display="block" gutterBottom>
                            {skills.displayName}: {skills.description}
                        </Typography>
                    </Typography>
                ))}
                <AudioPlayer audioUrl={info.voiceLine.mediaList[0]?.wave || ''} />
            </Box>
        </div>
    );
};

export default AgentDetails;
