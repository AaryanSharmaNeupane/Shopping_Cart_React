import "./App.css";

import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <main>
        <AllRoutes />
      </main>

      <Footer />
    </>
  );
}

export default App;
