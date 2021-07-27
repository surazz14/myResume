import Color from './color/color'
import Blog from './blog/blogCollection'

const store = {
  color: Color.create({}),
  blogs: Blog.create({})

};

window.app = store;

export default store;
