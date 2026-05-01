export const booksDataFetch = async () => {
  const res = await fetch("http://localhost:3000/books.json");
  const data = await res.json();
  return data.books;
};
export const testimonialsDataFetch = async () => {
  const res = await fetch("http://localhost:3000/testimonials.json");
  const data = await res.json();
  return data;
};
export const statsDataFetch = async () => {
  const res = await fetch("http://localhost:3000/stats.json");
  const data = await res.json();
  return data;
};

export const categoriesDataFetch = async () => {
  const res = await fetch("http://localhost:3000/category.json");
  const data = await res.json();
  return data.categories;
};
