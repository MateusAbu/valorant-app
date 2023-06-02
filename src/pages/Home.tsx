import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardComponent from '../components/Card';
import { AgentInfo } from '../AgentInfo';

const Home = () => {
    const [agentes, setAgentes] = useState<AgentInfo[]>([])

    useEffect(() => {
        axios.get('https://valorant-api.com/v1/agents', {
            params: {
                language: 'pt-BR',
                isPlayableCharacter: true
            }
        })
            .then(response => {
                setAgentes(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-evenly">
            {agentes?.map((agente, i) => (
                <div className='m-2' key={i}>
                    <CardComponent key={i} agente={agente} />
                </div>
            ))}
        </div>

    )
}

export default Home