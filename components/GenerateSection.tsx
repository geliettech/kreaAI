import { AiOutlinePicture, AiOutlineVideoCamera, AiOutlineCloudSync } from "react-icons/ai";
import { BiImageAdd, BiTransfer } from "react-icons/bi";
import { RiScissorsLine } from "react-icons/ri";
import { GiUpgrade, GiRailway } from "react-icons/gi"; 


const features = [
  { 
    name: "Image", 
    desc: "Generate images with custom styles like flux and ideogram.", 
    btn: "Open", 
    icon: <AiOutlinePicture className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
  },
  { 
    name: "Video", 
    desc: "Generate videos with Hailuo, Pika, Runway, Luma, and more.", 
    btn: "Open", 
    icon: <AiOutlineVideoCamera className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
  },
  { 
    name: "Realtime", 
    desc: "Realtime AI rendering on a canvas. Transform feedback loops.", 
    btn: "Open", 
    icon: <AiOutlineCloudSync className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
  },
  { 
  name: "Enhancer", 
  desc: "Enhance, restore, and upscale images and videos up to 32K.", 
  btn: "Open", 
  icon: <GiUpgrade className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
},
  { 
    name: "Edit", 
    desc: "Edit images with AI, adjust prompts, and apply variations.", 
    btn: "Open", 
    icon: <RiScissorsLine className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
  },
  { 
    name: "Video LipSync", 
    desc: "Sync any video to any audio with precision.", 
    btn: "Open", 
    icon: <BiImageAdd className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
  },
  { 
    name: "Motion Transfer", 
    desc: "Transfer motions to images and animate characters.", 
    btn: "Open", 
    icon: <BiTransfer className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
  },
{ 
  name: "Train", 
  desc: "Train AI models to recognize styles, products, or characters.", 
  btn: "Open", 
  icon: <GiRailway className="text-2xl text-neutral-700 dark:text-neutral-300" /> 
},
];

export default function GenerateSection() {
  return (
    <section className="px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Generate</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {features.map((f) => (
          <div 
            key={f.name} 
            className="p-4 rounded-lg shadow-sm flex items-center gap-6"
          >
            <div className="text-3xl mb-3">{f.icon}</div>
            <div>
              <h3 className="font-semibold">{f.name}</h3>
            <p className="text-xs">{f.desc}</p>
            </div>
            
            <button className="mt-4 bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-white font-semibold text-sm px-3 py-1 rounded-lg">
              {f.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
