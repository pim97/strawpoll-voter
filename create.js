import Scrappey from "scrappey-wrapper";

/**
 * Get your API key on Scrappey.com
 */
const scrappey = new Scrappey("API_KEY");

/**
 * This will only send the GET request, get the CSRF and then send the POST request
 * All captcha's are solved automatically including Incapsula anti-bot and turnstile using Scrappey.
 */
async function run() {

    const createSession = await scrappey.createSession({
        // "proxy": "http://username:password@ip:port"
        proxyCountry: "UnitedStates",
    })

    const session = createSession.session

    console.log(`Found session ${session}`)

    await scrappey.get({
        session: session,
        url: 'https://strawpoll.com/polls/NPgxkzPqrn2',
        browserActions: [
            {
                "type": "click",
                "cssSelector": `//span[contains(text(),"Reactions")]`
            },
            {
                "type": "click",
                "cssSelector": "//body/div[1]/div[1]/div[2]/div[1]/form[1]/div[9]/div[2]/div[1]/div[1]/button[1]",
                "wait": 5
            },
        ]
    })

    await scrappey.destroySession(session)
}

run().then(() => { })