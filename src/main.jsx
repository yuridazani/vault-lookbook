// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import LookbookPage from './pages/LookbookPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import JournalPage from './pages/JournalPage.jsx';
import JournalDetailPage from './pages/JournalDetailPage.jsx';
import CollectionDetailPage from './pages/CollectionDetailPage.jsx';

// Konfigurasi router dengan Layout Route
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App menjadi elemen utama
    children: [ // Halaman-halaman ini akan dirender di dalam <Outlet />
      {
        index: true, // Ini menandakan ini adalah halaman default untuk "/"
        element: <HomePage />,
      },
      {
        path: "lookbook",
        element: <LookbookPage />,
      },      { // <-- TAMBAHKAN INI
        path: "collections",
        element: <CollectionsPage />,
      },
      { // <-- TAMBAHKAN INI JUGA
        path: "journal",
        element: <JournalPage />,
      },
      { // <-- TAMBAHKAN RUTE BARU INI
        path: "journal/:articleId", // ':' menandakan ini adalah parameter dinamis
        element: <JournalDetailPage />,
      },
      { // <-- TAMBAHKAN RUTE BARU INI
        path: "collections/:collectionId",
        element: <CollectionDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)