import MainNavigation from "./MainNavigation";
import { useTitle } from "../../context/TitleContext";
import "./Layout.css";

function Layout(props) {
  const { title } = useTitle();

  return (
    <div className={`d-flex w-100`} name="parent-layout">
      <MainNavigation className="sidebar" />
      <main className="d-flex flex-column">
        <div className="header d-flex justify-content-between">
          <h1>{title}</h1>
          {title !== "Dashboard" && (
            <div>
              <input type="text" placeholder="Search" />
              <button>ADD BUTTON</button>
              {(title === "Groups" || title === "Schedules") && (
                <button>BULK UPLOAD</button>
              )}
            </div>
          )}
        </div>
        <div></div>
        <div className="content">{props.children}</div>
        <div className="footer">
          <span>
            FEU Alabang - College of Computer Studies and Multimedia Arts
          </span>
        </div>
      </main>
    </div>
  );
}

export default Layout;
