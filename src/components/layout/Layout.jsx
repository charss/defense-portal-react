import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.parent_grid}>
      <MainNavigation className={classes.div1} />
      <div className={classes.div2}>{props.children}</div>
    </div>
  );
}

export default Layout;
