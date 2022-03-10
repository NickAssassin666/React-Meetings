import MeetingList from "../components/meetings/MeetingList";
import { useEffect, useState } from "react";

const AllMeetings = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-todo-12e28-default-rtdb.firebaseio.com/meetings.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <MeetingList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetings;
