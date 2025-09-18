export default function Badge({ children, className = '' }) {
  return (
    <div className={`absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded ${className}`}>
      {children}
    </div>
  );
}