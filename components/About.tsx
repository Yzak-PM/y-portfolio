import { PiUserFill } from "react-icons/pi";

export default function AboutContainer() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="flex text-4xl font-semibold text-neutral-200">
        <PiUserFill className="me-3" /> Sobre mi
      </h2>
      <div className="flex"></div>
    </div>
  );
}
