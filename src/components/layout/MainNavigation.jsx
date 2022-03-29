import userImg from "../../assets/img_avatar.png";
import NavigationItem from "./NavigationItem";

function MainNavigation() {
  return (
    <nav>
      <div className="">
        <img src={userImg} alt="..." width="65" className="circle-image" />
        <div className="profile_info">
          <span className="username">
            <b>ADMIN</b>
          </span>
        </div>
      </div>
      <NavigationItem />
      <NavigationItem />
      <NavigationItem />
      <NavigationItem />
    </nav>
  );
}

export default MainNavigation;
