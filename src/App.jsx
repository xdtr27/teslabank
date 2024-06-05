


/// Icons
import Home from "./sections/Home";
import Benefits from "./sections/Benefits";
import Feedbacks from "./sections/Feedbacks";
import Adversiting from "./sections/Adversiting";
import DownloadApp from "./sections/DownloadApp";
import Blog from "./sections/Blog";
import Help from "./sections/Help";
import Header from "./sections/Header";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Benefits />
        <Feedbacks />
        <Adversiting />
        <DownloadApp />
        <Blog />
        <Help />
      </main>
    </>
  );
}
