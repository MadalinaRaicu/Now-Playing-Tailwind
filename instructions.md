# Developer Task

Below is a list of instructions we'd like you to complete.

Please upload your code to a git repo we can access and send us the link when you're done!

Be sure to write comments.

We're most interested to see problem solving and your approach.

Keep it simple, keep it DRY, but don't over complicate or over engineer.

We've added some files and styles to give you a head start - but feel free to blaze your own trail if you prefer.

Feel free to add libraries if you deem it necessary.

Your time is precious. Please don't spend more than 1-2 hours on this. You don't need to complete all the steps - rather detail how you would approach those you didn't get to.

This task doesn't specify any particular framework or libraries you should use. We use React with Typescript but feel free to use whatever you like including plain JavaScript.

## Instructions:

1. You'll find a index.html file in the public folder. We'd like you to render the HTML using the framework of your choice. Break up the HTML into multiple components. Don't go too far here - 2 or 3 is fine as there is no reusability requirement. Rather think about how you'd like it broken up if you were reviewing.

2. Retrieve the data from the provided json files (in `./public`). We've added stub api code in `./api`.

3. Order the listed movies by popularity (most popular first - `popularity` property).

4. Show the movie poster image (use the `poster_path` property - eg: `https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg`).

5. List out the genres that are present the movie data set.

6. Using the genre list added above, add a multiple genres filter using checkboxes. The user should have the ability to toggle movies depending on all of its assigned genres. For example if 'Action' and 'Drama' genres are selected, listed movies must have both 'Action' and 'Drama' genres.

7. Implement genres names in movie card (same style as popularity/rating), comma separate and include `and` for last item if 2 or more - eg: `Genres: genreA, genreB and genreC` (an Oxford comma is totally allowed 😁).

8. Add a _minimum_ rating (`vote_average` property) filter with a range between `0` and `10`, increments of `0.5` and an initial value of `3`. This must work with the genre filter.

9. Add a filter reset button.

## Candidate notes

> _Please add details of next steps or any notes for the reviewer here._
