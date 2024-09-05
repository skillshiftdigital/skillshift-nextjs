export type IFaq =  {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
}

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "What is Digital Transformation?",
    desc: "Digital Transformation is the process of using digital technologies to create new — or modify existing — business processes, culture, and customer experiences to meet changing business and market requirements. It's about reimagining business in the digital age.",
    isShow: true,
  },
  {
    id: "Two",
    title: "Why is Digital Transformation important for my business?",
    desc: "Digital Transformation is crucial because it allows businesses to Improve operational efficiency, enhance customer experience, stay competitive in a rapidly changing market, enable data-driven decision making, foster innovation and agility",
  },
  {
    id: "Three",
    title: "What services does skillshift offer for Digital Transformation?",
    desc: "We offer a comprehensive suite of Digital Transformation services, including: Digital Strategy Development. Process Automation. Cloud Migration. Data Analytics and AI Implementation, Cybersecurity Enhancement. Digital Workplace Solutions. Customer Experience Optimization",
  },
  {
    id: "Four",
    title: "How long does a typical Digital Transformation project take?",
    desc: "The duration of a Digital Transformation project can vary greatly depending on the scope and complexity. Small-scale projects might take a few months, while enterprise-wide transformations can span several years. We work with you to develop a tailored timeline that suits your business needs and goals.",
  },
  {
    id: "Five",
    title: "How do you handle data security during the transformation process?",
    desc: "Data security is a top priority in all our Digital Transformation projects. We implement robust cybersecurity measures, ensure compliance with relevant regulations (like GDPR, HIPAA, etc.), and follow best practices for data protection throughout the transformation process.",
  },
];
export default faq_data;