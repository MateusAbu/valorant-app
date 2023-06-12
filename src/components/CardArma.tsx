import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { ArmaData } from "../ArmasInfo";

interface CardArmaProps {
    arma: ArmaData;
}
const CardArma: React.FC<CardArmaProps> = ({ arma }) => {

    return (
        <Card sx={{ maxWidth: 345, margin: 3 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={arma.displayIcon}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {arma.displayName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {arma?.shopData?.cost ? arma?.shopData?.cost : 0}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default CardArma;
