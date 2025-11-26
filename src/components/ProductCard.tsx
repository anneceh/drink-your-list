import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/mockProducts";
import { Minus, Plus, Loader2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 300));
    onAddToCart?.(product, quantity);
    setIsAdding(false);
    setQuantity(1); // Reset quantity after adding
  };

  const incrementQuantity = () => {
    if (quantity < product.stockQuantity) {
      setQuantity(q => q + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(q => q - 1);
    }
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="aspect-square relative mb-4 bg-muted rounded-md overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-base font-semibold text-primary">
              Caffeine: {product.caffeineContent}mg
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          <Badge variant={product.stockQuantity > 0 ? "outline" : "destructive"}>
            {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <div className="flex items-center justify-center gap-3 w-full">
          <Button
            size="icon"
            variant="outline"
            onClick={decrementQuantity}
            disabled={quantity <= 1 || product.stockQuantity === 0}
            className="h-10 w-10"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
          <Button
            size="icon"
            variant="outline"
            onClick={incrementQuantity}
            disabled={quantity >= product.stockQuantity || product.stockQuantity === 0}
            className="h-10 w-10"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          className="w-full h-12 text-base" 
          disabled={product.stockQuantity === 0 || isAdding}
          onClick={handleAddToCart}
        >
          {isAdding ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Adding...
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
