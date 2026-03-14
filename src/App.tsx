import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {characters, defaultHero} from "./utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {NavContext} from "./utils/context.ts";
import {useLocation} from "react-router";

function App() {
    const [name, setName] = useState<string>(defaultHero);

    const changeName = (page: string) => {
        setName(page)
    }

    return (
        <div className='mx-2'>
            <NavContext value={{
                name, changeName
            }}>
                <Header/>
                <HeroManager/>
                <Main/>
                <Footer/>
            </NavContext>
        </div>
    )
}

const HeroManager = () => {
    const {changeName} = useContext(NavContext);
    const {pathname} = useLocation();

    useEffect(() => {
        const segments = pathname.split('/');
        const heroId = segments.find(segment => segment in characters) || defaultHero;
        changeName(heroId);
    }, [pathname, changeName]);

    return null;
}

export default App
