import { Outlet } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="menu">MENU</div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
