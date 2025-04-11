// import { useState } from "react";
// import {
//   BlackholeVortex, TornadoCanvs, AsteroidBelt, RainingEffect, Stars, RealisticMeteors,
//   Mouselight, HackerBackground, Nebula, SouthPoleScene, PlasmaFlow, Flash,
//   ThunderScene, Jelly, Card3D, DualSlideShow, FireEffectInput,
//   NeoInput, LightningInput, PopperInput, VibrationInput, SlideShow,
//   SparksInput
// } from "sparkels_ui";
// import { Menu } from "lucide-react";

// const slides = [
//   { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", description: "Experience the beauty of nature." },
//   { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", description: "Explore cutting-edge technology." },
//   { image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", description: "Dive into the mysteries of the cosmos." },
//   { image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca", description: "Feel the serenity of the ocean waves." }
// ];

// const componentsList = [
//   { name: "BlackholeVortex", component: <BlackholeVortex /> },
//   { name: "Tornado", component: <TornadoCanvs /> },
//   { name: "Stars", component: <Stars /> },
//   { name: "Meteors", component: <RealisticMeteors /> },
//   { name: "AsteroidBelt", component: <AsteroidBelt /> },
//   { name: "Nebula", component: <Nebula /> },
//   { name: "SouthPoleScene", component: <SouthPoleScene /> },
//   { name: "RainingEffect", component: <RainingEffect /> },
//   { name: "PlasmaFlow", component: <PlasmaFlow /> },
//   { name: "HackerBackground", component: <HackerBackground /> },
//   { name: "ThunderScene", component: <ThunderScene /> },
//   { name: "Flash", component: <Flash /> },
//   { name: "Jelly", component: <Jelly /> },
//   { name: "Mouselight", component: <Mouselight><h1 className="w-[100vw]">Welcome to Sparkels_ui🚀</h1></Mouselight> },
//   {
//     name: "Card3D", component: (
//       <Card3D
//         image="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
//         title="Air Jordan 4 RM"
//         subtitle="men's Shoes\nMRP : ₹ 12 795.00"
//         buttonText="BUY IT NOW"
//         onButtonClick={() => alert("Button clicked!")}
//       />
//     )
//   },
//   { name: "SparkSlide", component: <SlideShow slides={slides} /> },
//   { name: "DualSlideShow", component: <DualSlideShow slides={slides} /> },
//   { name: "LightInput", component: <SparksInput placeholder="Welcome to Sparkels_ui🚀" /> }
// ];

// const Component = () => {
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const [selectedName, setSelectedName] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const usageCode = (name) => `import { ${name} } from "sparkels_ui";

// function App() {
//   return <${name} />;
// }

// export default App;`;

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert("Copied to clipboard!");
//     });
//   };

//   return (
//     <div className="flex max-w-[100vw] bg-black text-white z-10">
//       <button className="absolute top-4 left-4 md:hidden p-2 bg-black rounded" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//         <Menu className="w-6 h-6 text-white" />
//       </button>

//       <div className={`fixed inset-y-0 left-0 bg-black p-4 w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:w-1/4 border-r border-gray-600 transition-transform duration-300 ease-in-out`}>
//         <h2 className="text-xl font-bold mb-4">Components</h2>
//         <ul>
//           {componentsList.map((item, index) => (
//             <li key={index} className="p-2 cursor-pointer hover:bg-gray-700 rounded" onClick={() => {
//               setSelectedComponent(item.component);
//               setSelectedName(item.name);
//               setIsSidebarOpen(false);
//             }}>
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex-1 flex flex-col justify-center items-center p-4 w-[100vw]">
//         {selectedComponent ? selectedComponent : componentsList[0]?.component}
//         {selectedComponent && (
//           <div className="mt-6 rounded-lg flex flex-col justify-start mr-[1000px] w-[30rem] ">
//             <h3 className="text-lg font-semibold">How to Install & Use {selectedName}</h3>

//             <p className="mt-2">To install <code>sparkels_ui</code>, use:</p>
//             <div className="relative">
//               <pre className="bg-black p-2 border-white border rounded text-green-400">npm install sparkels_ui</pre>
//               <button
//                 className="absolute top-1 right-1 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600 "
//                 onClick={() => copyToClipboard("npm install sparkels_ui")}
//               >
//                 Copy
//               </button>
//             </div>

//             <p className="mt-2">Usage:</p>
//             <div className="relative">
//               <pre className="bg-black p-2 border-white border rounded text-green-400 whitespace-pre-wrap">
//                 {usageCode(selectedName)}
//               </pre>
//               <button
//                 className="absolute top-1 right-1  text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
//                 onClick={() => copyToClipboard(usageCode(selectedName))}
//               >
//                 Copy
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Component;
import { useState } from "react";
import {
  BlackholeVortex, TornadoCanvs, AsteroidBelt, RainingEffect, Stars, RealisticMeteors,
  Mouselight, HackerBackground, Nebula, SouthPoleScene, PlasmaFlow, Flash,
  ThunderScene, Jelly, Card3D, DualSlideShow, FireEffectInput,
  NeoInput, LightningInput, PopperInput, VibrationInput, SlideShow,
  SparksInput
} from "sparkels_ui";
import { Menu } from "lucide-react";

const slides = [
  { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", description: "Experience the beauty of nature." },
  { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", description: "Explore cutting-edge technology." },
  { image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", description: "Dive into the mysteries of the cosmos." },
  { image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca", description: "Feel the serenity of the ocean waves." }
];

const componentsList = [
  { name: "BlackholeVortex", component: <BlackholeVortex /> },
  { name: "Tornado", component: <TornadoCanvs /> },
  { name: "Stars", component: <Stars /> },
  { name: "Meteors", component: <RealisticMeteors /> },
  { name: "AsteroidBelt", component: <AsteroidBelt /> },
  { name: "Nebula", component: <Nebula /> },
  { name: "SouthPoleScene", component: <SouthPoleScene /> },
  { name: "RainingEffect", component: <RainingEffect /> },
  { name: "PlasmaFlow", component: <PlasmaFlow /> },
  { name: "HackerBackground", component: <HackerBackground /> },
  { name: "ThunderScene", component: <ThunderScene /> },
  { name: "Flash", component: <Flash /> },
  { name: "Jelly", component: <Jelly /> },
  { name: "Mouselight", component: <Mouselight><h1 className="w-[100vw]">Welcome to Sparkels_ui🚀</h1></Mouselight> },
  {
    name: "Card3D", component: (
      <Card3D
        image="https://c4.wallpaperflare.com/wallpaper/816/770/388/jordan-fly-wade-nike-wallpaper-preview.jpg"
        title="Air Jordan 4 RM"
        subtitle="men's Shoes\nMRP : ₹ 12 795.00"
        buttonText="BUY IT NOW"
        onButtonClick={() => alert("Button clicked!")}
      />
    )
  },
  { name: "SparkSlide", component: <SlideShow slides={slides} /> },
  { name: "DualSlideShow", component: <DualSlideShow slides={slides} /> },
  { name: "LightInput", component: <SparksInput placeholder="Welcome to Sparkels_ui🚀" /> },
  {name:"Fireeffect",component:<FireEffectInput placeholder="Welcome to Sparkels_ui🚀" /> },
  {name:"Neoeffect",component:<NeoInput placeholder="Welcome to Sparkels_ui🚀" /> }
];

const Component = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const usageCode = (name) => `import { ${name} } from "sparkels_ui";

function App() {
  return <${name} />;
}

export default App;`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="flex max-w-[100vw] bg-black text-white z-10 min-h-screen">
      {/* <button className="fixed top-12 left-4 md:hidden p-2 bg-black rounded z-50" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Menu className="w-6 h-6 text-white" />
      </button> */}
<button 
  className={`fixed top-16 left-4 md:hidden p-3 rounded-full z-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 shadow-lg shadow-purple-500/30 transition-all duration-300 group ${
    isSidebarOpen ? "left-[calc(10rem+1rem)]" : "left-1"
  }`}
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
>
  <div className="relative">
    <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
      isSidebarOpen ? 'rotate-45 translate-y-1.5' : ''
    }`}></div>
    <div className={`w-6 h-0.5 bg-white transition-all ${
      isSidebarOpen ? '-rotate-45 -translate-y-1.5' : ''
    }`}></div>
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="absolute inset-0 rounded-full animate-ping bg-purple-400"></div>
    </div>
  </div>
</button>
<div 
  className={`fixed inset-y-0 left-0 bg-black p-4 w-64 transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
  } md:relative md:translate-x-0 md:w-1/4 border-r border-gray-600 transition-transform duration-300 ease-in-out z-40`}
>
  <div className="pt-12 md:pt-0">
    <h2 className="text-xl font-bold mb-4">Components</h2>
    <ul className="overflow-y-auto md:overflow-y-visible max-h-[calc(100vh-160px)] md:max-h-none">
      {componentsList.map((item, index) => (
        <li 
          key={index} 
          className="p-2 cursor-pointer hover:bg-gray-700 rounded" 
          onClick={() => {
            setSelectedComponent(item.component);
            setSelectedName(item.name);
            setIsSidebarOpen(false);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  </div>
</div>
      <div className="flex-1 flex flex-col items-center p-4 w-full md:w-auto md:justify-center">
        <div className=" w-[100vw] flex justify-center">
          {selectedComponent ? selectedComponent : componentsList[0]?.component}
        </div>
        {selectedComponent && (
          <div className="mt-6 rounded-lg flex flex-col items-center md:items-start w-full md:w-auto md:mr-[1000px]  max-w-[90vw]">
            <h3 className="text-lg font-semibold">How to Install & Use {selectedName}</h3>

            <p className="mt-2">To install <code>sparkels_ui</code>, use:</p>
            <div className="relative w-full">
              <pre className="bg-black p-2 border-white border rounded text-green-400 overflow-x-auto">npm install sparkels_ui</pre>
              <button
                className="absolute top-1 right-1 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                onClick={() => copyToClipboard("npm install sparkels_ui")}
              >
                Copy
              </button>
            </div>

            <p className="mt-2">Usage:</p>
            <div className="relative w-full">
              <pre className="bg-black p-2 border-white border rounded text-green-400 whitespace-pre-wrap overflow-x-auto">
                {usageCode(selectedName)}
              </pre>
              <button
                className="absolute top-1 right-1 text-sm text-white bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                onClick={() => copyToClipboard(usageCode(selectedName))}
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Component;