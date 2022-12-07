import { useState } from "react";

function MenuItem({ category }) {
  const [isCollapsed, collapse] = useState(false);

  return (
    <li key={category.id}>
      <span onClick={() => collapse((isCollapsed) => !isCollapsed)}>
        {category.name}{" "}
        {category.sublevels && <button>{isCollapsed ? "+" : "-"}</button>}
      </span>
      {category.sublevels && isCollapsed && (
        <Menu categories={category.sublevels} />
      )}
    </li>
  );
}

function Menu({ categories }) {
  console.log(categories);
  return (
    <ul>
      {categories.map((cat) => (
        <MenuItem key={cat.id} category={cat} />
      ))}
    </ul>
  );
}

export default function MenuIterativo({ categories }) {
  return (
    <div>
      <Menu categories={categories.categories} />
    </div>
  );
}
