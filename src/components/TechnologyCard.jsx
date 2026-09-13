export default function TechnologyCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
          <img
            src={icon}
            alt=""
            className="h-6 w-6"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='4'/></svg>";
            }}
          />
        </div>
        {badge && (
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
            {badge}
          </span>
        )}
      </div>

      <h3 className="text-base font-semibold text-ink-900">{name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {category}
        </span>
        <span>{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-amber-500">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-slate-100 text-slate-400"
            : "bg-ink-900 text-white hover:bg-ink-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
