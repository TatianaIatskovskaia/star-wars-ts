import {useEffect, useState} from "react";
import {about, base_url, period} from "../utils/constants.ts";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(() => {
        const saved = localStorage.getItem('about_me');
        return saved ? JSON.parse(saved) : null;
        });

    useEffect(() => {
        const timestamp = Number(localStorage.getItem('time'));
        const isExpired = Date.now() - timestamp > period;

        if (!aboutMe || isExpired) {
            fetch(`${base_url}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('about_me', JSON.stringify(data));
                    localStorage.setItem('time', String(Date.now()))
                    setAboutMe(data)
                })
                .catch(() => setAboutMe(`Error loading crawl`));
        }
    }, [])

    if (aboutMe) {
        return (
            <div>
                <section className={'float-left w-1/4 mt-2 mr-4 mb-4'}>
                    <img className="w-full shadow-hero" src={`${base_url}/${aboutMe.image}`} alt={`${aboutMe.name}`}/>
                </section>
                <section>
                    {about.map((item) => <p key={item}
                                            className={'text-3xl text-justify leading-normal tracking-widest capitalize'}>{item.replace('_', ' ')}: {aboutMe[item]}</p>)}
                </section>
            </div>

        )
    } else {
        return (
            <p className="far-galaxy">
                <span className="spinner-border text-warning"></span>
                <span className="spinner-grow spinner-grow-sm">Loading...</span>
            </p>
        )
    }
};

export default AboutMe;