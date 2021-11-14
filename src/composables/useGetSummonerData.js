import {ref} from 'vue'

export default async function getSummonerData(summonerName = '', apiKey = '') {
    const summonerData = ref()
    const data = await fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName.value}?api_key=${apiKey.value}`) ?? null
    summonerData.value = await data.json() ?? null
    return summonerData
}

