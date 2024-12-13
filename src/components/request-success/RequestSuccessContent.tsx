import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialShare } from './SocialShare';

export function RequestSuccessContent() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Request Submitted Successfully!</h1>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            Thank you for your interest in Gustem. We've received your request and will review it shortly.
          </p>
          <p className="text-gray-600">
            We're currently in beta and are carefully onboarding new customers. We'll be in touch via email within 2-3 business days.
          </p>
        </div>
        
        {/* <SocialShare /> */}
        
        <div className="mt-8 pt-8 border-t">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}