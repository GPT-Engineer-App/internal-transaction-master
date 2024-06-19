import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateTransaction = () => {
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to create a new transaction
    navigate("/dashboard");
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="details">Transaction Details</label>
          <Input
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Create Transaction</Button>
      </form>
    </div>
  );
};

export default CreateTransaction;