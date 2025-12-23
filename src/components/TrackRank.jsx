//import TrackRank from "./components/TrackRank"
import { useSortable } from "@dnd-kit/react/sortable";

function Sortable({ id, index }) {
  const { ref } = useSortable({ id, index });

  return (
    <li ref={ref} className="item">
      Item {id}
    </li>
  );
}

function TrackRank() {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <ul className="list">
      {items.map((id, index) => (
        <Sortable key={id} id={id} index={index} />
      ))}
    </ul>
  );
}

export default TrackRank;
