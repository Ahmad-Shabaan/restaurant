import React, { useState , useEffect } from "react";
import Home from "./Pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { BookTable } from "./Pages/BookTable/BookTable";
import { Falastine } from "./Pages/Falastine/Falastine";
const CheckRoutes = ({ element, isUser }) => {
  return isUser ? element : <Navigate to={"/login"} replace />;
};
export const DataContext = React.createContext();
const App = () => {
  let [isUser, setIsUser] = useState(false);
  let [showFalastine, setShowFalastine] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowFalastine(false);
    }, 4000);
  }, []);
  const handleCheckUser = () => {
    setIsUser(true);
  };
  const handleLogout = () => {
    setIsUser(false);
  };
  return (
    <main>
      {showFalastine ? (
        <Falastine />
      ) : (
        <Routes>
          <Route
            element={
              <DataContext.Provider value={{ isUser, handleLogout }}>
                <Home />
              </DataContext.Provider>
            }
            path="/"
          />
          <Route
            element={
              <DataContext.Provider value={handleCheckUser}>
                <Login />
              </DataContext.Provider>
            }
            path="/login"
          />
          <Route
            element={
              <CheckRoutes
                element={<BookTable handleLogoutRef={handleLogout} />}
                isUser={isUser}
              />
            }
            path="/book_table"
          />
        </Routes>
      )}
    </main>
  );
};

export default App;
