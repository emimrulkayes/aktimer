import '../assets/css/timer.css';

function App() {

  return (
    
    <section className='timer-container'> 
      <section className='timer'> 
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>AK Timer</h2>
          <p>Timer to a really special date. One you could or would never amagine.</p>
        </div>
        <div className='timer-box'>
          <section>
            <p>85</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>85</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>85</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>85</p>
            <p><small>Scounds</small></p>
          </section>
        </div>

      </section>
    </section>
  )
}

export default App
