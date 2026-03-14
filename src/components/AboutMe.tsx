import {useEffect, useState} from "react";
import { about, characters, period, defaultHero } from "../utils/constants.ts";
import { useParams } from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const AboutMe = () => {
    const { heroId = defaultHero } = useParams();

    const [aboutMe, setAboutMe] = useState(() => {
        const aboutMe = localStorage.getItem(heroId)!;
        const parsed = JSON.parse(aboutMe);
        if (parsed && ((Date.now() - parsed.timestamp) < period)) {
            return parsed.data;
        }
    });

    useEffect(() => {
        if (!aboutMe) {
            fetch(`${characters[heroId].url}`)
                .then(res => res.json())
                .then(data => {
                    const toSave = { data, timestamp: Date.now() };
                    localStorage.setItem(heroId, JSON.stringify(toSave));
                    setAboutMe(data);
                })
                .catch(() => setAboutMe("Error loading data"));
        }
    }, [heroId]);

    if (!(heroId in characters)) {
        return <ErrorPage />;
    }

    if (aboutMe) {
        return (
            <div className="flex mt-2">
                <section className={'w-1/4 mr-4 mb-4'}>
                    <img
                        className="w-full shadow-hero rounded-xl"
                        src={characters[heroId].img}
                        alt={characters[heroId].name}
                    />
                </section>
                <section className="flex-1">
                    {about.map((item) => (
                        <p key={item} className={'text-3xl text-justify leading-normal tracking-widest capitalize'}>
                            <span className="text-gray-400">{item.replace('_', ' ')}:</span> {aboutMe[item]}
                        </p>
                    ))}
                </section>
            </div>
        );
    }

    return (
        <p className="far-galaxy">
            <span className="spinner-border text-warning"></span>
            <span className="spinner-grow spinner-grow-sm">Loading...</span>
        </p>
    );
};

export default AboutMe;