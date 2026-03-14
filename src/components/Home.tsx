import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {heroId = defaultHero} = useParams();

    return (heroId in characters) ? (
        <main>
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ) : <ErrorPage/>
};

export default Home;