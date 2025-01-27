import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats, setStats} = useContext(TwitterContext);


    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={() => {
                    setStats(prevStats => ({ ...prevStats, followers: prevStats.followers + 1 }));
                }}
                    onContextMenu={e => {
                    e.preventDefault(); // Предотвращаем контекстное меню
                    setStats(prevStats => ({ ...prevStats, followers: Math.max(prevStats.followers - 1, 0) }));
                }}>
                    Followers: {stats.followers}
                </div>
                <div onClick={() => {
                    setStats(prevStats => ({...prevStats, following: prevStats.following + 1 }));
                }}
                        onContextMenu={e =>{
                        e.preventDefault();
                        setStats(prevStats => ({ ...prevStats, following: Math.max(prevStats.following - 1, 0) }));
                    }}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;