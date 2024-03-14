export default function ({ name }: { name: string }) {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-600 rounded-full">
        <span className="text-sm font-medium text-gray-300">
          {name[0].toUpperCase()}
        </span>
      </div>
    </div>
  );
}
