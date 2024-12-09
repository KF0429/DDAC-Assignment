import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Mock data for the to-do list
const todoItems = [
  { title: 'Unpaid', count: 3 },
  { title: 'To-Process Shipment', count: 5 },
  { title: 'Processed Shipment', count: 2 },
  { title: 'Pending Cancellation', count: 1 },
  { title: 'Pending Return/Refund', count: 2 },
  { title: 'Pending Invoice Upload', count: 4 },
  { title: 'Banned / Deboosted Products', count: 1 },
  { title: 'Sold Out Products', count: 7 },
  { title: 'Pending Campaign', count: 2 },
];

export default function MyProducts() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>To Do List</CardTitle>
          <CardDescription>Things you need to deal with</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {todoItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <span className="font-medium">{item.title}</span>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold">
                  {item.count}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
