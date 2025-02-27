import Button from "./Button";

export default function Friend({ friend, onClickSelect, selectedFriend }) {
  const isSelectedFriend = friend.id === selectedFriend?.id;

  return (
    <li className={isSelectedFriend ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      ) : friend.balance === 0 ? (
        <p>You and {friend.name} are even</p>
      ) : (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      <Button onClick={() => onClickSelect(friend)}>
        {isSelectedFriend ? "Close" : "Select"}
      </Button>
    </li>
  );
}
