export default function Header({ children, size, author = "" }) {
  let fontSize = 'text-xl';

  if (size === 'large') {
    fontSize = 'text-2xl';
  }

  return (
    <header>
      <div className="bg-red-200 mx-auto p-4">
        <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
        <h3 className="text-center font-semibold">{`Autor: ${author}`}</h3>
      </div>
    </header>
  );
}
