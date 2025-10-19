import { Clock, Mail, MapPin } from "lucide-react";

function ContactDetailsSection() {
  return (
    <section className="px-5 sm:px-10 py-16  sm:pt-28 backdrop-blur-3xl">
      <h2 data-aos="zoom-in" className="text-3xl md:text-4xl lg:text-5xl font-semibold dark:text-slate-300 mb-6 md:mb-10">
        Contact Details
      </h2>

      <table data-aos="fade-up" className="w-full place-items-center border-collapse text-sm lg:text-md">
        <tbody>
          <tr className="border-b border-black/10 dark:border-gray-700">
            <td className="py-2 font-bold w-32 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-500" />
              <span>Location:</span>
            </td>
            <td className="py-2 text-gray-500 dark:text-slate-400">Delta State, Nigeria</td>
          </tr>

          <tr className="border-b border-black/10 ">
            <td className="py-2 font-bold flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>Time Zone:</span>
            </td>
            <td className="py-2 text-gray-500 dark:text-slate-400">WAT, UTC/GMT +1</td>
          </tr>

          <tr>
            <td className="py-2 font-bold flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-500" />
              <span>Email:</span>
            </td>
            <td className="py-2 text-blue-600 ">contact@waziri.dev</td>
          </tr>
        </tbody>
      </table>

      <p data-aos="zoom-in" className="text-sm md:text-md lg:text-xl mt-8 dark:text-slate-400 leading-relaxed">
        For additional information such as my phone number or other private contact details, please reach out via email first. I’ll be happy to share
        more once we establish communication.
      </p>
    </section>
  );
}

export default ContactDetailsSection;
