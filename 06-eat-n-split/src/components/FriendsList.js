import Friend from "./Friend";

export default function FriendsList({
  friendsList,
  onClickSelect,
  selectedFriend,
}) {
  const friends = friendsList;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onClickSelect={onClickSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
