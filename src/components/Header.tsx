import { Link, useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
// const onAboutClick = () => {
//   navigate("/about");
// };
function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
        <Link to={"/about"}>About</Link>
          {/* <button onClick={onAboutClick}>About</button> */}
        </li>
      </ul>
    </header>
  );
}
export default Header;