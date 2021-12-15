import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function Home() {
    return(
        <div>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </div>
    )
}

export default Home;