import { Shield, BarChart, CreditCard, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: LineChart,
    title: 'Unified Analytics',
    description: 'Track all your ad spending across platforms in one dashboard'
  },
  {
    icon: BarChart,
    title: 'Smart Budgeting',
    description: 'Set and manage budgets for each advertising platform'
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    description: 'Secure virtual cards powered by Penny Inc for each platform'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security for all your advertising transactions'
  }
];

export function SignUpBenefits() {
  return (
    <div className="space-y-8 md:pt-8">
      <div>
        <h2 className="mb-2 text-2xl font-bold">Why choose Gustem?</h2>
        <p className="text-gray-600">
          Join thousands of businesses managing their expenses with virtual cards
        </p>
      </div>
      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <benefit.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}