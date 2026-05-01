import { booksDataFetch } from "@/lib/data";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const BooksDetails = async ({ params }) => {
  const { id } = await params;
  const books = await booksDataFetch();

  const book = books.find((book) => book.id === parseInt(id));
  console.log(book);

  const { title, author, description, available_quantity, image_url } = book;
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20">
      <Card className="max-w-6xl mx-auto bg-[#e9dfdb] border border-red-500 shadow-2xl p-6 md:p-10 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 flex justify-center items-start">
            <div className="relative group w-full max-w-[400px] aspect-[3/4] rounded-xl overflow-hidden   border ">
              <Image
                src={image_url}
                alt={title}
                fill
                className="object-cover "
              />
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                  {book?.title}
                </h1>
                <Chip
                  color={available_quantity > 0 ? "success" : "danger"}
                  variant="flat"
                  className="mt-2"
                >
                  {available_quantity > 0 ? "In Stock" : "Out of Stock"}
                </Chip>
              </div>

              <p className="text-lg text-gray-400 font-medium mb-6 italic">
                by <span className="text-blue-400"> {author}</span>
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-200">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-gray-500 text-sm uppercase tracking-widest font-bold">
                  Availability:
                </span>
                <span
                  className={`text-lg font-bold ${available_quantity <= 2 ? "text-orange-500" : "text-gray-700"}`}
                >
                  {available_quantity} copies left
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <Button
                size="lg"
                disabled={available_quantity === 0}
                className={`w-full md:w-64 h-16 text-lg font-bold rounded-xl transition-all duration-300
                  ${
                    available_quantity > 0
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                      : "bg-gray-800 text-gray-500 cursor-not-allowed"
                  }`}
              >
                {available_quantity > 0 ? "Borrow This Book" : "Not Available"}
              </Button>
              <p className="text-xs text-gray-500 mt-3 ml-1">
                * Terms and conditions apply for borrowing.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BooksDetails;
