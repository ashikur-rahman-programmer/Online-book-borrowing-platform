import React from "react";

const BooksDetails = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h2>Book Details</h2>
      <p>Book ID: {id}</p>
    </div>
  );
};

export default BooksDetails;
