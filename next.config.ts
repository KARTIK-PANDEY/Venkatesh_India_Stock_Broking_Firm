import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/Company Overview.php", destination: "/about/company-overview", permanent: true },
      { source: "/Group Companies.php", destination: "/about/group-companies", permanent: true },
      { source: "/Mission & Vision.php", destination: "/about/mission-vision", permanent: true },
      { source: "/Core Values.php", destination: "/about/core-values", permanent: true },
      { source: "/Director.php", destination: "/about/management", permanent: true },
      { source: "/bankdetails.php", destination: "/about/bank-details", permanent: true },
      { source: "/r-documents.php", destination: "/compliance/registration-documents", permanent: true },
      { source: "/investorcharter_1.php", destination: "/investor-resources/investor-charter", permanent: true },
      { source: "/investorchart2.php", destination: "/investor-resources/investor-charter-svsbs", permanent: true },
      { source: "/investorchart3.php", destination: "/investor-resources/investor-charter-annexurec", permanent: true },
      { source: "/escmatrix.php", destination: "/investor-resources/escalation-matrix", permanent: true },
      { source: "/riskdisclosure.php", destination: "/investor-resources/risk-disclosure", permanent: true },
      { source: "/Product & Services.php", destination: "/products", permanent: true },
      { source: "/Equity.php", destination: "/products/equity", permanent: true },
      { source: "/Derivatives.php", destination: "/products/derivatives", permanent: true },
      { source: "/Commodity.php", destination: "/products/commodity", permanent: true },
      { source: "/Mutual-Fund.php", destination: "/products/mutual-funds", permanent: true },
      { source: "/downloads.php", destination: "/investor-resources/downloads", permanent: true },
      { source: "/career.php", destination: "/careers", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/Partner-With-Us.php", destination: "/partner-with-us", permanent: true },
      { source: "/openanaccount.php", destination: "/open-account", permanent: true },
      // Secure Back-office Redirects
      {
        source: "/login/backoffice-1",
        destination: "http://backoffice.venkateshindia.com:8085/capexweb/capexweb/",
        permanent: false,
      },
      {
        source: "/login/backoffice-2",
        destination: "http://backoffice2.venkateshindia.com:8085/capexweb/capexweb/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
