import "./Main.css";
import Product from "../../components/products/Product";
import chatbot from "../../assets/chatbot.jpg";
import designer from "../../assets/designer.jpg";
import developer from "../../assets/developer.jpg";
import enginer from "../../assets/enginer.jpg";
import Financial from "../../assets/Financial.jpg";
import gaming from "../../assets/gaming.jpg";
import health from "../../assets/health.jpg";
import marketing from "../../assets/marketing.jpg";
import social from "../../assets/social.webp";

const products = [
  {
    id: 1,
    title: "Designer AI",
    description:
      "Graphic Design AI: Tools that assist in creating visual content (e.g., Canva, Adobe Sensei).",
    image: `${designer}`,
  },
  {
    id: 2,
    title: "Developer AI",
    description:
      "Code Generation AI: Tools that assist developers by generating code based on user input (e.g., GitHub Copilot).",
    image: `${developer}`,
  },
  {
    id: 3,
    title: "Engineering AI",
    description:
      "Predictive Maintenance AI: AI systems used in manufacturing to predict equipment failures (e.g., GE's Predix).",
    image: `${enginer}`,
  },
  {
    id: 4,
    title: "Chatbot AI",
    description:
      "Conversational Agents: AI systems that interact with users via text or voice, providing assistance or information.",
    image: `${chatbot}`,
  },
  {
    id: 5,
    title: "Gaming AI",
    description:
      "Procedural Content Generation: AI algorithms that automatically create game content, such as levels or characters.",
    image: `${gaming}`,
  },
  {
    id: 6,
    title: "Health AI",
    description:
      "Diagnostic AI: Tools that assist in diagnosing diseases based on medical data.",
    image: `${health}`,
  },
  {
    id: 7,
    title: "Financial AI",
    description:
      "Fraud Detection: AI systems that analyze transactions to identify potentially fraudulent activity.",
    image: `${Financial}`,
  },
  {
    id: 8,
    title: "Social Media AI",
    description:
      "Content Moderation: AI that identifies and removes inappropriate content on social media platforms.",
    image: `${social}`,
  },
  {
    id: 9,
    title: "Marketing AI",
    description:
      "Predictive Analytics for Marketing: AI that analyzes data to predict consumer behavior and marketing effectiveness.",
    image: `${marketing}`,
  },
];
function Main() {
  const handleAddToCart = (productsId) => {
    console.log(`Product ${productsId} added to cart.`);
  };

  return (
    <div className="mainContainer">
      <div className="productGrid">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            onAddToCart={() => handleAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
