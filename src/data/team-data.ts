import { ITeam } from "@/types/team-d-t";
import bemoi_george from "@/assets/images/team/bemoi_george.jpg";
import pam_costa from "@/assets/images/team/pam_costa.jpg";
import josh_lobo from "@/assets/images/team/josh_lobo.jpg";
import the_an from "@/assets/images/team/the_an.jpg";
// team 2
import team_5 from "@/assets/images/media/img_22.jpg";
import team_6 from "@/assets/images/media/img_23.jpg";
import team_7 from "@/assets/images/media/img_24.jpg";
import team_8 from "@/assets/images/media/img_25.jpg";
// team 3
import team_9 from "@/assets/images/media/img_27.jpg";
import team_10 from "@/assets/images/media/img_28.jpg";
import team_11 from "@/assets/images/media/img_29.jpg";
import team_12 from "@/assets/images/media/img_30.jpg";
// team page
import team_13 from "@/assets/images/media/img_38.jpg";
import team_14 from "@/assets/images/media/img_39.jpg";
import team_15 from "@/assets/images/media/img_40.jpg";
import team_16 from "@/assets/images/media/img_41.jpg";

const team_data: ITeam[] = [
 
  {
    id: 9,
    img: bemoi_george,
    name: "Bemoi George",
    designation: "Managing Director",
    page: "team-three",    
  },
  {
    id: 10,
    img: pam_costa,
    name: "Pam Costa",
    designation: "HR Director",
    page: "team-three",
  },
  {
    id: 11,
    img: josh_lobo,
    name: "Josh Lobo",
    designation: "Creative Director",
    page: "team-three",
  },
  {
    id: 12,
    img: the_an,
    name: "The An",
    designation: "Engineering Director",
    page: "team-three",
  },
  // team page
  {
    id: 13,
    img: team_13,
    name: "Starfire",
    designation: "Manager",
    page: "team",
  },
  {
    id: 14,
    img: team_14,
    name: "Thunderstrike",
    designation: "Marketing Expert",
    page: "team",
  },
  {
    id: 15,
    img: team_15,
    name: "Silverstone",
    designation: "Analysis",
    page: "team",
  },
  {
    id: 16,
    img: team_16,
    name: "Ravenshadow",
    designation: "Senior Officer",
    page: "team",
  },
];

export default team_data;
