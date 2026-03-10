
export const MOCK_FLAGGED_PROFILES = [
  {
    id: "P001",
    candidate: {
      name: "Alex Johnson",
      email: "alex.j@example.com",
      phone: "+1 (555) 123-4567",
      avatar: "https://ui-avatars.com/api/?name=Alex+Johnson&background=random",
    },
    jobRole: "Senior Software Engineer",
    authenticityScore: 42,
    riskLevel: "High",
    flagReason: "Automated behavior detected (pattern mismatch)",
    appliedDate: "2024-03-08",
    status: "Under Review",
    location: "San Francisco, CA",
    experience: "8 years",
    resumeUrl: "#",
    skills: ["React", "Node.js", "Python", "AWS"],
    flagDetails: "Suspicious session duration (0.5s for 15 questions). Interaction pattern matches known bot templates."
  },
  {
    id: "P002",
    candidate: {
      name: "Samantha Reed",
      email: "s.reed@example.com",
      phone: "+1 (555) 987-6543",
      avatar: "https://ui-avatars.com/api/?name=Samantha+Reed&background=random",
    },
    jobRole: "Product Manager",
    authenticityScore: 78,
    riskLevel: "Low",
    flagReason: "IP Geolocation Anomaly",
    appliedDate: "2024-03-09",
    status: "Flagged",
    location: "New York, NY",
    experience: "5 years",
    resumeUrl: "#",
    skills: ["Agile", "Scrum", "Jira", "Market Research"],
    flagDetails: "IP address originates from a different region than stated location. VPN use suspected."
  },
  {
    id: "P003",
    candidate: {
      name: "Michael Chen",
      email: "m.chen@example.com",
      phone: "+1 (555) 456-7890",
      avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
    },
    jobRole: "Data Scientist",
    authenticityScore: 15,
    riskLevel: "High",
    flagReason: "Plagiarized Portfolio",
    appliedDate: "2024-03-10",
    status: "Rejected",
    location: "Remote",
    experience: "3 years",
    resumeUrl: "#",
    skills: ["TensorFlow", "PyTorch", "Pandas", "SQL"],
    flagDetails: "Multiple portfolio projects match existing GitHub repositories from other users."
  },
  {
    id: "P004",
    candidate: {
      name: "Emily Davis",
      email: "edavis99@example.com",
      phone: "+1 (555) 321-0987",
      avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=random",
    },
    jobRole: "UX Designer",
    authenticityScore: 92,
    riskLevel: "Low",
    flagReason: "Behavioral Outlier",
    appliedDate: "2024-03-10",
    status: "Approved",
    location: "Austin, TX",
    experience: "6 years",
    resumeUrl: "#",
    skills: ["Figma", "Adobe XD", "User Research"],
    flagDetails: "Extremely fast navigation through specific sections. Validated as power user behavior."
  },
  {
    id: "P005",
    candidate: {
      name: "Robert Wilson",
      email: "rwilson@example.com",
      phone: "+1 (555) 789-0123",
      avatar: "https://ui-avatars.com/api/?name=Robert+Wilson&background=random",
    },
    jobRole: "DevOps Engineer",
    authenticityScore: 55,
    riskLevel: "Medium",
    flagReason: "AI-Generated Resume",
    appliedDate: "2024-03-11",
    status: "Flagged",
    location: "Chicago, IL",
    experience: "7 years",
    resumeUrl: "#",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD"],
    flagDetails: "Content analysis suggests 85% probability of AI generation for profile summary."
  }
];

export const MOCK_STATS = {
  totalFlagged: 124,
  underReview: 45,
  approved: 322,
  rejected: 89
};
