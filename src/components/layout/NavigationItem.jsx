import { Link } from "react-router-dom";

function NavigationItem(props) {
  return (
    <nav>
      <Link to={props.nav.url} name="home">
        <i className="bi bi-columns-gap"></i>
        <span>{props.nav.title}</span>
      </Link>
    </nav>
  );
}

export default NavigationItem;
