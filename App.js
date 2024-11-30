import React, { useState } from "react";
import AddTripForm from "./components/AddTripForm";
import MapComponent from "./components/MapComponent";
import SignIn from "./components/SignIn";

function App() {
    const [user, setUser] = useState(null);

    return (
        <div>
            <h1>GOING Far with Friends</h1>
            <SignIn setUser={setUser} />
            <MapComponent />
            {user && <AddTripForm user={user} />}
            {!user && <p>Please sign in to add trips!</p>}
        </div>
    );
}

export default App;
