
import { firestore } from '../db';
import * as admin from 'firebase-admin';
export class BaseModel {
    private collectionName: string;
    protected colRef: admin.firestore.CollectionReference;
    constructor(collectionName: string) {
        this.collectionName = collectionName;
        this.colRef = firestore.collection(this.collectionName);
    }
    save(doc:object):Promise<any> {
        const docRef = this.colRef.doc();
        return docRef.set(doc);
    }
    update() {

    }
    delete() {

    }
}