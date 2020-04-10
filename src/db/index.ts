import * as admin  from 'firebase-admin';
   
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`
});

const firestore : admin.firestore.Firestore = admin.firestore();

 export {firestore};