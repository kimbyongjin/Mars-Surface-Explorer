// module.exports = 'DEMO_KEY';

/*
IMPORTANT: To run this application, you MUST enable API authentication.
To do so, closely follow these ordered instructions:

The file to safely store you authentication credentials is located at
  ```server/EDIT-THIS-FILE-authentication.js```. In order to access the
  [Mars Rover Photos API](https://data.nasa.gov/Space-Science/Mars-Rover-Photos-API/929k-jizu)
  you will have to modify this authentication file.

To begin, rename the file ```EDIT-THIS-FILE-authentication.js``` to simply ```authentication.js```.
This step satisfies two important factors in the secure operations of this application.

First, and most importantly, the file name ```authentication.js``` is already included in this
  repo's ```.gitignore``` file. So, changing the file name BEFORE updating the API key will help
  prevent credential vulnerabilities.

Second, the application expects to receive an API authentication key string from this file in
  order to validate every request to the NASA API. So, if you have not properly modified the
  filename, webpack will throw an error during build.

At this point, it is also important to note that even while following these instructions carefully,
  you must ensure that you are taking great care to protect your sensitive credentials. If you
  would like to read more about how to properly ignore your files from GitHub, check out
  https://help.github.com/en/github/using-git/ignoring-files for detailed instructions and
  several approaches.

Also, if you open the ```authentication.js``` file, you will notice that the file is, by default,
  exporting a string ```'DEMO_KEY'```. This ```'DEMO_KEY'``` **is** a valid, free authentication
  credential that may be used to access the NASA API. However, there are rate limits restricting
  how often you may call the API from a single IP address.

If you would like to apply for your own API credential, do so at https://api.nasa.gov/index.html.
  A developer key is still free and the query limits are much less restrictive!

NOTE: If you exceed your rate limit on either the demo key *or* a developer key, your credential
  will be blocked from making further requests until enough time has elapsed to operate within
  your respective rate limit. For even more detailed information, see the API credential
  documentation at https://api.nasa.gov/index.html.

'DEMO_KEY' rate limits:
- Hourly Limit: 30 requests per IP address per hour
- Daily Limit: 50 requests per IP address per day

Developer key rate limits:
- Hourly Limit: 1,000 requests per hour

All rate limits are calcualted on a rolling basis.

Feel free to test out this application with the supplied ```'DEMO_KEY'```. Just take note of the
  rate limits. And, if you notice that you're exceeding your query allotment, I recommend applying
  for a developer key.

To enable your own authentication key, replace ```'DEMO_KEY'``` in the export statement
  of ```authentiication.js``` with your own authentication key. Ensure sure that you're exporting
  the key as a string value. And, double check that you are properly safeguarding your credential.

**Never push your authentication credentials to GitHub or anywhere else on the internet.**
*/
