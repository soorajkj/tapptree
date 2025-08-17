export default function Navigations() {
  return (
    <nav className="relative">
      <ul className="flex items-center justify-center gap-px">
        {["Product", "Solutions", "Resources", "Customers", "Pricing"].map(
          (_, i) => (
            <li key={i} className="relative">
              <span className="inline-flex px-4 py-1 text-sm">{_}</span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
