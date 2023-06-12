import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardArma from '../components/CardArma'
import { ArmaData } from "../ArmasInfo";

type Props = {}

const Armas = (props: Props) => {
    const [armas, setArmas] = useState<ArmaData[]>([])

    useEffect(() => {
        axios.get('https://valorant-api.com/v1/weapons', {
            params: {
                language: 'pt-BR',
            }
        })
            .then(response => {
                setArmas(response.data.data)
                console.log(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    const categorias: { [categoria: string]: ArmaData[] } = {};

    armas.forEach(arma => {
        const categoria = arma.shopData?.categoryText;
        if (!categorias[categoria]) {
            categorias[categoria] = [];
        }
        categorias[categoria].push(arma);
    });

    const categoriasOrdenadas = [
        "Armas Leves",
        ["Submetralhadoras", "Escopetas"],
        "Fuzis de Assalto",
        ["Fuzis de Precisão", "Armas Pesadas", "undefined"],
    ];

    return (
        <div className="flex">
            {categoriasOrdenadas.map((categoria, index) => {
                const categoriasExibidas = Array.isArray(categoria)
                    ? categoria
                    : [categoria];

                const armasFiltradas: ArmaData[] = [];

                categoriasExibidas.forEach((cat) => {
                    if (categorias[cat]) {
                        armasFiltradas.push(
                            ...categorias[cat].sort(
                                (armaA, armaB) =>
                                    (armaA?.shopData?.cost || 0) - (armaB?.shopData?.cost || 0)
                            )
                        );
                    }
                });

                return (
                    <div className={`m-2 coluna-${index + 1}`} key={index}>
                        <h2>
                            {Array.isArray(categoria)
                                ? categoria.join(" e ")
                                : categoria}
                        </h2>
                        {armasFiltradas.map((arma, i) => (
                            <CardArma key={i} arma={arma} />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default Armas