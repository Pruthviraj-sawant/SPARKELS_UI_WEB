import { useState } from "react";
import { BlackholeVortex, Tornado, AsteroidBelt, RainingEffect, Stars, Meteors,
  Mouselight, HackerBackground, Nebula, SouthPoleScene, PlasmaFlow, Flash,
  ThunderScene, Jelly, Card3D, DualSlideShow, FireEffectInput,
  NeoInput, LightningInput, PopperInput, VibrationInput, SlideShow,
  SparksInput } from "sparkels_ui";
import { Menu } from "lucide-react";

const slides = [
  { image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", description: "Experience the beauty of nature." },
  { image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", description: "Explore cutting-edge technology." },
  { image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", description: "Dive into the mysteries of the cosmos." },
  { image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca", description: "Feel the serenity of the ocean waves." }
];

const componentsList = [
  { name: "BlackholeVortex", component: <BlackholeVortex /> },
  { name: "Tornado", component: <Tornado /> },
  { name: "Stars", component: <Stars /> },
  { name: "Meteors", component: <Meteors /> },
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
  { name: "Card3D", component: <Card3D image="https://via.placeholder.com/150" title="3D Card Title" subtitle="A 3D card component." buttonText="Click Me" onButtonClick={() => alert("Button clicked!")} /> },
  { name: "SparkSlide", component: <SlideShow slides={slides} /> },
  { name: "DualSlideShow", component: <DualSlideShow slides={slides} /> },
  { name: "LightInput", component: <SparksInput placeholder="Welcome to Sparkels_ui🚀" /> }
];

const Component = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex  max-w-[100vw] bg-black text-white">
      <button className="absolute top-4 left-4 md:hidden p-2 bg-black rounded" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        <Menu className="w-6 h-6 text-white" />
      </button>

      <div className={`fixed inset-y-0 left-0 bg-gray-900 p-4 w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:w-1/4 border-r border-gray-700 transition-transform duration-300 ease-in-out`}>
        <h2 className="text-xl font-bold mb-4">Components</h2>
        <ul>
          {componentsList.map((item, index) => (
            <li key={index} className="p-2 cursor-pointer hover:bg-gray-700 rounded" onClick={() => {
              setSelectedComponent(item.component);
              setSelectedName(item.name);
              setIsSidebarOpen(false);
            }}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="  flex-1 flex flex-col justify-center items-center p-4 ">
        {selectedComponent ? selectedComponent : <BlackholeVortex />}
        {selectedComponent && (
          <div className="mt-6 p-4 rounded-lg w-[90vw] flex flex-col justify-center mr-28 ">
            <h3 className="text-lg font-semibold">How to Install & Use {selectedName}</h3>
            <p className="mt-2">To install <code>sparkels_ui</code>, use:</p>
            <pre className="bg-black p-2 border-white border rounded text-green-400">npm install sparkels_ui</pre>
            <p className="mt-2">Usage:</p>
            <pre className="bg-black p-2 border-white border rounded text-green-400">
              {`import { ${selectedName} } from "sparkels_ui";

function App() {
  return <${selectedName} />;
}

export default App;`}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Component;
