import {ref} from 'vue'

export default async function getSummonerData(summonerName = '', apiKey = '') {
    const summonerData = ref()
    const data = await fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`) ?? null
    summonerData.value = await data.json() ?? null
    console.log(summonerData.value)
    return summonerData
}

