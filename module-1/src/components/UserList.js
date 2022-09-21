import React, {useEffect, useState} from "react";
import User from "./User";
import getUsersData from "../services/getUsersData";
import {Router} from "react-router-dom";

function UserList() {

  const [userTable, setUserTable] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    let getFetch = async () => {
      let resultTable = await getUsersData();
      setUserTable(resultTable);
      setIsLoading(false);
    }
    getFetch();

  }, [])

  if (isLoading) {
    return <div className="loading-message">Page is loading...</div>
  }
  return (
    <div className="user-list">
      <Router>

        {/*email to może nie najlepszy key, ale api zwracało puste id więc email
      chyba styknie, skoro jednoznacznie identyfikuje użytkownika */}
        {userTable.map((user) => <User key={user.email} user={user}/>)}

      </Router>

    </div>
  )
}

export default UserList;