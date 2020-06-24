const allNews = require('./allNews');

const resolvers = {
  Query: {
    ...allNews.Query,
  },
};

module.exports = resolvers;
