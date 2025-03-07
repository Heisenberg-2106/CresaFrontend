export interface Achievement {
  id: number
  title: string
  description: string
  year: string
  image: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "National Robotics Championship",
    description:
      "First place in the National Robotics Championship, showcasing our innovative design and programming skills.",
    year: "2023",
    image: "https://lh5.googleusercontent.com/proxy/U70SzlprBgFWFcq6CTfuUxpMyEZLZ0wFQW0IR6OJwrQMt1rMGYVyLcHsJVm14VapPlUIz5oXl2HMWCpN1rXxtumJK_ohSu_zb9AhJX5dWj_T3n6H0uW3fs4KPGo4W61cfCEnEyW_8XXyKpwuAN1rbuS5L2MH8ydw40-9OcnQ1qYgnQB_kImGe4CMY9_UnoRG",
  },
  {
    id: 2,
    title: "Best Student Association Award",
    description:
      "Recognized as the Best Student Association by the University for outstanding contributions to student life and academic excellence.",
    year: "2022",
    image: "https://blogs.umsl.edu/news/files/2022/09/ISA.jpg",
  },
  {
    id: 3,
    title: "Community Service Excellence",
    description:
      "Awarded for organizing technology workshops for underprivileged schools, impacting over 500 students.",
    year: "2023",
    image: "https://www.workitdaily.com/media-library/employee-takes-part-in-his-company-s-community-service-volunteer-day.jpg?id=22510611&width=980",
  },
  {
    id: 4,
    title: "Hackathon Champions",
    description: "Won the Regional Hackathon with an innovative solution for sustainable urban transportation.",
    year: "2022",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Foblwxr6bpaq9ah3cq7zi.jpeg",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Onkar Chand",
    role: "President",
    quote:
      "CRESA has consistently demonstrated excellence in both technical and leadership domains. The students' dedication to fostering a collaborative learning environment is truly commendable.",
    image: "https://media.istockphoto.com/id/612752180/photo/handsome-young-man.jpg?s=612x612&w=0&k=20&c=4j4ai4Yub5NUF9jjVgMWXXw-XRYsHyZ5yb4adgPOFMw=",
  },
  {
    id: 2,
    name: "Mr. Aarush Borkar",
    role: "CRESA Alumni, Software Engineer at Google",
    quote:
      "My involvement with CRESA was instrumental in shaping my career. The technical skills and leadership experience I gained have been invaluable in my professional journey.",
    image: "https://www.shutterstock.com/image-photo/side-view-young-smiling-happy-260nw-2348714225.jpg",
  },
  {
    id: 3,
    name: "Mr. Atharva Desai",
    role: "Industry Partner, CTO at TechInnovate",
    quote:
      "We've been consistently impressed by the caliber of students from CRESA. Their technical knowledge, problem-solving abilities, and teamwork make them stand out in the industry.",
    image: "https://thumbs.dreamstime.com/b/african-american-business-man-folded-arms-over-white-backgr-background-black-people-57748687.jpg",
  },
]

