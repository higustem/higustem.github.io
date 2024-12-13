import { Shield, Zap, CreditCard, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with SOC 2 Type II compliance'
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get started in minutes with our simple onboarding process'
  },
  {
    icon: CreditCard,
    title: 'Unlimited Cards',
    description: 'Create as many virtual cards as your business needs'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Access to our dedicated support team around the clock'
  }
];

export function SignUpBenefits() {
  return (
    <div className="space-y-8 md:pt-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Why choose Gustem?</h2>
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
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}