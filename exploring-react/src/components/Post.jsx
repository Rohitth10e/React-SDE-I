export default function Post(props) {
  const randomeIdx = () => Math.floor(Math.random()*2)
  return (
    <li className="w-56 p-4 ml-2 mt-10 text-left border border-blue-500 rounded-lg" >
      <p className="font-semibold text-lg">@{props.name}</p>
      <p>{props.desc}</p>
    </li>
  );
}