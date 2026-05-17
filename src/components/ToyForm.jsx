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

    .then((response) => {
        if (!response.ok) throw new Error("Could not create new toy");fetch(TOYS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })

      return response.json();
      })
      .then((createdToy) => {
        onAddToy(createdToy);
        setName("");
        setImage("");
      })
      .catch(console.error);
  }
