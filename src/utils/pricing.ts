export const plans = [
  {
    id: "free",
    title: "Free",
    description: "For creators trying out Taptree for the first time",
    price: "$0",
    recommended: false,
    status: true,
    label: "Get Started",
    features: [
      "1 Taptree profile",
      "Basic analytics (clicks & views)",
      "Up to 25 links",
      "Customizable themes (limited)",
      "Social icons support",
      "Community support",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    description:
      "For creators and professionals who want to maximize their Taptree profile",
    price: "$19",
    recommended: true,
    label: "Upgrade Now",
    status: false,
    features: [
      "Everything in Free Plan, plus:",
      "50GB Cloud Storage",
      "Customizable Profile Themes",
      "Priority Email & Chat Support",
      "Unlimited Links",
      "Standard Security Features",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description:
      "For teams and businesses that need advanced features and dedicated support",
    price: "Custom",
    label: "Contact Sales",
    recommended: false,
    status: false,
    features: [
      "Everything in Pro Plan, plus:",
      "Dedicated Account Manager",
      "Advanced Security & Compliance (SSO, GDPR, SOC 2)",
      "Unlimited Cloud Storage",
      "White-Label Branding",
      "Team Collaboration & Roles",
      "Priority 24/7 Support",
      "Custom Integrations & API Access",
    ],
  },
];

export const pricing = {};
