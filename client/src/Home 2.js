import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Auth from '../src/utils/auth'
function Home() {
  const loggedIn = Auth.loggedIn();
    return(
      <>
      {loggedIn && (
        <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </div>

      )}
      </>
    )
}

export default Home;