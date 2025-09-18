import React, { useEffect, useMemo, useState } from 'react';
import { Grid, List, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import ProductCard from './components/ProductCard.jsx';
import Pagination from './components/Pagination.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import mockProducts from './utils/mockData.jsx';

const categories = [
  { name: 'Hot Deals', count: mockProducts.filter(p => p.isHot).length },
  { name: 'Nike', count: mockProducts.filter(p => p.brand === 'Nike').length },
  { name: 'Airmax', count: mockProducts.filter(p => p.name.includes('Airmax')).length },
  { name: 'Adidas', count: mockProducts.filter(p => p.brand === 'Adidas').length },
  { name: 'Vans', count: mockProducts.filter(p => p.brand === 'Vans').length },
  { name: 'All Stars', count: mockProducts.filter(p => p.category === 'All Stars').length },
  { name: 'Siemens', count: mockProducts.filter(p => p.brand === 'Siemens').length },
];

const brands = ['Nike', 'Adidas', 'Siemens', 'Puma', 'Reebok', 'Converse', 'New Balance', 'Asics', 'Fila', 'Vans'];
const allColors = [...new Set(mockProducts.flatMap(p => p.colors))];


export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [13.99, 999.99],
    color: '',
    brands: []
  });
  const [sort, setSort] = useState({ by: 'name', order: 'asc' });
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);


  const filteredAndSortedProducts = useMemo(() => {
    let products = [...mockProducts];

    if (filters.categories.length > 0) {
      products = products.filter(p => filters.categories.some(catName => {
        if (catName === 'Hot Deals') return p.isHot;
        if (catName === 'Airmax') return p.name.includes('Airmax');
        if (catName === 'All Stars') return p.category === 'All Stars';
        return p.brand === catName;
      }));
    }
    if (filters.brands.length > 0) {
      products = products.filter(p => filters.brands.includes(p.brand));
    }
    // Price range
    products = products.filter(p => p.discountPrice >= filters.priceRange[0] && p.discountPrice <= filters.priceRange[1]);
    if (filters.color) {
      products = products.filter(p => p.colors.includes(filters.color));
    }

    products.sort((a, b) => {
      let compareA, compareB;
      switch (sort.by) {
        case 'price':
          compareA = a.discountPrice;
          compareB = b.discountPrice;
          break;
        case 'popularity':
          compareA = a.ratingCount;
          compareB = b.ratingCount;
          break;
        default: // name
          compareA = a.name;
          compareB = b.name;
      }

      if (compareA < compareB) return sort.order === 'asc' ? -1 : 1;
      if (compareA > compareB) return sort.order === 'asc' ? 1 : -1;
      return 0;
    });

    return products;
  }, [filters, sort]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, filters]);


  const resetFilters = () => {
    setFilters({
      categories: [],
      priceRange: [13.99, 999.99],
      color: '',
      brands: []
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-blue-500 text-white p-6 md:p-12 rounded-lg flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Adidas Men Running</h2>
            <h3 className="text-3xl md:text-5xl font-thin mt-2">Sneakers</h3>
            <p className="mt-4">Performance and design. Taken right to the edge.</p>
            <button className="mt-6 font-bold border-b-2 border-white pb-1">SHOP NOW</button>
          </div>
          <div className="hidden md:block">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-old-blue-new-balance-running-shoes-on-a-dark-floor-image_2934847.jpg" alt="Running Shoe" className="w-[500px] h-[200px] object-cover" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">

          {/* Mobile Sidebar Toggle */}
          <div className="lg:hidden flex justify-end">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-md bg-white shadow">
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Sidebar */}
          <div className={`
              ${sidebarOpen ? 'block' : 'hidden'} 
              lg:block lg:static fixed top-0 left-0 h-full w-72 bg-white z-20 shadow-lg lg:shadow-none overflow-y-auto
          `}>
            <div className="p-4 flex justify-between items-center lg:hidden">
              <h2 className="font-bold">Filters</h2>
              <button onClick={() => setSidebarOpen(false)}><X size={24} /></button>
            </div>
            <Sidebar
              categories={categories}
              brands={brands.slice(0, 6)}
              colors={allColors.slice(0, 6)}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting and View Options */}
            <div className="bg-white p-4 rounded-md shadow-sm flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">{filteredAndSortedProducts.length} Items</span>
                <div className="flex items-center gap-2">
                  <label htmlFor="sort-by" className="text-sm text-gray-600">Sort By</label>
                  <select id="sort-by" value={sort.by} onChange={e => setSort(s => ({ ...s, by: e.target.value }))} className="text-sm rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="items-per-page" className="text-sm text-gray-600">Show</label>
                  <select id="items-per-page" value={itemsPerPage} onChange={e => setItemsPerPage(Number(e.target.value))} className="text-sm rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded bg-blue-500 text-white"><Grid size={20} /></button>
                <button className="p-2 rounded bg-gray-200 text-gray-600"><List size={20} /></button>
              </div>
            </div>

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
                  {paginatedProducts.map(product => (
                    <ProductCard key={product.id} product={product} selectedColor={filters.color} />
                  ))}
                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </>
            ) : (
              <div className="text-center py-20 bg-white mt-6 rounded-md shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-700">No Products Found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters to find what you're looking for.</p>
                <button onClick={resetFilters} className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

