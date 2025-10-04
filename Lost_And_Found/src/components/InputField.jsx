import { Mail, Lock, User, Phone } from "lucide-react"

const icons = { mail: Mail, lock: Lock, user: User, phone: Phone }

export default function InputField({ label, icon, ...props }) {
  const Icon = icons[icon]
  return (
    <div className="flex flex-col">
      <label className="text-sm mb-1">{label}</label>
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white shadow-sm">
        {Icon && <Icon className="w-5 h-5 text-gray-400" />}
        <input className="flex-1 outline-none bg-transparent" {...props} />
      </div>
    </div>
  )
}
