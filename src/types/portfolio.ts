export interface MultilingualText {
  en: string;
  id: string;
  [key: string]: string; // For dynamic indexing
}

export interface Strength {
  en: string;
  id: string;
}

export interface ContactItem {
  label: MultilingualText;
  value: string;
  href: string;
}

export interface SiteProfile {
  cvLink: string;
  strengths: Strength[];
  contact: ContactItem[];
}

export interface Project {
  title: MultilingualText;
  category: MultilingualText;
  summary: MultilingualText;
  description: MultilingualText;
  role: MultilingualText;
  impact: MultilingualText;
  stack: string[];
  meta: MultilingualText;
  image: string;
  embed?: string;
  link: string;
  group: "original" | "iot" | "video" | "redesign";
}

export interface JourneyProof {
  image: string;
  label: MultilingualText;
  caption: MultilingualText;
  detail?: MultilingualText;
}

export interface JourneyItem {
  year: string;
  title: MultilingualText;
  text: MultilingualText;
  proof?: JourneyProof;
}

export interface Certification {
  type: MultilingualText;
  title: MultilingualText;
  issuer: MultilingualText;
  year: string;
  note: MultilingualText;
  image: string;
  proofLink: string;
}

export interface EducationItem {
  year: MultilingualText;
  mark: string;
  logo: string;
  title: MultilingualText;
  text: MultilingualText;
}

export interface Skill {
  name: string;
  icon: string;
  note: MultilingualText;
  tone: string;
  tier: "core" | "support";
}

export interface StaticCopy {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    identity: string;
    work: string;
    journey: string;
    education: string;
    certifications: string;
    skills: string;
    contact: string;
  };
  hero: {
    title: string;
    intro: string;
    actionsLabel: string;
    primaryCta: string;
    primaryMeta: string;
    cvCta: string;
    cvMeta: string;
    secondaryCta: string;
    secondaryMeta: string;
    availability: string;
    collab: string;
    scrollPrompt: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    lead: string;
    principles: Array<{
      number: string;
      title: string;
      text: string;
    }>;
  };
  work: {
    sectionLabel: string;
    title: string;
    intro: string;
  };
  identity: {
    sectionLabel: string;
    kicker: string;
    title: string;
    lead: string;
    focusKicker: string;
    focusTitle: string;
    focusLead: string;
    focusMetricOne: string;
    focusMetricTwo: string;
    fullLabel: string;
    symbolLabel: string;
    anatomyKicker: string;
    anatomyTitle: string;
    usageKicker: string;
    usageTitle: string;
    usageLead: string;
    principles: Array<{
      title: string;
      text: string;
      image: string;
    }>;
  };
  journey: {
    sectionLabel: string;
    title: string;
  };
  education: {
    sectionLabel: string;
    kicker: string;
    title: string;
    intro: string;
  };
  certifications: {
    sectionLabel: string;
    title: string;
    intro: string;
  };
  skills: {
    sectionLabel: string;
    kicker: string;
    title: string;
    intro: string;
  };
  contact: {
    sectionLabel: string;
    title: string;
    intro: string;
  };
  footer: {
    lead: string;
    status: string;
    navigation: string;
    noteTitle: string;
    note: string;
    backToTop: string;
  };
  ui: {
    themeToggle: string;
    openMenu: string;
    closeMenu: string;
    closeProjectDetails: string;
    closeJourneyProof: string;
    openProjectDetail: string;
    openProof: string;
    openReference: string;
    role: string;
    impact: string;
    stack: string;
    about: string;
    explanation: string;
    coreSkill: string;
    supportTool: string;
  };
  signal: string[];
}
