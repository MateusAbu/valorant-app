import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AgentImage from '../components/AgentImage';
import AgentDetails from '../components/AgentDetails';
import { AgentInfo } from '../AgentInfo';

type Props = {};

const Sobre = (props: Props) => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const uuid = params.get('uuid');

    const [info, setInfo] = useState<AgentInfo | null>(null);

    useEffect(() => {
        axios
            .get(`https://valorant-api.com/v1/agents/${uuid}`, {
                params: {
                    language: 'pt-BR',
                    isPlayableCharacter: true,
                },
            })
            .then((response) => {
                setInfo(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [uuid]);

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col lg:flex-row">
                {info && (
                    <>
                        <AgentImage displayName={info.displayName} fullPortrait={info.fullPortrait} />
                        <AgentDetails info={info} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Sobre;
