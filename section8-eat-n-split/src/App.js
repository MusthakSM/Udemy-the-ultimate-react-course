import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
import initialFriends from "./data/initialFriends";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const lastFriendId =
    friendsList.length > 0 ? friendsList[friendsList.length - 1].id : 0;

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(newFriend) {
    setFriendsList((friendsList) => [...friendsList, newFriend]);
    setShowAddFriend((show) => !show);
  }

  function handleOnClickSelect(selectedFr) {
    setSelectedFriend((cur) => (cur?.id === selectedFr.id ? null : selectedFr));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setSelectedFriend(null);

    setFriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          onClickSelect={handleOnClickSelect}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && (
          <FormAddFriend onAddFriend={handleAddFriend} lastId={lastFriendId} />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add frined"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
