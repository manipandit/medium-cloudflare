export default function Quote() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="flex flex-col gap-y-4">
        <div className="font-bold text-3xl max-w-[620px]">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div>
          <p className="text-xl font-bold">Jules Winnfield</p>
          <p className="text-lg font-medium text-slate-500">CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
}
