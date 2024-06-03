import { StaticImageData } from 'next/image';
// home 1
import icon_1 from '@/assets/images/icon/icon_23.svg';
import icon_2 from '@/assets/images/icon/icon_24.svg';
import icon_3 from '@/assets/images/icon/icon_25.svg';
import icon_4 from '@/assets/images/icon/icon_26.svg';
// home 2
import icon_5 from '@/assets/images/icon/icon_06.svg';
import icon_6 from '@/assets/images/icon/icon_07.svg';
import icon_7 from '@/assets/images/icon/icon_08.svg';
// home 3
import icon_8 from '@/assets/images/icon/icon_32.svg';
import icon_9 from '@/assets/images/icon/icon_33.svg';
import icon_10 from '@/assets/images/icon/icon_34.svg';
import icon_11 from '@/assets/images/icon/icon_35.svg';
// home 4
import icon_12 from '@/assets/images/icon/icon_40.svg';
import icon_13 from '@/assets/images/icon/icon_41.svg';
import icon_14 from '@/assets/images/icon/icon_42.svg';
// home 5
import icon_15 from '@/assets/images/icon/icon_95.svg';
import icon_16 from '@/assets/images/icon/icon_95.svg';
import icon_17 from '@/assets/images/icon/icon_10.svg';
import icon_18 from '@/assets/images/icon/icon_11.svg';


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

  
  // home 1
  {
    id:1,
    icon:icon_5,
    title:'Strategic Services',
    desc: 'Providing leadership and guidance on long-term vision, market positioning, and growth strategies.',
    page:'home-2',
    link:'/strategic-services'
  },
  {
    id:2,
    icon:icon_5,
    title: 'Digital Transformation',
    desc: 'Integration of digital technologies to alter operations, enhance value delivery, and foster a culture of innovation.',
    page:'home-2',
    link:'/digital-transformation'
  },
  {
    id:3,
    icon:icon_5,
    title: 'Service Diversification',
    desc: 'Assisting agencies in launching new service lines like Data & Analytics, AI, SEO, and Affiliates.',
    page:'home-2',
    link:'/service-diversification'
  },
  {
    id:4,
    icon:icon_5,
    title: 'Operational Support',
    desc: 'Providing temporary staffing solutions to fill gaps until permanent hires are made, ensuring continuity of service.',
    page:'home-2',
    link:'/operational-support'
  },
  // home 2
  {
    id:5,
    icon:icon_5,
    title: 'Training & Development',
    desc: 'Training staff on digital tools, leadership, and creative thinking to enhance their skill sets.',
    page:'home-2',
    link:'/training-development'
  },
  {
    id:6,
    icon:icon_6,
    title: 'HR Services',
    desc: 'Streamlined hiring processes to meet digital innovation needs and smooth integration of new hires.',
    page:'home-2',
    link:'/hr-services'
  },
  {
    id:7,
    icon:icon_7,
    title: 'Engineering Services',
    desc: 'Creating and integrating custom tools specific to agency needs, such as analytics and client service delivery platforms.',
    page:'home-2',
    link:'/engineering-services'
  },
  // home 3
  {
    id:8,
    icon:icon_5,
    title: 'Creative Services',
    desc: 'Producing visually striking content for key campaigns to achieve significant performance impact.',
    page:'home-2',
    link:'/creative-services'
  },
  {
    id:9,
    icon:icon_5,
    title: 'Technical Support',
    desc: 'Providing ongoing support and iterative improvements post-launch to ensure product longevity and success.',
    page:'home-2',
    link:'/technical-support'
  },
]

export default service_data;