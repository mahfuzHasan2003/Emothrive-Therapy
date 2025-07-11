
export default function Input({type, placeholder, icon, name}) {
  return (
    <div className="relative flex items-center">
      <span className="text-[#6C7275] absolute left-2">{icon}</span>
      <input name={name} type={type} placeholder={placeholder} required className="outline-none border-none bg-white text-[#6C7275] min-w-sm py-2 rounded-md pl-10 pr-2 placeholder:text-[#6C7275]" />
    </div>
  )
}
