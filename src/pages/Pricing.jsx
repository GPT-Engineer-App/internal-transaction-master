import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    title: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    price: "$20/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    title: "Premium",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const Pricing = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="flex justify-center space-x-4">
        {pricingTiers.map((tier) => (
          <Card key={tier.title} className="w-80">
            <CardHeader>
              <CardTitle>{tier.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">{tier.price}</p>
              <ul className="mb-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline">Subscribe</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;