import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface AgentCardProps {
    agente: {
        displayName: string;
        description: string;
        displayIcon: string;
        backgroundGradientColors: string[];
        uuid: string;
    };
}

const AgentCard: React.FC<AgentCardProps> = ({ agente }) => {
    return (
        <Card sx={{ maxWidth: 345, minHeight: 600, position: 'relative' }}>
            <div style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', backgroundColor: '#' + agente.backgroundGradientColors[3] }}>
                <CardMedia component="img" alt="agente Icon" height="140" image={agente.displayIcon} />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {agente.displayName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {agente.description}
                </Typography>
            </CardContent>
            <CardActions style={{ position: 'absolute', bottom: 10, left: 0, right: 0, justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    component={Link}
                    to={`/sobre/?uuid=${agente.uuid}&agente=${agente.displayName.toLowerCase()}`}
                    size="small"
                    sx={{
                        backgroundColor: '#' + agente.backgroundGradientColors[0],
                        '&:hover': {
                            backgroundColor: '#' + agente.backgroundGradientColors[1],
                        },
                    }}
                >
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    );
};

export default AgentCard;
