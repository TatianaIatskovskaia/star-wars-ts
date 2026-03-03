import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {navItems} from "./utils/constants.ts";
import {useState} from "react";
import {NavContext} from "./utils/context.ts";

function App() {
    const [page, setPage] = useState<string>(navItems[0]);

    const changePage = (page: string) => {
        setPage(page)
    }

    return (
        <div className='mx-2'>
            <NavContext value={{
                page, changePage
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </NavContext>
        </div>
    )
}

export default App
