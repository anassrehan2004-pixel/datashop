export type ServiceInterest =
  | 'Business Intelligence for Sales'
  | 'B2B Data Services'
  | 'Appointment Setting'
  | 'General Enquiry';

export interface VerifiedMetric {
  value: string;
  label: string;
  context: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  detail: string;
  output: string;
}

export const HERO_METRICS: VerifiedMetric[] = [
  {
    value: '22,531+',
    label: 'Appointments Generated',
    context: 'Qualified meetings booked for UK B2B clients',
  },
  {
    value: '1.7M+',
    label: 'UK Business Records',
    context: 'Verified decision-makers & contract renewal insights',
  },
  {
    value: '80+ Years',
    label: 'Combined Experience',
    context: 'Database design, research & B2B lead generation',
  },
  {
    value: '9.4 NPS',
    label: 'Client Satisfaction',
    context: 'Measured Net Promoter Score across campaigns',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Raw Data',
    summary: 'Business information is sourced from trusted commercial channels.',
    detail:
      'We gather foundational UK company records from established commercial sources including LinkedIn and Creditsafe, aligned strictly to your target sector, geography, and company size.',
    output: 'Targeted universe of matching UK businesses',
  },
  {
    step: '02',
    title: 'Cold Prospect',
    summary: 'Data is cleansed, sectorised, and organised inside our bespoke CRM.',
    detail:
      'Every record is deduplicated, screened for compliance, and structured by industry vertical so outdated contacts are removed before any outreach begins.',
    output: 'Cleansed, structured prospect database',
  },
  {
    step: '03',
    title: 'Warm Prospect',
    summary: 'Potential opportunities and key decision-makers are identified.',
    detail:
      'Our researchers verify the exact decision-maker, map organisational structure, and identify contract renewal dates and active buying timelines.',
    output: 'Verified decision-maker & renewal intelligence',
  },
  {
    step: '04',
    title: 'Lead',
    summary: 'Decision-makers are contacted directly and relevant insight is gathered.',
    detail:
      'Experienced B2B specialists hold consultative conversations with decision-makers—exploring current supplier satisfaction, upcoming needs, and addressing early objections.',
    output: 'Validated commercial need & engagement',
  },
  {
    step: '05',
    title: 'Appointment',
    summary: 'A qualified sales appointment is reviewed and diarised.',
    detail:
      'Every call is independently checked by our Quality Manager against your exact campaign criteria before a confirmed meeting is scheduled in your calendar.',
    output: 'Quality-assured sales meeting',
  },
  {
    step: '06',
    title: 'Your Sales Team',
    summary: 'The opportunity is passed to your team ready to pitch and close.',
    detail:
      'Your sales representatives step straight into meaningful meetings equipped with full background intelligence—skipping the 80% pre-sales groundwork.',
    output: 'Focused pitching, quoting & revenue growth',
  },
];

export const CREDIBILITY_METRICS: VerifiedMetric[] = [
  {
    value: '96%',
    label: 'Proposal Opportunity Rate',
    context: '96% of appointments result in an opportunity for your salesperson to submit a formal proposal.',
  },
  {
    value: 'Up to 12×',
    label: 'Campaign Return on Investment',
    context: 'Proven campaign structures designed to deliver up to 12× ROI and a 2 to 3-year market advantage.',
  },
  {
    value: '80%',
    label: 'Pre-Sales Effort Removed',
    context: 'We shoulder the research, cleansing, and qualification workload that typically consumes 80% of a rep’s week.',
  },
];

export const VERIFIED_DOORS_OPENED: string[] = [
  'Tesco',
  'B&Q',
  'KPMG',
  'JCB',
  "McDonald's",
  'Poundland',
  'University of Manchester',
  'University of Leeds',
  'Cardiff University',
];

export const COMPANY_CONTACT = {
  companyName: 'DataShop',
  brandName: 'DataShop',
  address: 'Suite 4, 36 Hylton Street, Birmingham, B18 6HN, United Kingdom',
  phoneDisplay: '0845 0944 890',
  phoneHref: 'tel:08450944890',
  email: 'info@thedatashop.co.uk',
  website: 'https://thedatashop.uk',
};
