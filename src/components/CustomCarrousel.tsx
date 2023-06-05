import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import { MapData } from "../MapsInfo";

interface CustomCarrouselProps {
    mapas: MapData[]
}

const CustomCarrousel: React.FC<CustomCarrouselProps> = ({ mapas }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    console.log(mapas)

    return (
        <div>
            <Typography variant="h2" gutterBottom className="flex justify-center">
                Mapas
            </Typography>
            <Slider {...settings}>
                {mapas.map((mapa, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <Typography variant="h4" gutterBottom className="text-center">
                            {mapa.displayName}
                        </Typography>
                        <img src={mapa.listViewIcon} alt="Maps Icon" className="mx-auto" />
                        <Typography variant="subtitle1" gutterBottom className="pl-5 text-gray-400 flex justify-end">
                            Coordenadas: {mapa.coordinates}
                        </Typography>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomCarrousel;
