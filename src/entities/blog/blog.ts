import { types } from "mobx-state-tree";
import generalAction from "../generalActions";

const Blog = types
  .model("Blog", {
    _id: types.string,
    title: types.string,
    description: types.string,
    subDescription: types.string,
    createdAt: types.string,
  })
  .actions(generalAction)
  .views((self) => ({}));

export default Blog;
