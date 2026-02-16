import React from 'react';
import Layout from '@theme/Layout';
import styles from './privacy-policy.module.css'; // CSS module

export default function PrivacyPolicy() {
  return (
    <Layout title="Shetify Privacy Policy" description="Privacy Policy for Shetify Shopify App">
      <div className={styles.container}>
        <h1>Shetify Privacy Policy</h1>

        <p>Shetify (“we”, “our”, “us”) is committed to protecting the privacy of our users and Shopify store owners who use our App (“App”). This Privacy Policy explains in detail what information we collect, how we use it, and your rights regarding that information. By using Shetify, you agree to the terms outlined in this Privacy Policy.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information to provide and improve the App’s functionality. The types of information we collect include:</p>
        <ul>
          <li><strong>Shopify Store Data:</strong> Store name, domain, email address, and API data required to integrate Shetify with your store.</li>
          <li><strong>App Usage Data:</strong> Information on how you interact with the App, features used, and settings configured.</li>
          <li><strong>Personal Information:</strong> Any information you provide voluntarily through support requests, feedback forms, or registration.</li>
          <li><strong>Analytics Data:</strong> Aggregated, anonymous data for analyzing app performance and usage trends.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information collected to:</p>
        <ul>
          <li>Provide and maintain the functionality of the Shetify App</li>
          <li>Personalize and improve user experience</li>
          <li>Respond to support requests and provide customer service</li>
          <li>Send important updates, announcements, and relevant information</li>
          <li>Monitor app usage and detect potential issues or fraud</li>
        </ul>

        <h2>3. Data Sharing and Disclosure</h2>
        <p>We respect your privacy and will never sell or rent your personal data. We may share your information in the following circumstances:</p>
        <ul>
          <li>With Shopify, for the purpose of app integration and API access</li>
          <li>With service providers that assist in operating the App, such as hosting and analytics providers</li>
          <li>When required by law or legal process, or to protect the rights, property, or safety of our company or others</li>
        </ul>

        <h2>4. Data Retention</h2>
        <p>We retain your data only as long as necessary to provide the App and comply with legal obligations. Once data is no longer required, it is securely deleted or anonymized.</p>

        <h2>5. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. These measures include:</p>
        <ul>
          <li>Encrypted connections (HTTPS) for data transmission</li>
          <li>Secure storage of sensitive data</li>
          <li>Regular security audits and monitoring</li>
        </ul>
        <p>However, no method of data transmission or storage is completely secure. While we strive to protect your information, we cannot guarantee absolute security.</p>

        <h2>6. Your Rights</h2>
        <p>You have certain rights regarding your data:</p>
        <ul>
          <li>Access and request a copy of your data</li>
          <li>Request correction or update of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Disconnect the Shetify App from your Shopify store at any time</li>
        </ul>

        <h2>7. Third-Party Services</h2>
        <p>Shetify may use third-party services for analytics, performance monitoring, or hosting. These services may have access to your data solely to perform their functions. We ensure that all third-party services comply with data privacy standards.</p>

        <h2>8. Cookies and Tracking</h2>
        <p>We do not use cookies to collect personally identifiable information. Any analytics tracking is anonymous and used solely for improving app performance.</p>

        <h2>9. Children’s Privacy</h2>
        <p>Shetify is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected data from a child, we will delete it promptly.</p>

        <h2>10. International Users</h2>
        <p>If you are accessing Shetify from outside your country, please note that data may be transferred to and processed in countries where data protection laws may differ.</p>

        <h2>11. Updates to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with the revised effective date. We encourage you to review this page periodically.</p>

        <h2>12. Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy or your data, please contact us:</p>
        <ul>
          <li>Email: support@shetify.com</li>
          <li>Website: https://www.shetify.com</li>
        </ul>

        <p>By using the Shetify App, you agree to this Privacy Policy and consent to the practices described herein.</p>
      </div>
    </Layout>
  );
}