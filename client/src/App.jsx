import { Navbar, Welcome, Services, SignForm } from "./components";

const App = () => {
  return (
    <div className="min-h-screen ">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        <SignForm />
      </div>
      <Services />
    </div>
  );
};

export default App;
