import jerry from './imgs/jerry.webp';
import placeholder from './imgs/placeholder.webp';
import { useState } from 'react';

function App() {


  const posts = [
    {
      id: 1,
      title: 'Titolo del Post',
      image: jerry,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['html', 'css'],
      published: true,
    },
    {
      id: 2,
      title: 'Titolo del Post',
      image: jerry,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['js', 'css'],
      published: true,
    },
    {
      id: 3,
      title: 'Titolo del Post',
      image: placeholder,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['js', 'php'],
      published: true,
    },
    {
      id: 4,
      title: 'Titolo del Post',
      image: placeholder,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
      tags: ['html'],
      published: false,
    },
  ]
  const filterPost = posts.filter((post)=> post.published === true)

  const [post, setPost] =useState([]);
  const [newtitle,setnewTitle] = useState("");
  const addPost =()=>{
    function haddlechange(e){
      e.preventDefault()
    }
    setPost([...post,newtitle]);
  };

  return (
    <>
    <form className='form'>
      <input type="text" value={newtitle} onChange={(e)=>setnewTitle(e.target.value)} />
      <input type="submit" value="add post" className='submit' onClick={addPost} />
    </form>
      <div className='container'>
        <div className='row'>
          {filterPost.map((post)=>(
            <div key={post.id} className='col'>
              <div className='card'>
                <img className='image' src={post.image} />
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>{post.tags.join(" ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default App
