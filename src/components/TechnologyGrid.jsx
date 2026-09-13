import TechnologyCard from "./TechnologyCard";
import Loader from "./Loader";

export default function TechnologyGrid({ technologies, loading, stackIds, onAdd }) {
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
