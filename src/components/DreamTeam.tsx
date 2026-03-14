import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";
import {useContext} from "react";
import {NavContext} from "../utils/context.ts";

const DreamTeam = () => {
    const {name} = useContext(NavContext);

    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="col-span-3 text-center text-2xl">Dream team</h2>
            {friends.filter(friend => friend !== name).map((friend, i) => <Friend key={friend} friend={friend} pos={i + 1}/>)}
        </section>
    );
};

export default DreamTeam;