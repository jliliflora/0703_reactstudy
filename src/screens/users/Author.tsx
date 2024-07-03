import { Link, Outlet, useParams } from "react-router-dom";
import {JKbooks} from "../../db";

function User() {
    const {authorName} = useParams();
    return (<div>
        {/* <h1>User with it {userId} is named: {authors[Number(userId)-1].name}</h1> */}
        <h1>
            {authorName}
        </h1>
        <hr/>

        <ul>
            {JKbooks.map((book) => (
          <li key={book.name}><Link to={`${book.name}`}>{book.name}</Link></li>
        ))}
        </ul>
        <Outlet />
        </div>);
}
export default User;