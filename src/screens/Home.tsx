import { Link } from "react-router-dom";
import { authors } from "../db";
function Home() {
    return (<div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.name}><Link to={`/authors/${author.name}`}>{author.name}</Link></li>
        ))}
      </ul>
    </div>);
  }
  export default Home;