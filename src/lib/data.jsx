export const booksDataFetch = async () => {
  const res = await fetch("http://localhost:3000/books.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.books;
};
export const testimonialsDataFetch = async () => {
  const res = await fetch("http://localhost:3000/testimonials.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
export const statsDataFetch = async () => {
  const res = await fetch("http://localhost:3000/stats.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const categoriesDataFetch = async () => {
  const res = await fetch("http://localhost:3000/category.json", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.categories;
};
