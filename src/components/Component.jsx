import { useState } from "react";
import { BlackholeVortex, Tornado ,AsteroidBelt,RainingEffect,Stars,Meteors,
  Mouselight,HackerBackground,Nebula,SouthPoleScene,PlasmaFlow,Flash,
  ThunderScene,
  Jelly,
  Card3D,DualSlideShow,
  FireEffectInput,
  NeoInput,
  LightningInput,
  PopperInput,
  VibrationInput,SlideShow,
  SparksInput} from "sparkels_ui";
import { Menu } from "lucide-react";
import { comma } from "postcss/lib/list";
const slides = [
  {
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "Experience the beauty of nature."
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description: "Explore cutting-edge technology."
  },
  {
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    description: "Dive into the mysteries of the cosmos."
  },
  {
    image: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca",
    description: "Feel the serenity of the ocean waves."
  }
];


const componentsList = [
  { name: "BlackholeVortex", component: <BlackholeVortex /> },
  { name: "Tornado", component: <Tornado /> },
  { name: "Stars" ,component: <Stars/>},
  { name: "Meteors", component: <Meteors /> },
  { name: "AstroidBelt", component: <AsteroidBelt /> },
  { name: "Nebula" ,component: <Nebula/>},
  { name: "SouthPoleScene", component: <SouthPoleScene/> },
  { name: "RainingEffect", component: <RainingEffect /> },
  { name: "Plasmaflow" ,component: <PlasmaFlow/>},
  {name:"HackerBaground" ,component:<HackerBackground/>},
  {name:"Thunder",component:<ThunderScene/>},
  {name:"Flash",component:<Flash/>},
  {name:"Jelly",component:<Jelly/>},
  {name:"Mouselight" , component:<Mouselight><h1 className="w-[100vw]" >Welcome to Sparkels_ui🚀</h1></Mouselight> },
  {name :"Card3D",component:<Card3D
    image="https://media.licdn.com/dms/image/v2/D5603AQHwr9SNOOl-Ug/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704366467090?e=2147483647&v=beta&t=Ufe1LDYVyt88xYS-9xe6HHR4laEE2us8ua_4DA4edNo"
    title="3D Card Title"
    subtitle="This is a 3D card component built with Tailwind CSS."
    buttonText="Click Me"
    onButtonClick={() => alert("Button clicked!")}
  />},

  {name:"SparkSlide" , component:<SlideShow slides={slides}/>},
  {name:"DualSlideShow" , component:<DualSlideShow slides={slides} />},
  {name:"LightInput",component:<SparksInput placeholder="welcome to sparkels_ui🚀"/>}
 
];

const Component = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen max-w-[100vw] bg-black text-white">
      {/* Mobile Menu Button */}
      <button
        className="absolute top-4 left-4 md:hidden p-2 bg-black rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 p-4 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/4 border-r border-gray-700 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-xl font-bold mb-4">Components</h2>
        <ul>
          {componentsList.map((item, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => {
                setSelectedComponent(item.component);
                setIsSidebarOpen(false); // Close sidebar on mobile after selection
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Component Display */}
      <div className="flex-1  flex justify-center items-center">
        {selectedComponent ? selectedComponent : <BlackholeVortex/>}
      </div>
    </div>
  );
};

export default Component;
