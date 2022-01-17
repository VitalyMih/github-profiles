import './Home.css';
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import {useContext} from "react";
import {GithubContext} from "../../context/github/githubContext";
import React from "react";

const Home = () => {
    const {users, loading} = useContext(GithubContext);
    console.log('Первый коммит')
    console.log('Второй коммит')
    return (
        <div className="Home">
            <Search />
            <div className="Home_cards">
                {loading
                ? <p className="Home_loading">Loading...</p>
                : users.map(user => (
                        <React.Fragment key={user.id}>
                            <Card user={user} />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;
