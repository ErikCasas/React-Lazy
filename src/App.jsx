import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ListPokemons from "./pages/ListPokemons";
const ListPokemonsLazy = lazy(()=>import('./pages/ListPokemons'))
import Header from "./components/Header";
import Error from "./components/Error";
// import Detail from "./pages/Detail";
const DetailLazy = lazy(()=> import("./pages/Detail"))
// import About from "./pages/About";

const AboutLazy = lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Suspense fallback={<h2>CARGANDO...</h2>}>

          <Routes>
            {/* <Route path="/" Component={ListPokemons} /> */}
            
            <Route path="/" Component={ListPokemonsLazy} />
            <Route path="/about" Component={AboutLazy} />

            {/* <Route path="/about" Component={About} /> */}
            <Route path="/pokemon/:idPokemon" Component={DetailLazy} />
            <Route path="*" Component={Error} />
          </Routes>

        </Suspense>

      </BrowserRouter>
      

    </>
  );
}

export default App;
