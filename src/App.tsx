import './App.css'
import avatar from "/public/assets/images/avatar-jessica.jpeg"

function App() {

  return (
    <section className='flex flex-col min-h-screen bg-[--grey-900] '>
      <div className='grow flex flex-col items-center justify-center'>
        <article className='bg-[--grey-800] p-5 flex flex-col  text-center rounded-[--border-corner] '>
          <div className='flex flex-col items-center gap-y-4 my-2'>
            <figure className='card-figure'>
              <img src={avatar} alt="avatar" />
            </figure>
            <div className='flex flex-col gap-y-1'>
              <span className='text-[--white] text-xl'>Jessica Randall</span>
              <span className='text-[--green] text-xs'>London, United Kingdom</span>
            </div>
            <blockquote className='text-[--white] text-xs'>
              <span>"Front-end developer and avid reader."</span>
            </blockquote>
          </div>
          <ul>
            <li className='link'><a href="#">GitHub</a></li>
            <li className='link'><a href="#">Frontend Mentor</a></li>
            <li className='link'><a href="#">LinkedIn</a></li>
            <li className='link'><a href="#">Twitter</a></li>
            <li className='link'><a href="#">Instagram</a></li>
          </ul>
        </article>
      </div>


      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">kvruntime</a>.
      </div>

    </section>
  )
}

export default App
