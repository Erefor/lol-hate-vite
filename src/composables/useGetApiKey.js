import {child, get, ref as refFirebase} from 'firebase/database'
import {database} from '../Boot/Firebase'

export default async function useGetApiKey() {
    const key = await get(await child(refFirebase(database), '/apiKey'))
    return key.val()
}

