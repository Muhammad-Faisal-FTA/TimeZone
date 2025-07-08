import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App




// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import "./App.css";

// const testimonials = [
//   {
//     name: "Sarah Ali",
//     feedback:
//       "This platform has helped our team stay on track with ease. Highly recommended!",
//   },
//   {
//     name: "John Doe",
//     feedback:
//       "A great user experience and super fast performance. Love the clean UI!",
//   },
//   {
//     name: "Ayesha Khan",
//     feedback:
//       "We launched our project in days using this tool. Support was amazing!",
//   },
// ];

// function App() {
//   const [index, setIndex] = useState(0);

//   const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
//   const prev = () =>
//     setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-20 px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Build Fast, Launch Faster
//         </h1>
//         <p className="text-lg md:text-xl mb-6">
//           A one-stop solution to build and deploy your product efficiently.
//         </p>
//         <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
//           Get Started
//         </Button>
//       </section>

//       {/* Testimonial Carousel */}
//       <section className="py-16 px-4 bg-gray-100">
//         <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
//           What Our Users Say
//         </h2>
//         <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
//           <Card className="w-full shadow-lg">
//             <CardContent className="p-6">
//               <p className="text-lg">"{testimonials[index].feedback}"</p>
//               <div className="mt-4 text-right font-bold">
//                 — {testimonials[index].name}
//               </div>
//             </CardContent>
//           </Card>
//           <div className="flex gap-4 mt-4">
//             <Button variant="outline" onClick={prev}>
//               <ChevronLeft className="w-5 h-5" />
//             </Button>
//             <Button variant="outline" onClick={next}>
//               <ChevronRight className="w-5 h-5" />
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-blue-900 text-white py-10 px-6 mt-10">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Company</h4>
//             <ul className="space-y-2">
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Product</h4>
//             <ul className="space-y-2">
//               <li>Features</li>
//               <li>Pricing</li>
//               <li>Documentation</li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold mb-2">Contact</h4>
//             <ul className="space-y-2">
//               <li>Email: contact@example.com</li>
//               <li>Phone: +123 456 789</li>
//               <li>Address: 123 Tech Street, NY</li>
//             </ul>
//           </div>
//         </div>
//         <p className="text-center mt-8 text-sm">© 2025 Your Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
