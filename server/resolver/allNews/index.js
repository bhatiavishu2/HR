const {getAllNews} = require('../../service');

module.exports = {
  Query: {
    // eslint-disable-next-line no-unused-vars
    async allNews(parent, args, ctx, info) {
        const newsItems = await getAllNews();
        return newsItems.data.hits;
    }
  }
};
