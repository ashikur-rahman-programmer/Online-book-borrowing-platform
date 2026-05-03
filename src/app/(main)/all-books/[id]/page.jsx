import "animate.css";
import { booksDataFetch } from "@/lib/data";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import NotFoundPage from "@/app/not-found";

const BooksDetails = async ({ params }) => {
  const { id } = await params;
  const books = await booksDataFetch();

  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return <NotFoundPage />;
  }
  const { title, author, description, available_quantity, image_url } = book;

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 animate__animated animate__fadeInUp">
      <Card className="max-w-6xl mx-auto bg-[#e9dfdb] border border-red-500 shadow-2xl p-6 md:p-10 backdrop-blur-md animate__animated animate__zoomIn">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Image */}
          <div className="md:col-span-5 flex justify-center items-start animate__animated animate__fadeInLeft">
            <div className="relative group w-full max-w-[400px] aspect-[3/4] rounded-xl overflow-hidden border animate__animated animate__pulse animate__delay-1s">
              <Image
                src={image_url}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-7 flex flex-col justify-center gap-6 py-2 animate__animated animate__fadeInRight">
            <div>
              {/* Title + Chip */}
              <div className="flex gap-2 items-start mb-2">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent leading-tight animate__animated animate__fadeInDown">
                  {title}
                </h1>

                <Chip
                  color={available_quantity > 0 ? "success" : "danger"}
                  variant="flat"
                  className="mt-2 animate__animated animate__fadeIn"
                >
                  {available_quantity > 0 ? "In Stock" : "Out of Stock"}
                </Chip>
              </div>

              {/* Author */}
              <p className="text-lg text-gray-400 font-medium mb-4 italic animate__animated animate__fadeIn">
                by <span className="text-blue-400">{author}</span>
              </p>

              {/* Description */}
              <div className="space-y-4 animate__animated animate__fadeInUp">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              {/* Availability */}
              <div className="mt-4 flex items-center gap-3 animate__animated animate__fadeInUp">
                <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                  Availability:
                </span>
                <span
                  className={`text-lg font-bold ${
                    available_quantity <= 2
                      ? "text-orange-500"
                      : "text-gray-700"
                  }`}
                >
                  {available_quantity} copies left
                </span>
              </div>
            </div>

            {/* Button */}
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <Button
                size="lg"
                disabled={available_quantity === 0}
                className={`px-6 py-2 border border-red-400 rounded transition cursor-pointer ${
                  available_quantity > 0
                    ? "bg-transparent text-red-400 hover:bg-red-400 hover:text-white"
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"
                }`}
              >
                {available_quantity > 0 ? "Borrow This Book" : "Not Available"}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BooksDetails;
