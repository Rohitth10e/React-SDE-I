
const name = ['Rohith', 'Sneha']

export default function Post() {
  const randomeIdx = () => Math.floor(Math.random()*2)
  return (
    <div className="max-w-xs py-4 mx-auto mt-10 text-center border border-zinc-600 rounded-lg">
      <p>{name[randomeIdx()]}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}