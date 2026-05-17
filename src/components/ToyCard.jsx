import React from "react";

const TOYS_URL = "http://localhost:3001/toys";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  function handleLike() {
    const updatedLikes = toy.likes + 1;

    fetch(`${TOYS_URL}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not update toy likes");
        return response.json();
      })
      .then(onUpdateToy)
      .catch(console.error);
  }

  function handleDelete() {
    fetch(`${TOYS_URL}/${toy.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Could not delete toy");
        onDeleteToy(toy.id);
      })
      .catch(console.error);
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
