import React from 'react';

const termsData = [
  {
    title: '1. Introduction',
    content: [
      'Welcome to Gustem LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our platform and services ("Services"), which help manage digital ad spendings effectively using virtual cards issued by third-party payment service providers.',
      'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.'
    ]
  },
  {
    title: '2. Services Provided',
    content: [
      'We provide tools and features to help businesses track and manage ad spendings on social media platforms in one centralized platform.',
      'Virtual payment cards used in our platform are issued by third-party payment service providers.',
      'We do not directly provide payment processing or card issuance services. Third-party providers are solely responsible for those services and their compliance.'
    ],
    isList: true
  },
  {
    title: '3. Eligibility',
    content: [
      'To use our Services, you must:',
      'Be at least 18 years old.',
      'Provide accurate and complete information during registration.',
      'Have the legal authority to enter into these Terms on behalf of your organization.'
    ],
    isList: true
  },
  {
    title: '4. Account Registration',
    content: [
      'You must create an account to use our Services.',
      'Maintain the confidentiality of your account credentials.',
      'Notify us immediately of any unauthorized access to your account.'
    ],
    isList: true
  },
  {
    title: '5. Fees and Payments',
    content: [
      'Service fees are billed based on the subscription or usage plan selected.',
      'Fees are non-refundable except as required by law.',
      'Payments are processed securely through third-party payment service providers.',
      'You are responsible for all applicable taxes.'
    ],
    isList: true
  },
  {
    title: '6. Third-Party Services',
    content: [
      'Third-party providers are responsible for all services related to payment processing and virtual card issuance.',
      'We are not liable for any issues, disputes, or failures related to third-party services.',
      'Users must comply with third-party providers\' terms and conditions when using their services.'
    ],
    isList: true
  },
  {
    title: '7. User Responsibilities',
    content: [
      'Use our Services only for lawful purposes.',
      'Do not engage in fraudulent activities, violate regulations, or misuse the platform.',
      'Ensure that all data provided is accurate and up to date.'
    ],
    isList: true
  },
  {
    title: '8. Data Privacy and Security',
    content: [
      'We collect and process personal data in accordance with our Privacy Policy.',
      'Users must consent to data processing as required by applicable data protection laws.',
      'Third-party providers manage payment-related data under their own privacy and security policies.'
    ],
    isList: true
  },
  {
    title: '9. Intellectual Property',
    content: [
      'All content, trademarks, and intellectual property related to our Services remain our property.',
      'Users may not copy, reproduce, or distribute any part of our platform without prior written consent.'
    ],
    isList: true
  },
  {
    title: '10. Disclaimers',
    content: [
      'Services are provided "as is" without warranties of any kind.',
      'We are not responsible for any damages resulting from the use of our platform or third-party services.',
      'We do not guarantee uninterrupted or error-free operations.'
    ],
    isList: true
  },
  {
    title: '11. Limitation of Liability',
    content: [
      'Our liability is limited to the amount you paid for our Services in the last 12 months.',
      'We are not responsible for indirect, incidental, or consequential damages.'
    ],
    isList: true
  },
  {
    title: '12. Termination',
    content: [
      'We may suspend or terminate your access if you violate these Terms.',
      'Users may terminate their accounts by providing written notice.',
      'Outstanding payments remain due even after termination.'
    ],
    isList: true
  },
  {
    title: '13. Changes to Terms',
    content: [
      'We reserve the right to update these Terms at any time.',
      'Changes will be communicated via email or posted on our website.',
      'Continued use of the Services constitutes acceptance of the updated Terms.'
    ],
    isList: true
  },
  {
    title: '14. Governing Law',
    content: [
      'These Terms are governed by the laws of the United States. Disputes arising out of or relating to these Terms will be resolved in the courts of the United States.'
    ]
  },
  {
    title: '15. Contact Us',
    content: [
      'Email: hi@gustem.com',
      'Address: [Insert Business Address]'
    ],
    prefix: 'For questions about these Terms, please contact us at:',
    isList: true
  }
];

export function Terms() {
  return (
    <div className="container max-w-4xl px-6 py-12 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-8 italic text-gray-600">Last Updated: 01/01/2025</p>
      
      <div className="space-y-8 text-gray-700">
        {termsData.map((section, index) => (
          <section key={index}>
            <h2 className="mb-3 text-2xl font-semibold">{index}...{section.title}</h2>
            {section.prefix && <p className="mb-2">{section.prefix}</p>}
            {section.isList ? (
              <ul className="pl-6 space-y-2 list-disc">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              section.content.map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))
            )}
          </section>
        ))}

        <p className="mt-8 text-gray-600">
          Thank you for choosing Gustem LLC! We look forward to helping you manage your digital ad spendings effectively.
        </p>
      </div>
    </div>
  );
}