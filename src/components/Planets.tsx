import {useEffect, useState} from "react";
import {base_url, period} from "../utils/constants.ts";

const Planets = () => {
    const [planets, setPlanets] = useState<string[] | null>(() => {
        const saved = localStorage.getItem('planets');
        return saved ? JSON.parse(saved) : null;
    });

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timestamp = Number(localStorage.getItem('planetsTime'));
        const isExpired = Date.now() - timestamp > period;

        if (!planets || isExpired) {
            fetch(`${base_url}/v1/planets`)
                .then(res => res.json())
                .then(data => {
                    // Предположим, API возвращает объекты с полем name
                    const names = data.map((planet: { name: string }) => planet.name);
                    localStorage.setItem('planets', JSON.stringify(names));
                    localStorage.setItem('planetsTime', String(Date.now()));
                    setPlanets(names);
                    setError(null);
                })
                .catch(() => setError(`Error loading crawl`));
        }
    }, [planets])

    if (error) {
        return <option disabled>{error}</option>;
    }

    if (planets) {
        return planets.map(planet => <option className={'bg-gray'} key={planet} value={planet}>{planet}</option>)
    } else {
        return <option disabled>Error loading planets</option>;
    }
};

export default Planets;