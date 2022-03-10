import MeetingItem from "./MeetingItem";
import classes from "./MeetingList.module.css";

const MeetingList = (props) => {
  console.log(props.meetups);
  return (
    <div>
      <ul className={classes.list}>
          {props.meetups.map((meetup) => {
            return (
              <MeetingItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default MeetingList;
