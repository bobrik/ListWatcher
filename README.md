## ListWatcher ([official twitter account](http://twitter.com/#!/listwatcher))

Horray! ListWatcher from twitter is open-source now! Fully rewritten in node.js for faster and better work.

### What?

ListWatcher is a twitter bot for sending list membership changes for its followers.
It will notify you about additions, removals from lists, removals of lists, and list renamings.
Don't ever miss that **@your_friend_mike/friends** was to **@your_friend_mike/gay**

### Why?

Just for fun. I rewritten the python version in node.js and it's much faster now.

### How to run

0. Do you really need this?
1. Clone this repo.
2. Rebuild `init` module with `npm rebuild init` from `node_modules` dir.
3. Copy `config.json.sample` to `config.json` and fill your config params.
4. Install node.js (0.6.x is tested and ok).
5. Run your own listwatcher daemon: `node listwatcher.js start`.
6. Follow account you set in `config.json` to receive direct messages.
7. Pretty complex already, but that's it! Enjoy!

### Authors

Ian Babrou (ibobrik@gmail.com)