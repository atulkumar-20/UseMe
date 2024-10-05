import { Outlet, useNavigate} from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../components/chatList/ChatList";
const Dashboard = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);
  if (!isLoaded) {
    return "Loading....";
  }
  return (
    <>
      <div className="dashboard">
        <div className="menu"><ChatList/></div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
