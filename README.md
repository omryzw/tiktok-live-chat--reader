# TikTok Live Chat Reader

This project allows you to read TikTok live chat messages in real-time using the TikTok Live API. It uses the `tiktok-live-connector` package to connect to TikTok live streams and the `say` package to read messages aloud.

## Features
- Connects to TikTok live streams
- Reads chat messages in real-time
- Uses text-to-speech to read messages aloud

## Requirements
- Node.js (v14 or higher recommended)
- macOS, Windows, or Linux

## Installation

1. Clone this repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the application:
   ```sh
   npm start
   ```
2. Follow the prompts or edit `index.mjs` to specify the TikTok username you want to connect to.

## Configuration
- Edit `index.mjs` to change the TikTok username or customize how messages are handled.

## Dependencies
- [tiktok-live-connector](https://www.npmjs.com/package/tiktok-live-connector)
- [say](https://www.npmjs.com/package/say)

## License
ISC

## Author
Omri Marebera
