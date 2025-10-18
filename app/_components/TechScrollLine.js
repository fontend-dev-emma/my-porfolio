import { Star } from "lucide-react";

function TechScrollLine({ itemsArray, scrollDirection }) {
  return (
    <div className="scroll-row text-md overflow-hidden whitespace-nowrap">
      <div className={`scroll-content flex items-center gap-4 ${scrollDirection}`}>
        {[...itemsArray, ...itemsArray].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className="bg-gray-950 text-white/85 font-normal px-3 py-1 rounded-xl
              transition-all duration-300 ease-in-out hover:bg-purple-700 hover:scale-105"
            >
              {item}
            </span>
            <Star className="w-6 h-6 text-purple-700 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechScrollLine;
