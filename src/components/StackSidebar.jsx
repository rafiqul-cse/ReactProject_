export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-100 lg:sticky lg:top-24">
      <h3 className="text-base font-semibold text-ink-900">Your Stack</h3>
      <p className="mt-0.5 text-sm text-slate-400">
        {count === 0
          ? "No technologies selected yet."
          : `${count} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
            Your stack is empty.
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5"
            >
              <img
                src={tech.icon}
                alt=""
                className="h-6 w-6 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'><rect x='3' y='3' width='18' height='18' rx='4'/></svg>";
                }}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink-900">
                  {tech.name}
                </p>
                <p className="truncate text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech)}
                aria-label={`Remove ${tech.name} from stack`}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
