import './Repos.css';
import React from "react";

export const Repos = ({repos}) => {
    return (
        <React.Fragment>
            {repos.map(repo => (
                    <div className="Repo" key={repo.id}>
                        <a href={repo.html_url} className="Repo_link">{repo.name}</a>
                    </div>
                )
            )}
        </React.Fragment>
    )
}