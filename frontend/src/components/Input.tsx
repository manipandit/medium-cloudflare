interface InputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
export default function Input({
  label,
  placeholder,
  onChange,
  type,
}: InputProps) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <label htmlFor={`input-${label}`} className="font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={`input-${label}`}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 border focus:outline-none"
      />
    </div>
  );
}
