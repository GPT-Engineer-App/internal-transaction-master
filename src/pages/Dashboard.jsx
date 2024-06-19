import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch transactions from the server
    // setTransactions(fetchedTransactions);
  }, []);

  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Transactions Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate("/create-transaction")}>Create Transaction</Button>
          <div className="mt-4">
            {transactions.length === 0 ? (
              <p>No transactions available.</p>
            ) : (
              <ul>
                {transactions.map((transaction) => (
                  <li key={transaction.id}>{transaction.details}</li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;