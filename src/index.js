import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import NotFound404 from "./containers/NotFound404";
import ProtectedComponent from "./components/ProtectedComponent";
import HomePage from "./containers/HomePage";
import Category from "./containers/Category";
import { recipeAPI } from "./services/recipeAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import RecipeByCategory from "./containers/RecipeByCategory";
import Favorite from "./containers/Favorite";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={recipeAPI}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/category"
              element={
                <ProtectedComponent>
                  <Category />
                </ProtectedComponent>
              }
            />
            <Route
              path="/category/:id"
              element={
                <ProtectedComponent>
                  <RecipeByCategory />
                </ProtectedComponent>
              }
            />
            <Route
              path="/favorite"
              element={
                <ProtectedComponent>
                  <Favorite />
                </ProtectedComponent>
              }
            />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
