export interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  image: string
  isPast: boolean
}

export const events: Event[] = [
  {
    id: 1,
    title: "Tech Fest 2024",
    description:
      "Annual technology festival showcasing student projects, competitions, and workshops. Join us for a day of innovation and learning.",
    date: "April 15-17, 2024",
    location: "University Main Campus",
    image: "https://media.istockphoto.com/id/1390307475/vector/vector-modern-poster-tech-fest-unique-silver-alphabet-letters-and-numbers-set.jpg?s=612x612&w=0&k=20&c=dInBWq3UABY834WyxCDnhvW5-4mU25dXVB-hr8GrJAs=",
    isPast: false,
  },
  {
    id: 2,
    title: "Sports Meet",
    description:
      "Annual inter-department sports competition featuring various sports like cricket, football, basketball, and athletics.",
    date: "March 5-7, 2024",
    location: "University Sports Complex",
    image: "https://www.shutterstock.com/image-vector/sport-background-national-sports-day-260nw-2340546461.jpg",
    isPast: true,
  },
  {
    id: 3,
    title: "Cultural Night",
    description: "A celebration of music, dance, and drama showcasing the diverse talents of our engineering students.",
    date: "February 20, 2024",
    location: "University Auditorium",
    image: "https://img1.wsimg.com/isteam/stock/ub69pPpJ27t6nR13E/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true",
    isPast: true,
  },
  {
    id: 4,
    title: "Industry Connect Workshop",
    description:
      "A series of workshops connecting students with industry professionals to learn about the latest technologies and career opportunities.",
    date: "May 10, 2024",
    location: "Engineering Block, Room 301",
    image: "https://img.freepik.com/free-vector/flat-design-business-workshop-sale-banner_23-2149442947.jpg?t=st=1741102737~exp=1741106337~hmac=5291222bf9f348f58f0d886a869c746c6fb683ee8b9d115adb561f1d327cf3f6",
    isPast: false,
  },
  {
    id: 5,
    title: "Hackathon 2024",
    description: "24-hour coding competition where teams develop innovative solutions to real-world problems.",
    date: "June 5-6, 2024",
    location: "Computer Science Building",
    image: "https://img.freepik.com/premium-vector/poster-programming-hackathon-vector-flat-illustration-isolated-white-background_181313-3665.jpg",
    isPast: false,
  },
  {
    id: 6,
    title: "Alumni Meetup",
    description: "Annual gathering of CRESA alumni to network and share experiences with current students.",
    date: "January 15, 2024",
    location: "University Conference Hall",
    image: "https://care.ac.in/management/wp-content/uploads/sites/2/2018/02/Poster.jpg",
    isPast: true,
  },
]

