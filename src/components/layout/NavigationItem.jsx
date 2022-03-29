import { Link } from "react-router-dom";

function NavigationItem(props) {
  return (
    <div>
      <Link to="" name="home">
        <div className="nav_item" id="home_nav">
          <i className="bi bi-columns-gap"></i>
          <span>Navigation Title</span>
        </div>
      </Link>
    </div>
  );
}

export default NavigationItem;
