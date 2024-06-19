import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Transaction Management Tool</h1>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
    </div>
  );
};

export default Index;