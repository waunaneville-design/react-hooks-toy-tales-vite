import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const TOYS_URL = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(TOYS_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Could not fetch toys");
        return response.json();
      })
      .then(setToys)
      .catch(console.error);
  }, []);

 function handleClick() {
    setShowForm((prevShowForm) => !prevShowForm);
  }
