import React, {useCallback, useState} from 'react';
import useGettingPictures from "./hooks/useGettingPictures";
import PictureElement from "./Components/PictureElement/PictureElement";
import styles from './App.module.css';

function App() {
  const [query, setQuery] = useState('');
  const pictures = useGettingPictures(query);
  return (
      <div className={styles.main}>
        <input value={query} onChange={useCallback((event: React.ChangeEvent<HTMLInputElement>) => {setQuery(event.target.value)}, [])}/>
        <div className={styles.list}>
          {pictures.map((picture) => {
            return <PictureElement key={picture.id} picture={picture}/>
          })}
        </div>
      </div>
  );
}

export default App;
