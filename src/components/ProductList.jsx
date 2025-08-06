import appleImg from '../assets/apple.jpg';
import bananaImg from '../assets/banana.jpg';
import mangoImg from '../assets/mangoes.jpg';
import grapesImg from '../assets/grapes.jpg';
import orangeImg from '../assets/orange.jpg';
import waterMelonImg from '../assets/watermelon.jpg'

const fruits = [
  { name: "Apple", price: "₹180/kg", image: appleImg },
  { name: "Banana", price: "₹40/dozen", image: bananaImg },
  { name: "Mango", price: "₹100/kg", image: mangoImg },
  { name: "Grapes", price: "₹160/kg", image: grapesImg },
  { name:"orange", price:"₹80/kg", image: orangeImg},
  { name:"watermelon", price:"20/kg", image:waterMelonImg}
];


export default function ProductList() {
  return (
    <section id="products" className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Our Fruits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fruits.map((fruit, i) => (
          <div key={i} className="border rounded-lg p-4 shadow">
            <img src={fruit.image} alt={fruit.name} className="h-40 w-full object-cover rounded" />
            <h3 className="text-xl mt-2">{fruit.name}</h3>
            
          </div>
        ))}
      </div>
    </section>
  );
}
