// import { testimonialsDataFetch } from "@/lib/data";
// import Image from "next/image";
// import React from "react";

// const TestimonialSection = async () => {
//   const data = await testimonialsDataFetch();

//   return (
//     <section className="bg-[#e9dfdb] py-10 w-full">
//       <div className="container mx-auto py-10 px-4 text-center">
//         {/* Top Text */}
//         <p className="text-sm tracking-widest text-red-400 mb-2 animate__animated animate__fadeInDown">
//           STUDENT FEEDBACK
//         </p>

//         <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-4 animate__animated animate__fadeInUp">
//           Best reviews and & feedback by top <br /> Students
//         </h2>

//         {/* Divider */}
//         <div className="flex justify-center items-center gap-2 mb-12 animate__animated animate__fadeIn">
//           <div className="h-[1px] w-16 bg-red-300"></div>
//           <div className="w-3 h-3 bg-red-300 rotate-45"></div>
//           <div className="h-[1px] w-16 bg-red-300"></div>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mx-auto">
//           {data.map((item, index) => (
//             <div
//               key={item.id}
//               className="bg-white p-8 rounded-lg shadow-sm animate__animated animate__fadeInUp"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div className="flex justify-center mb-4">
//                 <div className="w-20 h-20 rounded-full bg-red-400 flex items-center justify-center overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={80}
//                     height={80}
//                   />
//                 </div>
//               </div>

//               <h3 className="text-lg font-semibold text-[#2c3e50]">
//                 {item.name}
//               </h3>

//               <p className="text-red-500 text-sm mb-4">{item.role}</p>

//               <p className="text-gray-500 text-sm leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <button
//           className="mt-10 px-6 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition cursor-pointer animate__animated animate__fadeInUp"
//           style={{ animationDelay: "0.5s" }}
//         >
//           See More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;
