import './Card.css';
import {Link} from "react-router-dom";

const Card = ({user}) => {
    return (
        <div className="Card">
            <img src={user.avatar_url} alt={user.login} className="Card_image" />
            <div className="Card_title">{user.login}</div>
            <Link to={'/profile/' + user.login} className="Card_link">Открыть</Link>
        </div>
    )
}

export default Card;