import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function MemoList() {

  useFirestoreConnect([{ collection: 'memos' }]);

    const memos = useSelector((state) => state.firestore.ordered.memos);

    console.log(memos)
    if (isLoaded(memos)) {
      return (
        <React.Fragment>
          {memos.map((memo) => {
              return ( 
                <p>{memo.body}</p>
                );
              })}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h3>Loading...</h3>
        </React.Fragment>
      );
    }
}