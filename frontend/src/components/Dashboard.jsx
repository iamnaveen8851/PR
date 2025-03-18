import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.loginReducer);

  useEffect(() => {
    toast.success(`Welcome ${user}!`);
  }, []);
  return <div>Dashboard </div>;
};

export default Dashboard;
