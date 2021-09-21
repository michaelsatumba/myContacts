import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      email={contact.email}
      tel={contact.phone}
      img={contact.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbanner2.kisspng.com%2F20180330%2Fqgw%2Fkisspng-james-p-sullivan-mike-wazowski-monsters-inc-pix-monster-inc-5abe0131895172.8406539615224015855625.jpg&f=1&nofb=1" />
      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
