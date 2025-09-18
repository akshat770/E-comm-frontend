import FilterPanel from './FilterPanel.jsx';

import { useState } from 'react';

export default function Sidebar({ categories = [], brands = [], colors = [], filters, setFilters }) {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const handleCategoryChange = (categoryName) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryName)
        ? prev.categories.filter((c) => c !== categoryName)
        : [...prev.categories, categoryName],
    }));
  };

  const handleBrandChange = (brandName) => {
    setFilters((prev) => ({
      ...prev,
      brands: prev.brands.includes(brandName)
        ? prev.brands.filter((b) => b !== brandName)
        : [...prev.brands, brandName],
    }));
  };

  const handleColorChange = (color) => {
    setFilters((prev) => ({
      ...prev,
      color: prev.color === color ? '' : color,
    }));
  };

  return (
    <aside className="lg:w-1/4 xl:w-1/5 p-4">
      <FilterPanel
        title="CATEGORIES"
        id="categories"
        items={(showMoreCategories ? categories : categories.slice(0, 6)).length >= 6
          ? (showMoreCategories ? categories : categories.slice(0, 6))
          : [...categories, ...Array(Math.max(0, 6 - categories.length)).fill({ name: '—', count: '' })]
        }
        renderItem={(cat, index) => (
          <div key={index} className="flex justify-between items-center text-sm text-gray-600 py-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={filters.categories.includes(cat.name)}
                onChange={() => handleCategoryChange(cat.name)}
              />
              <span className="truncate whitespace-nowrap">{cat.name}</span>
            </label>
            {'count' in cat && (
              <span className="text-gray-400 ml-2 min-w-[1.5rem] text-right">{cat.count}</span>
            )}
          </div>
        )}
      />
      <button
        type="button"
        className="mt-1 text-xs font-semibold text-gray-600 hover:text-blue-600"
        onClick={() => setShowMoreCategories((v) => !v)}
        aria-expanded={showMoreCategories}
      >
        {showMoreCategories ? 'View less' : 'View more'}
      </button>

      <div className="py-6 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">PRICES</h3>
        <div className="mt-4">
          <input type="range" min="13.99" max="999.99" className="w-f_auto" />
          <div className="text-sm text-gray-500 mt-2">Range: $13.99 - $999.99</div>
        </div>
      </div>

      <FilterPanel
        title="COLOR"
        items={colors}
        isCollapsible={true}
        renderItem={(color) => (
          <button
            key={color}
            onClick={() => handleColorChange(color)}
            className={`w-6 h-6 rounded-full border-2 mr-2 mb-2 ${
              filters.color === color ? 'border-blue-500' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Filter by color ${color}`}
          />
        )}
      />

      <FilterPanel
        title="BRAND"
        id="brands"
        items={(showMoreBrands ? brands : brands.slice(0, 6)).length >= 6
          ? (showMoreBrands ? brands : brands.slice(0, 6))
          : [...brands, ...Array(Math.max(0, 6 - brands.length)).fill('—')]
        }
        renderItem={(brand, index) => (
          <div key={index} className="flex justify-between items-center text-sm text-gray-600 py-2">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span className="truncate whitespace-nowrap">{brand}</span>
            </label>
          </div>
        )}
      />
    </aside>
  );
}


