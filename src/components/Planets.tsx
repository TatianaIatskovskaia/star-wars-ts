import {useEffect, useState} from "react";
import {base_url, period} from "../utils/constants.ts";

const Planets = () => {
    const [planets, setPlanets] = useState<string[]>(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < period)) {
            return planets.payload;
        } else {
            return ['wait...']
        }
    });

    useEffect(() => {
        const getPlanets = async () => {
            const res = await fetch(`${base_url}/v1/planets`);
            const data: {name: string}[] = await res.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        if (planets.length === 1){
            getPlanets().then(() => console.log('Planets were loaded'));
        }
    }, [])

    return planets.map(planet => <option className={'bg-gray'} key={planet} value={planet}>{planet}</option>)
};

export default Planets;