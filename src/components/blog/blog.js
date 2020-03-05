import React from "react"
import style from "./blog.module.scss"
import BlogCard from "./blog-card"
import Section from "../section/section"
import focusIndicator from "../../images/blog/focus-indicators.jpg"

class Blog extends React.Component {

  render() {
    return (
      <Section title="Blog" background={true}>
        <div className={style.posts}>
          <BlogCard
            title="Accessible custom focus indicators"
            date={new Date("2019-06-19")}
            link="https://uxdesign.cc/accessible-custom-focus-indicators-da4768d1fb7b?source=friends_link&sk=6cfd4853877b935c7cf6fce80da9afa0"
            image={focusIndicator}
          />
          <BlogCard
            title="Accessible custom focus indicators"
            date={new Date("2019-06-19")}
            link="https://uxdesign.cc/accessible-custom-focus-indicators-da4768d1fb7b?source=friends_link&sk=6cfd4853877b935c7cf6fce80da9afa0"
            image={focusIndicator}
          />
          <BlogCard
            title="Accessible custom focus indicators"
            date={new Date("2019-06-19")}
            link="https://uxdesign.cc/accessible-custom-focus-indicators-da4768d1fb7b?source=friends_link&sk=6cfd4853877b935c7cf6fce80da9afa0"
            image={focusIndicator}
          />
          <BlogCard
            title="Accessible custom focus indicators"
            date={new Date("2019-06-19")}
            link="https://uxdesign.cc/accessible-custom-focus-indicators-da4768d1fb7b?source=friends_link&sk=6cfd4853877b935c7cf6fce80da9afa0"
            image={focusIndicator}
          />
        </div>
        <div><a className={style.link} href="https://medium.com/@andrew_barnes" title="Medium Posts">See all posts</a></div>
      </Section>
    );
  }
}

export default Blog
