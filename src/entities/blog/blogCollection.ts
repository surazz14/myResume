import { types } from "mobx-state-tree";
import generalAction from "../generalActions";
import Blog from "./blog";
const collection = types
  .model("blogs", {
    blogs: types.optional(types.array(Blog), []),
  })
  .actions(generalAction)
  .actions((self) => ({
    setBlogs(blogs: any) {
      self.blogs = blogs;
    },
  }))
  .views((self) => ({
    getBlogById(id: string) {
      return self.blogs.find((blog: any) => blog._id === id);
    },
  }));

export default collection;
