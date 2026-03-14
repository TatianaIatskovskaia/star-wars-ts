import {type ChangeEvent, useState} from "react";
import Planets from "./Planets.tsx";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";

const Contact = () => {
    const {heroId = defaultHero} = useParams();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        planet: '',
        subject: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return  (heroId in characters) ? (
        <div className={'flex items-center justify-center'}>
            <form
                className={'flex flex-col gap-4 border rounded-3xl mt-2 w-1/2 p-5 bg-gray mb-2 text-3xl leading-normal tracking-widest'}>
                <label className={'w-full'}>First Name
                    <input
                        className={'w-full border rounded-md p-3 box-border mt-1.5 mb-4 resize-y'}
                        type="text"
                        name="firstname"
                        placeholder="Your name.."
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </label>
                <label className={'w-full'}>Last Name
                    <input
                        className={'w-full border rounded-md p-3 box-border mt-1.5 mb-4 resize-y'}
                        type="text"
                        name="lastname"
                        placeholder="Your last name.."
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </label>
                <label className={'w-full'}>Planet
                    <select
                        className={'w-full border rounded-md p-3 box-border mt-1.5 mb-4 resize-y'}
                        name="planet"
                        value={formData.planet}
                        onChange={handleChange}
                    >
                        <Planets/>
                    </select>
                </label>
                <label className={'w-full'}>Subject
                    <textarea
                        className={'w-full border rounded-md p-3 box-border mt-1.5 mb-4 resize-y'}
                        name="subject"
                        placeholder="Write something.."
                        style={{height: '200px'}}
                        value={formData.subject}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <input
                    className={'bg-danger border rounded-md px-3 cursor-pointer hover:bg-amber-950 hover:text-amber-200 w-1/4 mb-2 ml-auto'}
                    type="submit" value="Submit"/>
            </form>
        </div>
    ) : <ErrorPage/>;
};

export default Contact;