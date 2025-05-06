import "./TypeTag.css";

export default function TypeTag({ type }) {
  return <span className={`tag tag--${type.name}`}>{type.name}</span>;
}
