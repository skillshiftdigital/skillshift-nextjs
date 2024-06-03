export type IFaq =  {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
}

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "Talent Acquisition Strategy",
    desc: "Developing customized talent acquisition strategies tailored to the agency’s needs. Identifying key roles and skill sets required to meet business objectives.",
    isShow: true,
  },
  {
    id: "Two",
    title: "Candidate Sourcing",
    desc: "Leveraging various sourcing channels to attract top talent, including job boards, social media, and professional networks. Conducting proactive outreach and headhunting for hard-to-fill positions.",
  },
  {
    id: "Three",
    title: "Screening and Selection",
    desc: "Implementing a rigorous screening process to assess candidate qualifications, skills, and cultural fit. Conducting structured interviews and assessments to identify the best candidates.",
  },
  {
    id: "Four",
    title: "Onboarding Process Design",
    desc: "Designing comprehensive onboarding programs to ensure smooth integration of new hires. Providing resources and training to help new employees understand the agency’s culture, processes, and tools.",
  },
  {
    id: "Five",
    title: "Onboarding Support",
    desc: "Offering ongoing support and guidance to new hires during their initial months. Conducting regular check-ins and feedback sessions to address any concerns and ensure successful onboarding.",
  },
];

export default faq_data;