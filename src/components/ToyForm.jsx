import React, { useState } from "react";

const TOYS_URL = "http://localhost:3001/toys";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };
