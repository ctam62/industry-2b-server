<img src="https://github.com/drouillarda/industry-2b-client/blob/main/public/favicon.svg" alt="popcorn icon" width="150px">

# YouWatch API
YouWatch API is the backend server for YouWatch's [frontend application](https://github.com/drouillarda/industry-2b-client). This was part of a hackathon challenge proposed by Roku that involved collaboration with a UX design team with 3 individuals and a Software Engineer team of 4 individuals.

## Hackathon Challenge
How might we entice viewers to subscribe to a new streaming platform?

## Solution Overview
YouWatch is a user-friendly web application that empowers users to effortlessly discover and explore their favourite movies or TV shows. The platform intelligently recommends the optimal streaming services aligned with their preferences, simplifying the sign-up process for a seamless and personalized viewing experience.

## Interpretation & Design Decisions
Since we didn’t have a predefined movie collection, we opted not to include specific genre searches. This decision simplifies the user experience and aligns with our approach of generating data internally.
Recognizing a consumers’ desire for efficiency, we added a button on the Home page. This feature allows users to skip the traditional search process and promptly access their personalized recommendations.

## Next Steps
- **Effortless Streaming Service Access:**
Upon adding titles to their list users can visit the Recommendations page. This approach minimizes steps, offering a hassle-free experience and enhancing overall user satisfaction.

- **Video Previews on Hover:**
To enhance the user experience, we've implemented a video overlay feature. When users hover over each card a video preview appears, providing a quick and engaging glimpse into the content. This interaction aims to offer users a more dynamic and informed selection process. Currently we only have one given video snippet for visual demonstration. In a live environment, streaming platforms could use this feature to promote short-form snippets of their content.

## Backend Tech Stack
- ExpressJS 
- Knex
- MySQL2

## Setup
Install nodeJS dependencies
```
npm i
```

Create and select the database in a separate mysql terminal
```
CREATE DATABASE youwatch;
USE youwatch;
```

Create database tables with knex migrations
```
npm run migrate
```

Seed the tables with dummy data
```
npm run seed
```

Run Express App in development mode
```
npm run dev
```

Or to Start Express App
```
npm start
```


