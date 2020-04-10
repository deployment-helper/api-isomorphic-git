import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`
});

export default admin.firestore();