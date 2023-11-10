import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./MyComponent/EmailSignatureForm";
import Header from "./MyComponent/Header";
import About from "./MyComponent/About";
import Footer from "./MyComponent/Footer";

function App() {
  return (
    <Router>
      <Header title={" Sign Ate"} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <StudentForm />
            </>
          }
        />
        <Route
          exact
          path="/About"
          element={
            <>
              <About />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;