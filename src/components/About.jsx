import { PlasmaFlow } from "sparkels_ui";
import { Stars } from "sparkels_ui";
import { SouthPoleScene } from "sparkels_ui";
import { RainingEffect } from "sparkels_ui";
import { Jelly } from "sparkels_ui";
const About = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen px-6">
            <div><PlasmaFlow/></div>
            
            <div className="absolute top-28 left-10 flex flex-col items-center text-white text-center max-w-2xl">
                <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Welcome to Sparkels UI
                </h1>
                <p className="text-lg text-gray-300">
                    Sparkels UI is a modern, lightweight, and customizable React UI library designed to help developers create stunning interfaces effortlessly.
                    With a focus on performance, accessibility, and aesthetics, Sparkels UI empowers you to build sleek and dynamic web applications with ease.
                </p>
                <p className="text-lg mt-4 text-gray-400">
                    Whether you're developing a personal project or an enterprise-level application, our components are crafted to provide flexibility and responsiveness.
                </p>
                <p className="text-lg mt-4 text-gray-300">
                    Our library includes a wide range of pre-designed components, from buttons and forms to complex interactive elements, ensuring a seamless development experience.
                    With extensive documentation and an active community, Sparkels UI helps developers bring their creative visions to life faster than ever.
                </p>
                <p className="text-lg mt-4 text-gray-400">
                    Built with modern technologies like React and Tailwind CSS, Sparkels UI prioritizes efficiency, minimalism, and an exceptional user experience.
                </p>
                <p className="mt-6 text-xl font-semibold text-purple-400">
                    Elevate your UI with Sparkels UI – where design meets innovation.
                </p>
            </div>
            
            <div className="relative right-0 lg:right-10 flex flex-col items-center space-y-6 mt-10 lg:mt-0 lg:absolute lg:bottom-10">
                <h2 className="text-3xl font-bold text-purple-500">SPARKELS_UI MAKES YOUR WEB SHINE</h2>
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-64 text-center">
                        
                        <h3 className="text-xl font-semibold">Interactive Components</h3>
                        <p className="text-gray-400 mt-2">Beautifully designed UI elements to enhance user experience.</p>
                    </div>
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-64 text-center">
                        <h3 className="text-xl font-semibold">Customizable Themes</h3>
                        <p className="text-gray-400 mt-2">Easily adapt UI components to match your brand’s style.</p>
                    </div>
                    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-64 text-center">
                        <h3 className="text-xl font-semibold">Seamless Integration</h3>
                        <p className="text-gray-400 mt-2">Works effortlessly with React and Tailwind CSS.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;