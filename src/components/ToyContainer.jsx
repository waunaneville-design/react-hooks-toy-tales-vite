import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
       