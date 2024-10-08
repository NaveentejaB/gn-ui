import { SideNavItem } from "./defintion"

export const SideNavItems:SideNavItem[] = [
    {
        title :'Home',
        path : '/',
        icon_path:'',
        subMenuItems: [
            { title: 'All', path: '/projects',icon_path:'' },
            { title: 'Web Design', path: '/projects/web-design',icon_path:'' },
            { title: 'Graphic Design', path: '/projects/graphic-design',icon_path:'' },
          ],
    },
    {
        title :'Initiative',
        path : '/initiative',
        icon_path:'',
        subMenu : true,
        subMenuItems: [
            { title: 'Dashboard', path: '/initiative/dashboard',icon_path:'' },
            { title: 'Explore', path: '/initiative/explore',icon_path:'' },
          ],
    },
    {
        title :'Activites',
        path : '/activites',
        icon_path:'',
        
    },
    {
        title :'Community',
        path : '/community',
        icon_path:'',
    },
    {
        title :'Perks',
        path : '/perks',
        icon_path:'',
        subMenu : true,
        subMenuItems: [
            { title: 'Challenges', path: '/perks/challenges',icon_path:'' },
            { title: 'Rewards', path: '/perks/rewards',icon_path:'' },
          ],
    },
    {
        title :'Profile',
        path : '/profile',
        icon_path:'',
    }
]

type initTableType = {
    title : string,
    no_of_persons : number,
    max_no : number,
    location : string,
    date : string
}

export const iniTableData:initTableType[] = [
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
    
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        no_of_persons : 6,
        max_no : 10,
        location : "narsinghpur",
        date : "10-06-2027"
    },
]
export const iniUserData = [
    {
        name : 'Aparna',
        place : 'tirupati',
        age : 22,
        phone : '9346358919'
    },
    {
        name : 'Aparna',
        place : 'tirupati',
        age : 22,
        phone : '9346358919'
    },
    {
        name : 'Aparna',
        place : 'tirupati',
        age : 22,
        phone : '9346358919'
    },
    {
        name : 'Aparna',
        place : 'tirupati',
        age : 22,
        phone : '9346358919'
    },
    {
        name : 'Aparna',
        place : 'tirupati',
        age : 22,
        phone : '9346358919'
    },
]

export const NearByIniTableData = [
    {
        title : "Tree planting",
        max_no : 10,
        location : "narsinghpur",
        Organizer : "Naveen Teja Beerakuppam",
        duration : "6 hours",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        max_no : 10,
        location : "narsinghpur",
        Organizer : "Naveen ",
        duration : "6 hours",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        max_no : 10,
        location : "narsinghpur",
        Organizer : "Naveen ",
        duration : "6 hours",
        date : "10-06-2027"
    },
    {
        title : "Tree planting",
        max_no : 10,
        location : "narsinghpur",
        Organizer : "Naveen ",
        duration : "6 hours",
        date : "10-06-2027"
    },

]
