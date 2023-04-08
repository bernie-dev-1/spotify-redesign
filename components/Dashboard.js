import MainContent from "./MainContent";
import RecentlyPlayed from "./RecentlyPlayed";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <main>
      <Sidebar />
      <MainContent />
      <RecentlyPlayed />
    </main>
  );
};

export default Dashboard;
