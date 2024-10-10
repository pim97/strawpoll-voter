import Scrappey from "scrappey-wrapper";

/**
 * Get your API key on Scrappey.com
 */
const scrappey = new Scrappey("API_KEY");

/**
 * Will go to the site and perform two actions
 * Clicking the text you want to vote on
 * And clicking the vote button
 */
async function run() {

    /**
     * You can fill in your own proxy if needed with the proxy option
     * 
     * await scrappey.createSession({
     *  proxy: 'http://username:password@ip:port'
     * })
     * 
     * Or leave it empty and it will automatically pick a proxy for you
     * This doesn't cost any extra balance
     */
    const createSession = await scrappey.createSession()

    const session = createSession.session

    console.log(`Found session ${session}`)

    /**
     * Using scrappey you can perform different actions on the site.
     * Looking for all the options, you can try out request builder here: https://app.scrappey.com/#/builder
     */
    const result = await scrappey.get({
        session: session,

        /**
         * Fill in the URL of the strawpoll here
         */
        url: 'https://strawpoll.com/polls/NPgxkzPqrn2',
        browserActions: [
            {
                "type": "click",

                /**
                 * Fill in the option you want to vote for
                 */
                "cssSelector": `//span[contains(text(),"Reactions")]`
            },

            /**
             * This is for clicking the vote button
             */
            {
                "type": "click",
                "cssSelector": "button[class='strawpoll-button-primary button text-sm custom-button px-8']",
                "wait": 5
            },
        ]
    })

    /**
     * Destroys the session afterwards, session stay open up to 4 minutes or when you
     * destory it yourself
     */
    await scrappey.destroySession(session)
}

run().then(() => { })
