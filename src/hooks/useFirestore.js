import { useReducer, useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer();
};
