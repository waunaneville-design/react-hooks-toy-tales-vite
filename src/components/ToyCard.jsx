import React from "react";

const TOYS_URL = "http://localhost:3001/toys";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  function handleLike() {
    const updatedLikes = toy.likes + 1;

   