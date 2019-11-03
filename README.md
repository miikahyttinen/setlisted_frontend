# Setlisted

Setlisted is a tool to view and save setlists. Front-end runs React in a browser and is connected to back-end wirtten with Node.js, which serves data from Spotify API and from App's it's own database. This is an excericse project for Full Stack Programming course at the University of Helsinki (CS Department).

**Working hours:** https://github.com/miikahyttinen/setlisted_frontend/blob/master/hours.md

**Back end repository:** https://github.com/miikahyttinen/setlisted_backend

## The problem

Setlisted solves a problem of writing and storing setlists for a live music performance. It is very common to write setlists by hand (manually by hand on a computer) and there is no convenient way to store or share setlists. Making a setlist is a time-consuming task. It can take an hour and one can easily make mistakes, for example write a wrong key, forget to add the new song you planned to play or get stuck in patterns like repeatedly playing the same songs in every performance.

## Minimum viable product

The MVP should have following features:

1. creating a new setlist
2. viewing all setlists of an user
3. sharing setlists to everyone (in some way) as an user
4. registration for new users
5. login as an user

## Additional features

- Importing playlists from the Spotify API (decided to do this)
- Automated setlist creation (someday)
- Statistics of played songs (someday)
- Serving data of played songs between users (someday)
- Commenting (someday)

## Tests

I'm planning to do E2E tests using Cypress library.
