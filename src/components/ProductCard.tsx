import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/mockProducts";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
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
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {product.caffeineContent}mg
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
          <Badge variant={product.stockQuantity > 0 ? "default" : "destructive"}>
            {product.stockQuantity > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          disabled={product.stockQuantity === 0}
          onClick={() => onAddToCart?.(product)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
