import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);
  }, [collection]);
};
