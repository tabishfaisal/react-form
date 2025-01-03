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
  const [filterPost, setpublishedPost] = useState  (posts.filter((post)=> post.published === true) )

  const [title, setTitle] = useState('')
   
    function addPost(e){
      e.preventDefault()

      const addedPost = {
        id: 23,
        title,
        image: undefined,
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic',
        tags: [],
        published : true
      }
      setpublishedPost([...filterPost, addedPost])
    }

  return (
    <>
      <div className='container'>
        <form onSubmit={addPost} className='form'>
          <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} />
          <input type="submit" value="add post"  />
        </form>
      </div>
      <div className='container'>
        <div className='row'>
          {filterPost.map((post)=>(
            <div key={post.id} className='col'>
              <div className='card'>
                <img className='image'  src={post.image || placeholder} />
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
