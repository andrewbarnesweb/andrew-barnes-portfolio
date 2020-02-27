import React from "react"
import style from "./blog.module.scss"
import BlogCard from "./blog-card"
import focusIndicator from "../../images/blog/focus-indicators.jpg"
import VisibilitySensor from 'react-visibility-sensor';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  onChange(isVisible) {
    if (isVisible) {
      this.setState({
        visible: true
      });
    }
  }

  render() {
    return (
      <VisibilitySensor partialVisibility={true} onChange={this.onChange.bind(this)}>
        <div className={this.state.visible ? style.containerVisible : style.container}>
          <div className={style.content}>
            <h2 className={style.title}>Blog</h2>
            <div class={style.posts}>
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
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default Blog
