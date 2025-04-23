import ProductBoxes from "./compoment/HorizontalSlider";
import Slider from "./compoment/slider";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-8">
      <Slider/>
      <ProductBoxes/>
    </main>
  );
}

// import Link from 'next/link';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
//       <div className="text-center max-w-lg px-6 py-12 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">
//           In Sha Allah, sab Quarter 2 Next.js mein pass ho jaenge! 💪  
//           Aap sabne bilkul bhi darna nahi, pass fail life ka hissa hai. 😊
//         </h1>
//         <h2 className="text-4xl font-bold mb-8 text-gray-800">
//           NextJS MCQS Practice Question
//         </h2>
//         <p className="text-lg mb-8 text-gray-600">
//           Choose your level and start learning!
//         </p>
//         <div className="flex flex-col gap-6">
//           <Link href="/basic">
//             <button className="w-full py-4 px-8 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
//               Start Basic Level
//             </button>
//           </Link>
//           <Link href="/intermediate">
//             <button className="w-full py-4 px-8 bg-green-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
//               Start Intermediate Level
//             </button>
//           </Link>
//           <Link href="/advanced">
//             <button className="w-full py-4 px-8 bg-red-600 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105">
//               Start Advanced Level
//             </button>
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }
