export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

export interface Team {
  id: number
  name: string
  description: string
  members: TeamMember[]
}

export const teams: Team[] = [
  {
    id: 1,
    name: "Management Team",
    description: "Responsible for logistics, planning, and operations of all CRESA activities and events.",
    members: [
      {
        id: 1,
        name: "Alex Johnson",
        role: "Senior Head",
        image: "/person1.jpg",
      },
      {
        id: 2,
        name: "Sarah Williams",
        role: "Deputy Head",
        image: "/person2.jpg",
      },
      {
        id: 3,
        name: "Michael Brown",
        role: "Logistics Coordinator",
        image: "/person3.jpg",
      },
      {
        id: 4,
        name: "Emily Davis",
        role: "Planning Officer",
        image: "/person4.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Design Team",
    description: "Handles all aspects of branding, graphics, and UI/UX design for CRESA's digital and print materials.",
    members: [
      {
        id: 5,
        name: "David Wilson",
        role: "Senior Head",
        image: "/person5.jpg",
      },
      {
        id: 6,
        name: "Jessica Lee",
        role: "UI/UX Designer",
        image: "/person6.jpeg",
      },
      {
        id: 7,
        name: "Ryan Martinez",
        role: "Graphic Designer",
        image: "/person7.jpg",
      },
      {
        id: 8,
        name: "Sophia Chen",
        role: "Brand Strategist",
        image: "/person8.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Cultural Team",
    description: "Organizes and manages all social and cultural events to foster community among students.",
    members: [
      {
        id: 9,
        name: "Daniel Kim",
        role: "Senior Head",
        image: "/person9.jpeg",
      },
      {
        id: 10,
        name: "Olivia Garcia",
        role: "Event Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 11,
        name: "Ethan Patel",
        role: "Cultural Affairs Officer",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: 4,
    name: "Social Media Team",
    description: "Manages CRESA's online presence and promotions across various social media platforms.",
    members: [
      {
        id: 12,
        name: "Ava Robinson",
        role: "Senior Head",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 13,
        name: "Noah Thompson",
        role: "Content Creator",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 14,
        name: "Isabella Wright",
        role: "Social Media Manager",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 15,
        name: "Lucas Scott",
        role: "Digital Marketing Specialist",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: 5,
    name: "Finance Team",
    description: "Handles budgeting, sponsorships, and financial management for all CRESA activities.",
    members: [
      {
        id: 16,
        name: "Mia Anderson",
        role: "Senior Head",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 17,
        name: "James Taylor",
        role: "Treasurer",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 18,
        name: "Charlotte Nelson",
        role: "Sponsorship Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: 6,
    name: "Sports Team",
    description: "Organizes sports events and competitions to promote physical fitness and team building.",
    members: [
      {
        id: 19,
        name: "Benjamin Hill",
        role: "Senior Head",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 20,
        name: "Amelia Baker",
        role: "Sports Coordinator",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 21,
        name: "Henry Adams",
        role: "Event Manager",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 22,
        name: "Lily Campbell",
        role: "Team Building Specialist",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: 7,
    name: "Core Team",
    description: "Oversees decision-making and strategy for the entire CRESA organization.",
    members: [
      {
        id: 23,
        name: "William Parker",
        role: "President",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 24,
        name: "Sofia Mitchell",
        role: "Vice President",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 25,
        name: "Jacob Turner",
        role: "Secretary",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 26,
        name: "Grace Phillips",
        role: "Strategy Officer",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: 27,
        name: "Leo Carter",
        role: "Faculty Liaison",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
]

