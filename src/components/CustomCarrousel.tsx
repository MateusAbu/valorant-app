import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import { MapData, Location } from "../MapsInfo";

interface CustomCarrouselProps {
    mapas: MapData[]
}

const CustomCarrousel: React.FC<CustomCarrouselProps> = ({ mapas }) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    console.log(mapas)

    const calculateCoordinates = (location: Location, mapa: MapData): Location => {
        const divA = document.getElementById('callout-container') as HTMLDivElement;

        const { xMultiplier, xScalarToAdd, yMultiplier, yScalarToAdd } = mapa;
        const calculatedX = (location.x * yMultiplier + yScalarToAdd) * (divA.offsetHeight - 45);
        const calculatedY = (location.y * xMultiplier + xScalarToAdd) * (divA.offsetWidth - 45);
        return { x: calculatedX, y: calculatedY };
    };

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
                        <img src={mapa.splash} alt="Maps Icon" className="mx-auto" />
                        <Typography variant="subtitle1" gutterBottom className="pl-5 text-gray-400 flex justify-end">
                            Coordenadas: {mapa.coordinates}
                        </Typography>
                    </div>
                ))}
            </Slider>
            <Typography variant="h2" gutterBottom className="flex justify-center py-10">
                Calls
            </Typography>
            {mapas.map((mapa, i) => (
                <div key={i}>
                    <Typography variant="h4" gutterBottom className="flex justify-center text-white">
                        {mapa.displayName}
                    </Typography>
                    <div className="flex justify-center">
                        <div id="callout-container" className="relative">
                            <img src={mapa.displayIcon} alt={mapa.displayName} />
                            <div>
                                {mapa.callouts?.map((callout, index) => {
                                    const { x, y } = calculateCoordinates(callout.location, mapa);
                                    const positionStyle = {
                                        top: `${x}px`,
                                        left: `${y}px`,
                                    };
                                    return (
                                        <div
                                            key={index}
                                            className="text-white absolute"
                                            style={positionStyle}
                                        >
                                            <h2>{callout.regionName}</h2>
                                            <p>{callout.superRegionName}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomCarrousel;
