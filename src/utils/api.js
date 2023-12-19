const API_URL ='https://youtube-music-api3.p.rapidapi.com';

async function callYoutubeMusicAPI(endpoint, options={}){
    const headers = {
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com',
        'X-RapidAPI-Key': '5a810a806dmsh1642f612e2165b7p196084jsn8ceb42169a57',
        ...options.headers,
    }
    const response = await fetch(`${API_URL}/${endpoint}`,{
        method: options.method || 'GET',
        headers,
        body:JSON.stringify(options.body)
    })
    if(!response.ok){
        throw new Error(`HTTP Eror Status = ${response.status}`)
    }
    return response.json()
}
export default callYoutubeMusicAPI;