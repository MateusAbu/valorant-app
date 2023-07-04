import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { ArmaData } from "../ArmasInfo"

interface CardArmaProps {
    arma: ArmaData
}
const CardArma: React.FC<CardArmaProps> = ({ arma }) => {

    return (
        <Card sx={{ maxWidth: 345, height: 170, margin: 3 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 80, objectFit: 'fill', width: 'auto', }}
                    component="img"
                    image={arma.displayIcon}
                    alt={arma.displayName}
                    className='mx-auto mt-2'
                />
                <CardContent className=''>
                    <Typography gutterBottom variant="h5" component="div">
                        {arma.displayName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {arma?.shopData?.cost ? arma?.shopData?.cost : ''}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default CardArma;
