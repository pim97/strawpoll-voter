# Strawpoll Voter

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

StrawPoll.com is an online platform that allows users to create and share simple, quick polls to gather opinions and feedback from a wide audience. It's a user-friendly tool that enables anyone to create a poll on various topics, such as preferences, decisions, or opinions. Users can customize the poll options, set expiration dates, and share the generated poll link through social media, email, or other channels. Participants can then vote on the provided options, and StrawPoll.com presents the results in real-time, often in the form of a percentage-based breakdown. This platform is commonly used for making group decisions, settling debates, and gauging public sentiment on a variety of subjects.

Dont know how to program or don't want to? Let [Toplistbot](https://toplistbot.com/toplist/Strawpoll.com?ref=derk) handle it for you.

## Installation

1. Clone the repository: `git clone https://github.com/pim97/strawpoll-voter`
2. Install the dependencies: `npm install`

## Usage

1. Replace the following details with your own details in the script file (`vote.js`):
   - API_KEY_HERE: Your Scrappey API key found at https://app.scrappey.com/#/ to solve Cloudflare
   - Fill in the URL you want to vote for: Example https://strawpoll.com/polls/NPgxkzPqrn2
   - Fill in the option you want to vote for: `//span[contains(text(),"Reactions")]`. 'Reactions' to vote for the span text containing Reactions.
2. Run the script: `node vote.js`

## Contributing

Contributions are welcome! Please follow these guidelines when contributing to the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

- Author: Pim97
- GitHub: [Your GitHub Profile](https://github.com/pim97/)

## Legal and Ethical Considerations

Remember to adhere to legal and ethical guidelines when scraping websites. Always respect the website's terms of service and scraping policies. Ensure your use of the scraped data complies with applicable laws and regulations, especially regarding data privacy and intellectual property rights. 🚫⚖️

*Disclaimer: This web scraping guide is intended solely for educational and informational purposes. Please use web scraping responsibly and in accordance with the terms and conditions of the target website.* 📚🔍
