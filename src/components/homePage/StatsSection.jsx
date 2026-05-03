// import { statsDataFetch } from "@/lib/data";
// import React from "react";

// const StatsSection = async () => {
//   const stats = await statsDataFetch();

//   return (
//     <section className="container mx-auto py-30 text-center px-4">
//       {/* Top Text */}
//       <p className="text-sm tracking-widest text-red-400 mb-2 animate__animated animate__fadeInDown">
//         AWESOME STATS
//       </p>

//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] mb-4 animate__animated animate__fadeInUp">
//         Milestones Achieved
//       </h2>

//       {/* Divider */}
//       <div className="flex justify-center items-center gap-2 mb-14 animate__animated animate__fadeIn">
//         <div className="h-[1px] w-16 bg-red-300"></div>
//         <div className="w-3 h-3 bg-red-300 rotate-45"></div>
//         <div className="h-[1px] w-16 bg-red-300"></div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mx-auto ">
//         {stats.map((item, index) => (
//           <div
//             key={item.id}
//             className="relative bg-[#e9dfdb] p-14 text-left rounded-sm border-b-4 border-r-4 border-[#7d5a6b] hover:shadow-xl hover:translate-y-2 transition-all animate__animated animate__fadeInUp"
//             style={{ animationDelay: `${index * 0.15}s` }}
//           >
//             {/* Icon */}
//             <div className="absolute top-3 right-4 text-5xl opacity-10">
//               {item.icon}
//             </div>

//             {/* Number */}
//             <h3 className="text-2xl md:text-3xl font-bold text-[#7d5a6b]">
//               {item.number}
//             </h3>

//             {/* Label */}
//             <p className="text-sm text-[#2c3e50] mt-1">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
