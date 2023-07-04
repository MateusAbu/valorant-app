import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AgentInfo } from '../AgentInfo'
import Background01 from '../assets/bg1.png'
import Background02 from '../assets/bg2.png'
import Cards from '../components/Cards'
import Infos from '../components/AgentsInfo'
import AudioPlayer from '../components/AudioPlayer'
import SkillCard from '../components/SkillCard'
import { Typography } from '@mui/material'

type Props = {}

const Agents = (props: Props) => {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const initialUuid = params.get('uuid')

    const [info, setInfo] = useState<AgentInfo | null>(null)
    const [agentes, setAgentes] = useState<AgentInfo[]>([])
    const [uuid, setUuid] = useState<string | null>(initialUuid)
    const [selectedSkill, setSelectedSkill] = useState<number | null>(null)

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
                console.error(error)
            })
    }, [])

    useEffect(() => {
        if (uuid) {
            axios
                .get(`https://valorant-api.com/v1/agents/${uuid}`, {
                    params: {
                        language: 'pt-BR',
                        isPlayableCharacter: true,
                    },
                })
                .then((response) => {
                    setInfo(response.data.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [uuid])

    useEffect(() => {
        if (agentes.length > 0 && !initialUuid) {
            setUuid(agentes[0].uuid)
        }
    }, [agentes, initialUuid])

    const handleSkillCardClick = (index: number) => {
        if (selectedSkill === index) {
            setSelectedSkill(null)
        } else {
            setSelectedSkill(index)
        }
    }

    return (
        <div className="relative">
            <div className="bg-cover h-[50rem] w-auto" style={{ backgroundImage: `url(${Background01})` }}>
                <div className="h-screen flex flex-row justify-center">
                    <div className='ml-28 mt-2'>
                        <div className='grid grid-cols-2 items-center'>
                            {agentes?.map((agente, i) => (
                                <div className='m-2' key={i}>
                                    <Cards key={i} agente={agente} isSelected={uuid === agente.uuid} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {info && (
                        <>
                            <div className='border border-black rounded-sm'>
                                <div>
                                    <div className="absolute inset-0 bg-no-repeat bg-center h-1/2 w-1/2 mx-auto" style={{ backgroundImage: `url(${info.background})`, opacity: 0.04 }}></div>
                                </div>
                                <img className='ml-40' style={{ width: 1000 }} src={info.fullPortrait} alt="FullBodyAgente" />
                            </div>

                            <div className='text-white basis-1/3 mx-2'>
                                <Infos info={info} />
                            </div>
                            <AudioPlayer audioUrl={info.voiceLine.mediaList[0]?.wave || ''} />
                        </>
                    )}
                </div>
            </div>
            {info && (
                <div className="bg-cover h-screen w-auto" style={{ backgroundImage: `url(${Background02})` }}>
                    <div className="h-screen flex flex-col justify-center items-center">
                        <Typography className='text-4xl font-black text-white pb-10' variant="h2" component="div">
                            HABILIDADES
                        </Typography>
                        <div className='flex'>
                            {info.abilities.map((skills, i) => (
                                <SkillCard
                                    key={i}
                                    skills={skills}
                                    isSelected={selectedSkill === i}
                                    onClick={() => handleSkillCardClick(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Agents
