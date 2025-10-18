function FocusCard({ Icon, heading, description }) {
  return (
    <div
      data-aos="fade-up"
      className="flex items-start shadow gap-4 bg-transparent px-8 py-4 sm:py-8  rounded-2xl  border border-[#e5ebf2]/90 dark:border-gray-700"
    >
      <div className=" mt-4  bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
        <Icon className="text-gray-800 dark:text-slate-300 w-6 h-6" />
      </div>
      <div>
        <h3 className="text-[1.1rem] capitalize text-gray-800 dark:text-slate-300 font-extrabold  mb-1">{heading}</h3>
        <p className="text-gray-500 dark:text-slate-400 font-extralight text-[0.9rem]">{description}</p>
      </div>
    </div>
  );
}

export default FocusCard;
