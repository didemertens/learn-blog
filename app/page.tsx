import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" },
  ];

  const shouldShow = true;


  if (shouldShow) {
    const [count, setCount] = useState(0);
  }


  return (
    <ul>
    {users.map(user => (
      <li>{user.name}</li>
    ))}
  </ul>
  );
}
