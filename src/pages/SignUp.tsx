import { useScrollToTop } from '../hooks/useScrollToTop';
import { SignUpForm } from '../components/signup/SignUpForm';
import { SignUpBenefits } from '../components/signup/SignUpBenefits';

export function SignUpPage() {
  useScrollToTop();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <SignUpForm />
          <SignUpBenefits />
        </div>
      </div>
    </div>
  );
}