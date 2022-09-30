/** React Router */
import { Outlet } from "react-router-dom";

/** Component */
import { Navbar } from "../components/Navbar";

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
