import React, {useReducer} from "react";
import {GithubReducer} from "./githubReducer";
import axios from "axios";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../types";
import {GithubContext} from "./githubContext";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const GithubState = ({children}) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setLoading = () => dispatch({type: SET_LOADING})

    const searchUsers = async value => {
        setLoading();

        const response = await axios.get(
            `https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items,
        })
    }

    const getUser = async name => {
        setLoading();

        const response = await axios.get(
            `https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )

        dispatch({
            type: GET_USER,
            payload: response.data,
        })
    }

    const getRepos = async name => {
        setLoading();

        const response = await axios.get(
            `https://api.github.com/users/${name}/repos?&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
        )
        dispatch({
            type: GET_REPOS,
            payload: response.data,
        })
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS})

    const {user, users, loading, repos} = state;

    return (
        <GithubContext.Provider value={{
            clearUsers, getRepos, getUser, searchUsers, setLoading,
            user, users, loading, repos
        }}>
            {children}
        </GithubContext.Provider>
    )
}