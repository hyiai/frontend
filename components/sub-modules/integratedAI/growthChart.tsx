// components/GrowthChart.tsx
export default function GrowthChart() {
  const data = [
    {
      year: "2025",
      value: "335.9M",
      height: "h-44",
      color: "bg-dark_mode-900",
    },
    {
      year: "2025",
      value: "335.9M",
      height: "h-36",
      color: "bg-dark_mode-900",
    },
    {
      year: "2025",
      value: "335.9M",
      height: "h-56",
      color: "bg-dark_mode-900",
    },
    {
      year: "2025",
      value: "450.6M",
      height: "h-72",
      color: "bg-brand-600",
      highlight: true,
    },
  ];

  return (
    <div className="flex justify-center items-end gap-4 md:justify-start">
      {data.map((item, i) => (
        <div
          key={i}
          className={`w-16 flex flex-col justify-between items-center rounded-xl p-1.5 ${item.color} ${item.height} md:w-24`}
        >
          <div
            className={`rounded-md text-sm border border-white/20 px-4 py-2.5 ${
              item.highlight
                ? "bg-white text-brand-600"
                : "text-white glass-gradient"
            }`}
          >
            {item.value}
          </div>

          <div
            className={`w-fit p-1 text-center rounded-md text-xs font-medium border border-white/20 ${
              item.highlight
                ? "bg-brand-600 text-white"
                : "glass-gradient text-white"
            }`}
          >
            {item.year}
          </div>
        </div>
      ))}
    </div>
  );
}
