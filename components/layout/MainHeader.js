import Link from "next/link";
import { Fragment } from "react";
import classes from "./MainHeader.module.css";
const MainHeader = ({ children }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>NextEvent</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
