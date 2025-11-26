import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer } from "@/components/CartDrawer";
import { mockProducts, categories, Product } from "@/data/mockProducts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import { User, Search } from "lucide-react";

// Utility function to sanitize user input and prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>"'&]/g, (char) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '&': '&amp;'
      };
      return entities[char] || char;
    })
    .trim()
    .slice(0, 100); // Limit search length
};

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Memoize filtered products to optimize performance
  const filteredProducts = useMemo(() => {
    setIsSearching(true);
    const sanitizedSearch = sanitizeInput(searchTerm);
    
    const results = mockProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch =
        sanitizedSearch.length < 2 ||
        product.name.toLowerCase().includes(sanitizedSearch.toLowerCase()) ||
        product.description.toLowerCase().includes(sanitizedSearch.toLowerCase()) ||
        product.category.toLowerCase().includes(sanitizedSearch.toLowerCase());
      return matchesCategory && matchesSearch && product.available;
    });
    
    // Simulate async search (defer to prevent blocking on page load)
    setTimeout(() => setIsSearching(false), 200);
    return results;
  }, [searchTerm, selectedCategory]);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    // Add multiple items at once based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Legal Addiction</h1>
              <p className="text-muted-foreground">
                Premium caffeine-based beverages for the discerning enthusiast
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="default"
                onClick={() => navigate("/profile")}
                className="h-12 min-w-[48px]"
                aria-label="My Account"
              >
                <User className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">Account</span>
              </Button>
              <CartDrawer />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
                aria-label="Search products"
                maxLength={100}
              />
              {isSearching && searchTerm.length >= 2 && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="h-11 min-w-[48px]"
                aria-label={`Filter by ${category}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
