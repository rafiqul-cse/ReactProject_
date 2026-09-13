export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-500">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-pink"
        role="status"
        aria-label="Loading technologies"
      />
      <p className="text-sm font-medium">Loading technologies…</p>
    </div>
  );
}
