export const booksDataFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-ph.vercel.app/books.json",
  );
  const data = await res.json();
  return data.books;
};
export const testimonialsDataFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-ph.vercel.app/testimonials.json",
  );
  const data = await res.json();
  return data;
};
export const statsDataFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-ph.vercel.app/stats.json",
  );
  const data = await res.json();
  return data;
};

export const categoriesDataFetch = async () => {
  const res = await fetch(
    "https://online-book-borrowing-platform-ph.vercel.app/category.json",
  );
  const data = await res.json();
  return data.categories;
};
