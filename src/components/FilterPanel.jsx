import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FilterPanel({ title, items, renderItem, isCollapsible = true, defaultOpen = true, id }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-6 border-b border-gray-200">
      <button
        type="button"
        className="w-full text-left font-semibold text-gray-800 flex justify-between items-center"
        aria-expanded={isOpen}
        aria-controls={id ? `${id}-panel` : undefined}
        onClick={() => isCollapsible && setIsOpen(!isOpen)}
      >
        {title}
        {isCollapsible && (
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        )}
      </button>
      {isOpen && (
        <div id={id ? `${id}-panel` : undefined} className="mt-4">
          {items.map(renderItem)}
        </div>
      )}
    </div>
  );
}


