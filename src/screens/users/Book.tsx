import { Link, Outlet, useParams } from "react-router-dom";

function Book() {
    const {book} = useParams();
    return <div>
        <h1>{book}</h1>
        <Link to="Chapters">Chapters</Link>
        <br />
        <Link to="Characters">Characters</Link>
        <Outlet/>
    </div>;
}

export default Book;