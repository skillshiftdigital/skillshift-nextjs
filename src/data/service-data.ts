import { StaticImageData } from 'next/image';
// home 1
import icon_5 from '@/assets/images/icon/icon_05.svg';


// data type 
interface IService {
    id: number;
    icon: StaticImageData;
    title: string;
    desc: string;
    page: string;
    link: string;
}

const service_data:IService[] = [

    {
    id:1,
    icon:icon_5,
    title:'Strategic Services',
    desc: 'Providing leadership and guidance on long-term vision, market positioning, and growth strategies.',
    page:'servicesNine',
    link:'/services/strategic-services'
  },
  {
    id:2,
    icon:icon_5,
    title: 'Digital Transformation',
    desc: 'Integration of digital technologies to alter operations, enhance value delivery, and foster a culture of innovation.',
    page:'servicesNine',
    link:'/services/digital-transformation'
  },
  {
    id:3,
    icon:icon_5,
    title: 'Service Diversification',
    desc: 'Assisting agencies in launching new service lines like Data & Analytics, AI, SEO, and Affiliates.',
    page:'servicesNine',
    link:'/services/service-diversification'
  },
  {
    id:4,
    icon:icon_5,
    title: 'Operational Support',
    desc: 'Providing temporary staffing solutions to fill gaps until permanent hires are made, ensuring continuity of service.',
    page:'servicesNine',
    link:'/services/operational-support'
  },
  {
    id:5,
    icon:icon_5,
    title: 'Training & Development',
    desc: 'Training staff on digital tools, leadership, and creative thinking to enhance their skill sets.',
    page:'servicesNine',
    link:'/services/training-development'
  },
  {
    id:6,
    icon:icon_5,
    title: 'HR Services',
    desc: 'Streamlined hiring processes to meet digital innovation needs and smooth integration of new hires.',
    page:'servicesNine',
    link:'/services/hr-services'
  },
  {
    id:7,
    icon:icon_5,
    title: 'Engineering Services',
    desc: 'Creating and integrating custom tools specific to agency needs, such as analytics and client service delivery platforms.',
    page:'servicesNine',
    link:'/services/engineering-services'
  },
  {
    id:8,
    icon:icon_5,
    title: 'Creative Services',
    desc: 'Producing visually striking content for key campaigns to achieve significant performance impact.',
    page:'servicesNine',
    link:'/services/creative-services'
  },
  {
    id:9,
    icon:icon_5,
    title: 'Technical Support',
    desc: 'Providing ongoing support and iterative improvements post-launch to ensure product longevity and success.',
    page:'servicesNine',
    link:'/services/technical-support'
  },
  {
    id: 10,
    icon: icon_5,
    title: 'Advanced Branding Consultation',
    desc: 'Elevate your brand with strategic consultation designed to refine and enhance your brand identity and presence.',
    page: 'servicesAll',
    link:'/services/advanced-branding-consultation'
},
{
    id: 11,
    icon: icon_5,
    title: 'Advanced Programmatic Advertising',
    desc: 'Leverage cutting-edge programmatic advertising techniques to optimize ad spend and target audiences more effectively.',
    page: 'servicesAll',
    link:'/services/advanced-programmatic-advertising'
},
{
    id: 12,
    icon: icon_5,
    title: 'Agency Proprietary Tools',
    desc: 'Gain access to exclusive tools developed to streamline agency operations and enhance client engagement.',
    page: 'servicesAll',
    link:'/services/agency-proprietary-tools'
},
{
    id: 13,
    icon: icon_5,
    title: 'Automated Client Communication',
    desc: 'Enhance communication efficiency with automated systems that ensure timely and personalized client interactions.',
    page: 'servicesAll',
    link:'/services/automated-client-communication'
},
{
    id: 14,
    icon: icon_5,
    title: 'Billing & Invoicing Solutions',
    desc: 'Implement robust billing and invoicing solutions to simplify financial processes and improve payment timelines.',
    page: 'servicesAll',
    link:'/services/billing-invoicing-solutions'
},
{
    id: 15,
    icon: icon_5,
    title: 'Budgeting & Forecasting Tools',
    desc: 'Utilize advanced tools to improve financial planning with accurate budgeting and forecasting capabilities.',
    page: 'servicesAll',
    link:'/services/budgeting-forecasting-tools'
},
{
    id: 16,
    icon: icon_5,
    title: 'Client Product Development',
    desc: 'Collaborate on product development initiatives to create solutions tailored to your clients’ unique needs.',
    page: 'servicesAll',
    link:'/services/client-product-development'
},
{
    id: 17,
    icon: icon_5,
    title: 'Contract Review & Negotiation',
    desc: 'Secure favorable terms and protect your interests with expert contract review and negotiation services.',
    page: 'servicesAll',
    link:'/services/contract-review-negotiation'
},
{
    id: 18,
    icon: icon_5,
    title: 'Creative Innovation Labs',
    desc: 'Foster innovation with a creative lab environment where ideas can be explored and developed into groundbreaking solutions.',
    page: 'servicesAll',
    link:'/services/creative-innovation-labs'
},
{
    id: 19,
    icon: icon_5,
    title: 'Creative Process Optimization',
    desc: 'Streamline your creative processes to enhance productivity and foster a culture of continuous improvement.',
    page: 'servicesAll',
    link:'/services/creative-process-optimization'
},
{
    id: 20,
    icon: icon_5,
    title: 'CRM Systems Tailored',
    desc: 'Get customized CRM solutions designed to meet your specific business needs and improve customer relationships.',
    page: 'servicesAll',
    link:'/services/crm-systems-tailored'
},
{
    id: 21,
    icon: icon_5,
    title: 'Custom Software Development',
    desc: 'Create bespoke software solutions that cater to unique business challenges and drive operational efficiency.',
    page: 'servicesAll',
    link:'/services/custom-software-development'
},
{
    id: 22,
    icon: icon_5,
    title: 'Customized Automation Workflows',
    desc: 'Implement tailored automation workflows to enhance efficiency and accuracy across your business operations.',
    page: 'servicesAll',
    link:'/services/customized-automation-workflows'
},
{
    id: 23,
    icon: icon_5,
    title: 'Customized Upskilling Programs',
    desc: 'Develop specialized upskilling programs to enhance your team’s capabilities and address evolving business needs.',
    page: 'servicesAll',
    link:'/services/customized-upskilling-programs'
},
{
    id: 24,
    icon: icon_5,
    title: 'Data Visualization Dashboard',
    desc: 'Gain insights through intuitive dashboards that visualize complex data, enabling informed decision-making.',
    page: 'servicesAll',
    link:'/services/data-visualization-dashboard'
},
{
    id: 25,
    icon: icon_5,
    title: 'DevSecOps & CI/CD',
    desc: 'Integrate DevSecOps and CI/CD practices to enhance software development security and deployment efficiency.',
    page: 'servicesAll',
    link:'/services/devsecops-cicd'
},
{
    id: 26,
    icon: icon_5,
    title: 'Digital Transformation Consulting',
    desc: 'Transform your business with expert consulting that guides you through the complexities of digital innovation.',
    page: 'servicesAll',
    link:'/services/digital-transformation-consulting'
},
{
    id: 27,
    icon: icon_5,
    title: 'Employee Relations & HR Analytics',
    desc: 'Optimize HR strategies with analytics-driven insights that improve employee relations and workplace culture.',
    page: 'servicesAll',
    link:'/services/employee-relations-hr-analytics'
},
{
    id: 28,
    icon: icon_5,
    title: 'Financial Planning & Analysis',
    desc: 'Enhance your financial performance with comprehensive planning and analysis that drives business growth.',
    page: 'servicesAll',
    link:'/services/financial-planning-analysis'
},
{
    id: 29,
    icon: icon_5,
    title: 'GDPR & CCPA Compliance',
    desc: 'Ensure compliance with GDPR and CCPA regulations to protect customer data and avoid potential penalties.',
    page: 'servicesAll',
    link:'/services/gdpr-ccpa-compliance'
},
{
    id: 30,
    icon: icon_5,
    title: 'High-Impact Visual Content',
    desc: 'Create compelling visual content that captures attention and enhances your brand’s visual narrative.',
    page: 'servicesAll',
    link:'/services/high-impact-visual-content'
},
{
    id: 31,
    icon: icon_5,
    title: 'Incident Response Planning',
    desc: 'Prepare for potential security incidents with proactive planning and strategies to mitigate risks effectively.',
    page: 'servicesAll',
    link:'/services/incident-response-planning'
},
{
    id: 32,
    icon: icon_5,
    title: 'Integrations & Marketing Automation',
    desc: 'Automate your marketing efforts and integrate systems to streamline workflows and enhance campaign effectiveness.',
    page: 'servicesAll',
    link:'/services/integrations-marketing-automation'
},
{
    id: 33,
    icon: icon_5,
    title: 'Leadership Development',
    desc: 'Cultivate strong leadership skills within your team with targeted development programs that inspire and guide.',
    page: 'servicesAll',
    link:'/services/leadership-development'
},
{
    id: 34,
    icon: icon_5,
    title: 'Market Analysis & Insights',
    desc: 'Derive valuable insights from in-depth market analysis to guide strategic decisions and identify growth opportunities.',
    page: 'servicesAll',
    link:'/services/market-analysis-insights'
},
{
    id: 35,
    icon: icon_5,
    title: 'New Business Divisions',
    desc: 'Explore the potential for new business divisions that align with market demands and expand your business footprint.',
    page: 'servicesAll',
    link:'/services/new-business-divisions'
},
{
    id: 36,
    icon: icon_5,
    title: 'Niche Social Performance Campaigns',
    desc: 'Target niche markets with customized social media campaigns designed to engage and convert specific audience segments.',
    page: 'servicesAll',
    link:'/services/niche-social-performance-campaigns'
},
{
    id: 37,
    icon: icon_5,
    title: 'Overflow Management',
    desc: 'Effectively manage work overflow with strategies that ensure quality and efficiency, even during peak times.',
    page: 'servicesAll',
    link:'/services/overflow-management'
},
{
    id: 38,
    icon: icon_5,
    title: 'Performance Management',
    desc: 'Implement performance management systems that foster high achievement and align with your company’s objectives.',
    page: 'servicesAll',
    link:'/services/performance-management'
},
{
    id: 39,
    icon: icon_5,
    title: 'PPC Campaign Management',
    desc: 'Maximize the ROI of your PPC campaigns with expert management that optimizes ad placements and targeting.',
    page: 'servicesAll',
    link:'/services/ppc-campaign-management'
},
{
    id: 40,
    icon: icon_5,
    title: 'Predictive Analytics',
    desc: 'Utilize predictive analytics to forecast trends and behaviors, enabling proactive decision making and strategic planning.',
    page: 'servicesAll',
    link:'/services/predictive-analytics'
},
{
    id: 41,
    icon: icon_5,
    title: 'Security Audits & Risk Assessments',
    desc: 'Ensure your digital environment is secure with comprehensive audits and risk assessments that identify vulnerabilities.',
    page: 'servicesAll',
    link:'/services/security-audits-risk-assessments'
},
{
    id: 42,
    icon: icon_5,
    title: 'Security Awareness Training',
    desc: 'Educate your team on security best practices with training programs that enhance overall organizational security.',
    page: 'servicesAll',
    link:'/services/security-awareness-training'
},
{
    id: 43,
    icon: icon_5,
    title: 'Strategic Vision & Direction',
    desc: 'Define a clear strategic vision and direction that guides your organization towards long-term success and innovation.',
    page: 'servicesAll',
    link:'/services/strategic-vision-direction'
},
{
    id: 44,
    icon: icon_5,
    title: 'Talent Acquisition & Onboarding',
    desc: 'Streamline your talent acquisition and onboarding processes to attract and integrate top talent effectively.',
    page: 'servicesAll',
    link:'/services/talent-acquisition-onboarding'
},
{
    id: 45,
    icon: icon_5,
    title: 'Technical Support & Maintenance',
    desc: 'Provide continuous technical support and maintenance to ensure your systems are always operational and up-to-date.',
    page: 'servicesAll',
    link:'/services/technical-support-maintenance'
},
{
    id: 46,
    icon: icon_5,
    title: 'User Research & Usability',
    desc: 'Conduct comprehensive user research and usability testing to optimize product design and user experience.',
    page: 'servicesAll',
    link:'/services/user-research-usability'
},
{
    id: 47,
    icon: icon_5,
    title: 'UX Audits & Improvement',
    desc: 'Identify usability issues and improve user experience with detailed UX audits and targeted enhancement strategies.',
    page: 'servicesAll',
    link:'/services/ux-audits-improvement'
},
{
    id: 48,
    icon: icon_5,
    title: 'UX/UI Design & Development',
    desc: 'Design and develop intuitive and engaging user interfaces that enhance user interaction and satisfaction.',
    page: 'servicesAll',
    link:'/services/ux-ui-design-development'
},
{
    id: 49,
    icon: icon_5,
    title: 'Video Ad Creation & Management',
    desc: 'Craft compelling video ads that captivate audiences and manage campaigns to ensure maximum engagement and impact.',
    page: 'servicesAll',
    link:'/services/video-ad-creation-management'
},
{
    id: 50,
    icon: icon_5,
    title: 'White Label Services',
    desc: 'Extend your offerings with white label services that allow you to deliver additional value to your clients without the overhead.',
    page: 'servicesAll',
    link:'/services/white-label-services'
}

]

export default service_data;