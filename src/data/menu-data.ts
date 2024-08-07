import { IMenu } from "@/types/menu-d-t";


const menu_data:IMenu[] = [
  {
    id:1,
    link:'/about-us',
    title:'About'
  },
  {
    id:2,
    link:'/services',
    title:'Services',
    dropdown:true,
    dropdown_menus:[
      { link: '/services/strategic-services', title: 'Strategic Services' },
      { link: '/services/digital-services', title: 'Digital Marketing' },
      { link: '/services/digital-transformation', title: 'Digital Transformation' },
      { link: '/services/service-diversification', title: 'Service Diversification' },
      { link: '/services/operational-support', title: 'Operational Support' },
      { link: '/services/training-development', title: 'Training & Development' },
      { link: '/services/hr-services', title: 'HR Services' },
      { link: '/services/engineering-services', title: 'Engineering Services' },
      { link: '/services/creative-services', title: 'Creative Services' },
      { link: '/services/technical-support', title: 'Technical Support' },
    ]
  },
  {
    id:3,
    link:'/resources',
    title:'Resources',
    /* dropdown:true,
    dropdown_menus:[
      {link:'/blog',title:'Blog List'},
      {link:'/blog-grid',title:'Blog Grid'},
      {link:'/blog-details',title:'Blog Details'},
    ] */
  },
  {
    id:4,
    link:'/contact',
    title:'Contact',
    /* dropdown:true,
    dropdown_menus:[
      {link:'/blog',title:'Blog List'},
      {link:'/blog-grid',title:'Blog Grid'},
      {link:'/blog-details',title:'Blog Details'},
    ] */
  },
  

]

/* const menu_data:IMenu[] = [
  {
    id:1,
    link:'/',
    title:'Home',
    dropdown:true,
    dropdown_menus:[
      {link:'/',title:'Finance'},
      {link:'/home-2',title:'Business Consultancy'},
      {link:'/home-3',title:'Banking'},
      {link:'/home-4',title:'Payment Solution'},
      {link:'/home-5',title:'Digital Agency'},
      {link:'/home-6',title:'Marketing'},
      {link:'/home-7',title:'Insurance'},
    ]
  },
  {
    id:2,
    link:'/about-us',
    title:'Pages',
    mega_menu:true,
    mega_menus:[
      {
        id:1,
        menus:[
          {link:'/service-v1',title:'Service v-1'},
          {link:'/service-v2',title:'Service v-2'},
          {link:'/service-details',title:'Service Details'},
          {link:'/team-v1',title:'Team V-1'},
          {link:'/team-v2',title:'Team V-2'},
          {link:'/team-details',title:'Team Details'}
        ]
      },
      {
        id:2,
        menus:[
          {link:'/about-us',title:'About Us V-1'},
          {link:'/about-us-2',title:'About Us V-2'},
          {link:'/testimonial',title:'Testimonial'},
          {link:'/pricing',title:'Pricing'},
          {link:'/faq',title:'FAQ’s'},
          {link:'/404',title:'404'},
        ]
      },
      {
        id:3,
        menus:[
          {link:'/project-v1',title:'Project V-1'},
          {link:'/project-v2',title:'Project V-2'},
          {link:'/project-v3',title:'Project V-3'},
          {link:'/project-details-v1',title:'Project Details V-1'},
          {link:'/project-details-v2',title:'Project Details V-2'},
        ]
      }
    ]
  },
  {
    id:3,
    link:'/shop',
    title:'Shop',
    dropdown:true,
    dropdown_menus:[
      {link:'/shop',title:'Shop'},
      {link:'/shop-details',title:'Shop Details'},
      {link:'/cart',title:'Cart'},
      {link:'/wishlist',title:'Wishlist'},
      {link:'/checkout',title:'Checkout'},
    ]
  },
  {
    id:4,
    link:'/blog',
    title:'Blog',
    dropdown:true,
    dropdown_menus:[
      {link:'/blog',title:'Blog List'},
      {link:'/blog-grid',title:'Blog Grid'},
      {link:'/blog-details',title:'Blog Details'},
    ]
  },
  {
    id:5,
    link:'/contact',
    title:'Contact'
  }
] */

export default menu_data;