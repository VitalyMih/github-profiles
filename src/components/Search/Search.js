import './Search.css';
import {useContext, useState} from "react";
import {AlertContext} from "../../context/alert/alertContext";
import {GithubContext} from "../../context/github/githubContext";

const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== 'Enter') return;

        github.clearUsers();

        if (value.trim()) {
            alert.hide();
            github.searchUsers(value.trim());
        } else {
            alert.show('Введите имя пользователя!')
        }
    }

    return (
        <div className="Search">
            <input
                type="text"
                className="Search_input"
                placeholder="Введите имя пользователя..."
                onKeyPress={onSubmit}
                onChange={(event) => setValue(event.target.value)}
            />
        </div>
    )
}

export default Search;