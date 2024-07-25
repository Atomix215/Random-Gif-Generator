import Random from "./Components/Random";
import Tag from "./Components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center abc">

      <h1 className="bg-white rounded-sm w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold">Random GIF Generator</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

        <Random/>
        <Tag/>
        
      </div>
    </div>
  );
}
