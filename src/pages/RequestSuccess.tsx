import { useScrollToTop } from '../hooks/useScrollToTop';
import { RequestSuccessContent } from '../components/request-success/RequestSuccessContent';

export function RequestSuccessPage() {
  useScrollToTop();
  
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center">
      <RequestSuccessContent />
    </div>
  );
}