import './Profile.css';
import {useContext, useEffect} from "react";
import {GithubContext} from "../../context/github/githubContext";
import React from "react";
import {Link} from "react-router-dom";
import {Repos} from "../../components/Repos/Repos";

const Profile = ({match}) => {
    const {getUser, getRepos, user, loading, repos} = useContext(GithubContext);
    const userName = match.params.name;

    useEffect(() => {
        getUser(userName);
        getRepos(userName);
    }, [])

    if (loading) {
        return <p className="Profile_loading">Loading...</p>
    }

    const {
        name, company, avatar_url,
        location, bio, blog, login,
        html_url, followers, public_repos, public_gists,
        following
    } = user;

    return (
        <React.Fragment>
            <Link to="/" className="Profile_link">На главную</Link>

            <div className="Profile">
                <div className="Profile_card">
                    <div className="Profile_image image-profile">
                        <img src={avatar_url} alt={name} className="image-profile_img" />
                        <div className="image-profile_name">{name}</div>
                        {location && <div className="image-profile_location">Location: {location}</div>}
                    </div>
                    <div className="Profile_body body-profile">
                        {bio && <div className="body-profile_bio">BIO: <p style={{margin: 0}}>{bio}</p></div> }
                        <a href={html_url} className="body-profile_link">Открыть профиль на GitHub</a>
                        <ul className="body-profile_list">
                            {login && <li className="body-profile_item">
                                <strong>Username: </strong> {login}
                            </li>}

                            {company && <li className="body-profile_item">
                                <strong>Company: </strong> {company}
                            </li>}

                            {blog && <li className="body-profile_item">
                                <strong>Website: </strong> {blog}
                            </li>}
                        </ul>

                        <div className="body-profile_followers">Followers: {followers}</div>
                        <div className="body-profile_follow">Following: {following}</div>
                        <div className="body-profile_repos">Repos: {public_repos}</div>
                        <div className="body-profile_gists">Gists: {public_gists}</div>
                    </div>
                    {repos.length
                    ?
                    <div className="Profile_repos repos-profile">
                        <div className="repos-profile_title">Repos:</div>
                        <Repos repos={repos} />
                    </div>
                    : null}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;