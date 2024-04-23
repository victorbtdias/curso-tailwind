import emails from "../../emails.json";
import EmailListItem from "./EmailListItem";

const EmailList = ({ setOpenEmail }) => {
  return (
    <div className="relative overflow-y-scroll h-[calc(100vh_-_9rem)] grow">
      {emails.map((email) => (
        <EmailListItem
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
      ))}
    </div>
  );
};

export default EmailList;
