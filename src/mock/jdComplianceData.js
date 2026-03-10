
export const JD_COMPLIANCE_STATS = {
  jdsReviewed: 1284,
  biasFlagsFound: 42,
  complianceScore: 94.2,
  publishReadyRate: 88
};

export const MOCK_VALIDATION_RESULT = {
  riskScore: 32,
  riskLevel: 'Low',
  status: 'Needs Review',
  overallDecision: 'Needs Review',
  summary: "This Job Description is generally strong but contains a few gendered terms and one aggressive requirement that may discourage diverse applicants.",
  inclusiveCheck: {
    score: 78,
    status: 'Pass with Warnings'
  },
  complianceStatus: {
    score: 95,
    status: 'Compliant'
  },
  flaggedTerms: [
    {
      term: "rockstar",
      category: "Gendered/Aggressive",
      reason: "Commonly associated with masculine-coded environments and can discourage female-identifying or non-binary candidates.",
      suggestion: "high-performing engineer"
    },
    {
      term: "highly competitive",
      category: "Culture Bias",
      reason: "May alienate applicants who value collaborative over competitive environments.",
      suggestion: "collaborative and fast-paced"
    },
    {
      term: "must be able to lift 50lbs",
      category: "Disability Bias",
      reason: "Could be seen as discriminatory if physical lifting isn't a core requirement of the role.",
      suggestion: "able to perform essential role functions with or without accommodation"
    }
  ],
  sections: [
    {
      id: "gender",
      label: "Gender Neutrality",
      score: 85,
      status: "Excellent",
      details: "No masculine or feminine coded pronouns detected. Use of 'they/their' throughout."
    },
    {
      id: "age",
      label: "Age Bias Detection",
      score: 100,
      status: "No Risk",
      details: "No age-coded terms like 'digital native' or 'recent graduate' detected."
    },
    {
      id: "disability",
      label: "Disability Inclusion",
      score: 60,
      status: "Warning",
      details: "Physical requirements noted without accommodation language."
    }
  ]
};
