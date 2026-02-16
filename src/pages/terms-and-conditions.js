import React from 'react';
import Layout from '@theme/Layout';
import styles from './terms-conditions.module.css'; // CSS module

export default function TermsAndConditions() {
  return (
    <Layout title="Shetify Terms & Conditions" description="Terms and Conditions for Shetify Shopify App">
      <div className={styles.container}>
        <h1>Shetify Terms & Conditions</h1>

        <p>Welcome to Shetify! By using our Shopify app (“App”), you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully. If you do not agree, do not use the App.</p>

        <h2>1. Use of the App</h2>
        <p>Shetify grants you a limited, non-exclusive, non-transferable license to use the App solely for your Shopify store purposes. You agree not to:</p>
        <ul>
          <li>Copy, modify, or distribute the App</li>
          <li>Reverse engineer, decompile, or attempt to extract source code</li>
          <li>Use the App for unlawful or unauthorized purposes</li>
          <li>Interfere with the App’s operation or security</li>
        </ul>

        <h2>2. User Accounts</h2>
        <p>To use Shetify, you may need to provide Shopify store credentials and create an account. You are responsible for maintaining the confidentiality of your account and for all activity under your account.</p>

        <h2>3. Payments and Fees</h2>
        <p>If the App includes paid features, you agree to pay all applicable fees. Payment processing is handled through Shopify’s billing system, and you agree to Shopify’s payment terms.</p>

        <h2>4. Data and Privacy</h2>
        <p>By using Shetify, you consent to the collection and use of data as described in our <a href="/privacy-policy">Privacy Policy</a>. You are responsible for ensuring you comply with all applicable privacy laws.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content, features, and functionality of Shetify are the property of Shetify or its licensors. No ownership rights are transferred to you through use of the App.</p>

        <h2>6. Termination</h2>
        <p>We may suspend or terminate your access to the App at any time if we believe you are violating these Terms & Conditions or for any other reason. Upon termination, you must cease all use of the App.</p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>The App is provided “as is” without warranties of any kind, either express or implied. We do not guarantee that the App will be error-free or uninterrupted.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Shetify shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>

        <h2>9. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Shetify, its affiliates, and employees from any claims, damages, losses, or expenses arising from your use of the App.</p>

        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms & Conditions at any time. Updates will be posted on this page with the revised effective date. Continued use of the App constitutes acceptance of the updated Terms.</p>

        <h2>11. Governing Law</h2>
        <p>These Terms & Conditions are governed by the laws of [Your Country/State]. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in [Your Location].</p>

        <h2>12. Contact Us</h2>
        <p>If you have questions or concerns regarding these Terms & Conditions, please contact us:</p>
        <ul>
          <li>Email: support@shetify.com</li>
          <li>Website: https://www.shetify.com</li>
        </ul>

        <p>By using Shetify, you acknowledge that you have read, understood, and agree to these Terms & Conditions.</p>
      </div>
    </Layout>
  );
}