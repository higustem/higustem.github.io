import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Terms() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <main className="container mx-auto px-6 max-w-4xl py-12">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using Gustem's virtual card services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
            <p>Gustem provides virtual card services for online payments and transactions. We offer the ability to create and manage virtual cards for various purposes including online shopping, subscription management, and business expenses.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Provide accurate and current information</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Report any unauthorized use or suspicious activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Virtual Card Usage</h2>
            <p>Users are responsible for all transactions made using their virtual cards. Gustem reserves the right to suspend or terminate cards that show signs of fraudulent activity.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Fees and Charges</h2>
            <p>Users agree to pay all applicable fees associated with the use of our services. Fee structures will be clearly communicated and may be updated with notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Privacy and Data Protection</h2>
            <p>We are committed to protecting your privacy and handling your data in accordance with our Privacy Policy and applicable data protection laws.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p>Gustem shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes, and continued use of the service constitutes acceptance of modified terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at contact@gustem.com.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}