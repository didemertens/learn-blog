import Image from "next/image";

export default function Home() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Jim" },
  ];

  return (
    <ul>
    {users.map(user => (
      <li>{user.name}</li>
    ))}
  </ul>
  );
}
