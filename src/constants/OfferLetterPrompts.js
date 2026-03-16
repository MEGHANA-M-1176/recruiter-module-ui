export const OFFER_LETTER_DRAFT_TEMPLATE = `[Company Name]
[Company Address]
[City, State, PIN]
[Email] | [Phone]

Date: [Insert Date]

To,
[Candidate Name]
[Candidate Address]
[City, State, PIN]

Subject: Offer of Employment for the Role of [Role Title]

Dear [Candidate Name],

We are pleased to offer you the position of [Role Title] at [Company Name].

Throughout the evaluation process, we were impressed by your professional strengths, your approach to problem-solving, and the value you can bring to the team. Your background, capabilities, and overall alignment with the role stood out strongly, and we are excited about the possibility of you joining us.

In this role, you will contribute to key business and team objectives while working closely with internal stakeholders to drive meaningful outcomes. We believe your strengths will help you make an immediate impact, and we are confident that you will continue to grow and succeed with us.

Compensation and Benefits

We are pleased to offer you a total annual Cost to Company (CTC) of [Final CTC Amount].

Your compensation structure will be as follows:

Base Salary: [Base Salary Amount] per annum

Benefits: [Benefits Amount / Description]

Performance Bonus (if applicable): [Bonus Amount / Description]

This compensation has been determined based on the role requirements, market alignment, internal parity, and the overall value you are expected to bring to the organization.

Role Details

Designation: [Role Title]

Department: [Department Name]

Employment Type: [Full-Time / Permanent / Contract]

Location: [Job Location]

Reporting To: [Manager Name / Designation]

Proposed Start Date: [Start Date]

Grade / Level: [Grade Label]

Your Role and Contribution

In this position, you will be expected to:

[Outcome / Responsibility 1]

[Outcome / Responsibility 2]

[Outcome / Responsibility 3]

During your initial months with the company, your focus will be on building momentum, understanding team priorities, and contributing effectively to business goals. We are confident that your strengths will support a successful start and create a strong foundation for long-term growth.

Work Culture and Growth

At [Company Name], we value ownership, collaboration, learning, and consistent excellence. We believe in creating an environment where individuals can do meaningful work, grow in their careers, and contribute to a strong team culture. We look forward to supporting your development and seeing the impact you will create in this role.

Offer Validity and Acceptance

This offer is valid until [Offer Validity Date]. We request you to confirm your acceptance on or before this date.

To accept this offer, please sign and return this letter or complete the acceptance process through the official candidate portal/shared link.

We are excited about the opportunity to have you join [Company Name] and look forward to building a successful journey together.

Warm regards,
[Hiring Manager Name]
[Hiring Manager Title]
[Company Name]

Candidate Acceptance

I, [Candidate Name], hereby accept the offer for the position of [Role Title] at [Company Name] under the terms and conditions mentioned above.

Candidate Signature: ____________________
Date: ____________________`;

export const AI_OFFER_LETTER_PROMPT = `Generate a professional, warm, and polished offer letter for a selected candidate.

The tone must be:
- professional
- human
- appreciative
- confident
- clear
- executive-level
- logically structured

The output must feel like a real company offer letter, not a generic AI draft.

IMPORTANT RESTRICTIONS:
- Do NOT mention any internal score
- Do NOT mention TTSW
- Do NOT mention Fit Bucket
- Do NOT mention Compensation Multiplier (CM)
- Do NOT mention R1, R2, or R3
- Do NOT mention any percentage, classification, internal band logic, or override reason
- Do NOT expose any internal evaluation mechanics

The letter must only show candidate-facing information.

Use the following structure:

1. Warm Introduction
2. Appreciation and Recognition
3. Why the Candidate Was Selected
4. Role and Purpose
5. Compensation and Benefits
6. Growth Path / First 90 Days
7. Culture and Team Fit
8. Formal Employment Details
9. Closing and Acceptance Instructions

Writing rules:
- Keep the language elegant but easy to understand
- Avoid robotic phrases
- Avoid repeating the same idea
- Do not overpraise unrealistically
- Make the reasoning sound logical and business-oriented
- Compensation section should explain that the offer is based on role scope, market alignment, and expected contribution, without exposing internal formulas
- Use full sentences and polished business language
- Ensure the letter reads naturally from start to finish

Input data:
Candidate Name: {{candidate_name}}
Role Title: {{role_title}}
Location: {{location}}
Final CTC: {{final_ctc}}
Base Salary: {{base_salary}}
Benefits: {{benefits}}
Bonus: {{bonus}}
Employment Type: {{employment_type}}
Reporting To: {{reporting_to}}
Start Date: {{start_date}}
Grade: {{internal_level}}
Top Task Strengths: {{top_3_task_strengths}}
Top Skill Highlight: {{top_skill_highlight}}
Will Highlight: {{will_highlight}}
Role Outcomes: {{role_outcomes}}
First 90 Day Priorities: {{first_90_day_priorities}}
Team Culture Note: {{team_culture_note}}
Offer Validity Date: {{offer_validity_date}}
Hiring Manager Name: {{hiring_manager_name}}
Hiring Manager Title: {{hiring_manager_title}}
Company Name: {{company_name}}

Output:
Return only the final offer letter in polished business format.`;

export const AI_VALIDATION_RULES = `Validation Rules:
Reject and regenerate the output if it contains:
- any internal score
- any percentage
- terms like TTSW, Fit Bucket, FSS, CM, multiplier
- R1, R2, R3
- override reason
- raw panel notes
- technical internal compensation logic
- score-like patterns or classification labels

Candidate-facing output must remain narrative, qualitative, and professional.`;
