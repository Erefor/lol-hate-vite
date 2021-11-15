import {child, get, ref as refFirebase} from 'firebase/database'
import {database} from '../Boot/Firebase'

export default async function useGetApiKey() {
    return (await get(await child(refFirebase(database), '/apiKey'))).val()
}

