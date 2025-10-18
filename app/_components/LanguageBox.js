function LanguageBox({ icon, label }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center p-4 sm:p-6  bg-[#f0f3f7] dark:bg-[#1f2840] w-32 sm:w-[150px] xl:w-[200px]  rounded-lg shadow-sm hover:bg-gray-200 transform transition-transform duration-300 hover:scale-105 "
    >
      <i className={`${icon} text-4xl sm:text-5xl`}></i>
      <p className="mt-2  text-gray-700 dark:text-slate-300  text-sm md:text-lg font-medium">{label}</p>
    </div>
  );
}

export default LanguageBox;
