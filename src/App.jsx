import React from "react";
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from './components/products/ProductList'
import ProjectList from "./components/projects/ProjectList";
import Showstatuses from './components/Showstatuses'
import DefaultLayout from "./layouts/DefaultLayout";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={

            <DefaultLayout>

              <ProductList />
            </DefaultLayout>


          } />

           <Route path="/projects" element={

            <DefaultLayout>

              <ProjectList />
            </DefaultLayout>


          } />
          <Route path="/statuses" element={

            <DefaultLayout>
              <Showstatuses />
            </DefaultLayout>



          } />

        </Routes>
      </Router>

    </>
  )
}

export default App
