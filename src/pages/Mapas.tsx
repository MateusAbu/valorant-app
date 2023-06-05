import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomCarrousel from '../components/CustomCarrousel'

type Props = {}

const Mapas = (props: Props) => {
    const [mapas, setMapas] = useState([])

    useEffect(() => {
        axios.get('https://valorant-api.com/v1/maps', {
            params: {
                language: 'pt-BR',
            }
        })
            .then(response => {
                setMapas(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])
    return (
        <div>
            <CustomCarrousel mapas={mapas} />
        </div>
    )
}

export default Mapas