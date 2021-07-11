# Setlisted

Setlisted is a tool to view and save setlists. Front end runs React in a browser and is connected to REST API wirtten with Node.js. Back end uses MONGO database to store data. App is also connected to Spotify API where user can (for now, user needs to find the id of a playlist from Spotify: go to playlists -> double click the palylist -> share -> copy spotify URI -> paste the id part to apps field). I've used mainly styled-components to style the app from sctrach to learn as much html ans css as possible. This is an excericse project for Full Stack Programming course at the University of Helsinki (CS Department).

**Working hours:** https://github.com/miikahyttinen/setlisted_frontend/blob/master/hours.md

**Back end repository:** https://github.com/miikahyttinen/setlisted_backend

## The problem

Setlisted solves a problem of writing and storing setlists for a live (cover) music performance. It is very common to write setlists by hand and there is no convenient way to store or share setlists. Making a setlist can be a time-consuming task; tt can take an hour and it's common to make mistakes.

I've been arranging demo sessions with my "clients" (musician colleagues) so they can comment the current version. I've got great feedback from them. They have pointed some problems that I couldn't see myself.

## Minimum viable product

The MVP should have following features:

1. creating and managing setlists and songs (done)
2. viewing all setlists of an user (done)
3. downloading a setlist as pdf or txt (todo)
4. registration for new users (Done in backend. Login page needed in front end)
5. login as an user (Done in backend. Login page needed in front end)

## Additional features

- Importing playlists from the Spotify API (done)
- Automated setlist creation (someday)
- Statistics of played songs (someday)
- Serving data of played songs between users (someday)
- Different users, commenting setlists (someday)

## Demo version

Version 0.01 runs in Heroku. You can try it here: https://setlisted-demo.herokuapp.com/

## Tests

I'm planning to do E2E tests using Cypress library. (todo)
