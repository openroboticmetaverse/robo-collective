
import { useState } from 'react';
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Search, 
  Filter 
} from "lucide-react";

const upcomingMeetups = [
  {
    id: 1,
    title: "Robot Vision Systems Workshop",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Innovation Hub, 123 Tech Street",
    description: "Learn about the latest advancements in computer vision for robotics with hands-on demonstrations.",
    capacity: 30,
    attendees: 18,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Collaborative Robotics Round Table",
    date: "July 2, 2023",
    time: "5:30 PM - 7:30 PM",
    location: "Digital Workspace, 456 Innovation Avenue",
    description: "Join our discussion on how collaborative robots can work alongside humans in various industries.",
    capacity: 20,
    attendees: 15,
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Robotics for Environmental Monitoring",
    date: "July 18, 2023",
    time: "6:30 PM - 8:30 PM",
    location: "Green Tech Center, 789 Sustainability Road",
    description: "Explore how robots are being deployed to monitor environmental conditions and collect data.",
    capacity: 25,
    attendees: 10,
    image: "https://images.unsplash.com/photo-1581092335637-5edd3c236bbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const MeetupCard = ({ meetup }) => (
  <Card className="overflow-hidden flex flex-col h-full">
    <div className="h-48 relative">
      <img 
        src={meetup.image} 
        alt={meetup.title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2">{meetup.title}</h3>
      <div className="flex items-center text-muted-foreground mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{meetup.date}</span>
      </div>
      <div className="flex items-center text-muted-foreground mb-2">
        <Clock className="w-4 h-4 mr-2" />
        <span>{meetup.time}</span>
      </div>
      <div className="flex items-center text-muted-foreground mb-2">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{meetup.location}</span>
      </div>
      <p className="text-muted-foreground mb-4 flex-grow">{meetup.description}</p>
      <div className="flex items-center text-muted-foreground mt-auto">
        <Users className="w-4 h-4 mr-2" />
        <span>{meetup.attendees} / {meetup.capacity} attendees</span>
      </div>
      <Button className="w-full mt-4">Register</Button>
    </div>
  </Card>
);

const Meetups = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMeetups = upcomingMeetups.filter(meetup => 
    meetup.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meetup.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <Hero
        title="Robotics Meetups"
        subtitle="Join our community events to learn, share, and collaborate."
        imageSrc="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
        minHeight="min-h-[50vh]"
      />

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Upcoming Meetups</h2>
          
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search meetups..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>

          {filteredMeetups.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMeetups.map(meetup => (
                <MeetupCard key={meetup.id} meetup={meetup} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No meetups match your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Host Your Own Meetup</h2>
            <p className="text-muted-foreground mb-8">
              Have an idea for a robotics event? We welcome community-led initiatives!
            </p>
            <Button size="lg">Propose a Meetup</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meetups;
