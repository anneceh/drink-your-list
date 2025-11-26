import espressoBlend from "@/assets/espresso-blend.jpg";
import fusionEnergy from "@/assets/fusion-energy.jpg";
import matchaPowder from "@/assets/matcha-powder.jpg";
import coldBrew from "@/assets/cold-brew.jpg";
import zeroSugarEnergy from "@/assets/zero-sugar-energy.jpg";
import englishBreakfast from "@/assets/english-breakfast.jpg";
import yerbaMate from "@/assets/yerba-mate.jpg";
import lightRoast from "@/assets/light-roast.jpg";
import energyShot from "@/assets/energy-shot.jpg";
import chaiConcentrate from "@/assets/chai-concentrate.jpg";
import guaranaPowder from "@/assets/guarana-powder.jpg";
import instantCoffee from "@/assets/instant-coffee.jpg";

export interface Product {
  id: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  caffeineContent: number;
  category: string;
  stockQuantity: number;
  imageUrl: string;
  available: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    sku: "COFFEE-ESP-001",
    name: "Dark Roast Espresso Blend",
    description: "Rich, bold espresso with notes of dark chocolate and caramel. Perfect for starting your day.",
    price: 16.99,
    caffeineContent: 150,
    category: "Coffee",
    stockQuantity: 45,
    imageUrl: espressoBlend,
    available: true,
  },
  {
    id: "2",
    sku: "ENERGY-BOOST-001",
    name: "Fusion Energy Drink",
    description: "High-energy blend with taurine, B-vitamins, and natural caffeine for sustained focus.",
    price: 3.49,
    caffeineContent: 200,
    category: "Energy Drinks",
    stockQuantity: 120,
    imageUrl: fusionEnergy,
    available: true,
  },
  {
    id: "3",
    sku: "TEA-GREEN-001",
    name: "Matcha Green Tea Powder",
    description: "Premium ceremonial grade matcha with smooth, clean energy and antioxidants.",
    price: 24.99,
    caffeineContent: 70,
    category: "Tea",
    stockQuantity: 30,
    imageUrl: matchaPowder,
    available: true,
  },
  {
    id: "4",
    sku: "COFFEE-COLD-001",
    name: "Cold Brew Concentrate",
    description: "Smooth, low-acid cold brew concentrate. Mix with water or milk for instant refreshment.",
    price: 19.99,
    caffeineContent: 180,
    category: "Coffee",
    stockQuantity: 60,
    imageUrl: coldBrew,
    available: true,
  },
  {
    id: "5",
    sku: "ENERGY-ZERO-001",
    name: "Zero Sugar Energy",
    description: "All the energy, none of the sugar. Refreshing citrus flavor with 0 calories.",
    price: 2.99,
    caffeineContent: 160,
    category: "Energy Drinks",
    stockQuantity: 200,
    imageUrl: zeroSugarEnergy,
    available: true,
  },
  {
    id: "6",
    sku: "TEA-BLACK-001",
    name: "English Breakfast Tea",
    description: "Classic black tea blend, robust and malty. Perfect with milk and sugar.",
    price: 12.99,
    caffeineContent: 50,
    category: "Tea",
    stockQuantity: 80,
    imageUrl: englishBreakfast,
    available: true,
  },
  {
    id: "7",
    sku: "SPECIALTY-YERBA-001",
    name: "Yerba Mate Energy",
    description: "Traditional South American yerba mate with natural caffeine and vitamins.",
    price: 14.99,
    caffeineContent: 85,
    category: "Specialty",
    stockQuantity: 40,
    imageUrl: yerbaMate,
    available: true,
  },
  {
    id: "8",
    sku: "COFFEE-LIGHT-001",
    name: "Light Roast Single Origin",
    description: "Bright, fruity Ethiopian coffee with floral notes and citrus finish.",
    price: 18.99,
    caffeineContent: 140,
    category: "Coffee",
    stockQuantity: 35,
    imageUrl: lightRoast,
    available: true,
  },
  {
    id: "9",
    sku: "ENERGY-NATURAL-001",
    name: "Natural Energy Shot",
    description: "Compact 2oz energy shot with green tea caffeine and natural ingredients.",
    price: 4.99,
    caffeineContent: 220,
    category: "Energy Drinks",
    stockQuantity: 150,
    imageUrl: energyShot,
    available: true,
  },
  {
    id: "10",
    sku: "TEA-CHAI-001",
    name: "Spiced Chai Concentrate",
    description: "Authentic Indian chai with black tea, ginger, cardamom, and warming spices.",
    price: 15.99,
    caffeineContent: 60,
    category: "Tea",
    stockQuantity: 50,
    imageUrl: chaiConcentrate,
    available: true,
  },
  {
    id: "11",
    sku: "SPECIALTY-GUARAN-001",
    name: "Guarana Energy Powder",
    description: "Pure guarana powder from the Amazon, naturally high in caffeine.",
    price: 22.99,
    caffeineContent: 100,
    category: "Specialty",
    stockQuantity: 25,
    imageUrl: guaranaPowder,
    available: true,
  },
  {
    id: "12",
    sku: "COFFEE-INSTANT-001",
    name: "Premium Instant Coffee",
    description: "Freeze-dried premium coffee crystals for quick, quality coffee anywhere.",
    price: 13.99,
    caffeineContent: 130,
    category: "Coffee",
    stockQuantity: 90,
    imageUrl: instantCoffee,
    available: true,
  },
];

export const categories = [
  "All Products",
  "Coffee",
  "Energy Drinks",
  "Tea",
  "Specialty",
];
