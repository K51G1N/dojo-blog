import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Keagan', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Jodie', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Justin', id: 3 },
        { title: 'Good News', body: 'lorem ipsum...', author: 'Keagan', id: 4 }

      ]);

      return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" />
        </div>
      )
}
 
export default Home;