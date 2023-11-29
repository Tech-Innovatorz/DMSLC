import Navbar from "./components/Navbar"
import ProductsPage from "./components/ProductsPage"

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#5A9EE7] to-[#1C344E] min-h-screen w-screen">
      <Navbar />
      <main>
        <ProductsPage />
        
      </main>
    </div>
  )
}