import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import lupa from '../public/lupa1.png'
import alka from '../public/alka.png'
import men from '../public/men.png'
import pao from '../public/pao.png'
import zu from '../public/zu.png'
import women from '../public/women.png'
import uli from '../public/uli.png'
import narva from '../public/narva.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My BotChat WillMdezGlez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

        <header className='topbar'>
          <div className='logo'><img className='logoimg' src='https://cdn-icons-png.flaticon.com/512/5226/5226034.png' />chatBOT</div>
          <nav>
            <ul className='links'>
              <li><a href='#'>HOME</a></li>
              <li><a href='#'>CHAT</a></li>
              <li><a href='#'>CONTACTS</a></li>
              <li><a href='#'>SETTINGS</a></li>
              <li><a href='#'>FAQS</a></li>
              <li><a href='#'>TERMS OF USE</a></li>

            </ul>

          </nav>
          <div className='search-box'>
            <input className="search-txt" type="text" name="" placeholder="Buscar"></input>
            <a className='search-btn' type="submit"><Image src={lupa} /></a>
          </div>
          <img className='notificaciones' src='https://cdn-icons-png.flaticon.com/512/1827/1827295.png' />
        </header>

        <div className='top'>

          <div className='Full-Box'>
            <div className='Left'>
              <div className='Busqueda'>
                <a className='search-btn2' type="submit"><Image src={lupa} /></a>
                <input className="search-chat-txt" type="text" name="" placeholder="SEARCH"></input>

              </div>
              <div className='chat-list'>

                <ul >
                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                        <a className='imgP' type="submit"><Image className='img' src={zu} /></a>
                        <div>
                          <h3>ZuZury</h3>
                          <p>Cuidate</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>11:30</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={pao} /></a>
                        <div>
                          <h3>Pao</h3>
                          <p><span>Escribiendo...</span></p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>10:12</p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={narva} /></a>
                        <div>
                          <h3>Narva</h3>
                          <p>Hello mate</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>09:12</p>
                        <div className='Num'>1</div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={alka} /></a>
                        <div>
                          <h3>Alka</h3>
                          <p>Vamos el Gym!</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>08:12</p>
                        <div className='Num'>1</div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={men} /></a>                        <div>
                          <h3>Gerardo</h3>
                          <p>Hello mate</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>7:12</p>
                        <div className='Num'>1</div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={uli} /></a>                        <div>
                          <h3>Luis</h3>
                          <p>Bye!</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>05:12</p>
                        <div className='Num'>1</div>
                      </div>
                    </div>
                  </li>


                </ul>

              </div>
              <div className='chat-list2'>
                <ul >
                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={uli} /></a>                        <div>
                          <h3>Gerardo</h3>
                          <p>Hola, como estas?</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>11:12</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={women} /></a>                        <div>
                          <h3>Diana</h3>
                          <p><span>Escribiendo...</span></p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>10:12</p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={men} /></a>                        <div>
                          <h3>Uli</h3>
                          <p>Hello mate</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>06:53</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='friend'>
                      <div className='img_name'>
                      <a className='imgP' type="submit"><Image className='img' src={pao} /></a>                        <div>
                          <h3>Sol</h3>
                          <p>Nos vemos</p>
                        </div>
                      </div>
                      <div className='Time'>
                        <p className='p'>03:12</p>
                      </div>
                    </div>
                  </li>


                </ul>

              </div>

            </div>

            <div className='Rigth'>
              <div className='right-Top2'>

                <div className='Clear'>Clear Chat</div>
                <div className='More'>More</div>
              </div>
              <div className='mid'>
                <div className='Me-Full'>
                  <div className='Me'>Holaaaa ! Como estas???</div>
                </div>

                <div className='U'><div className='Foto'><a className='img' type="submit"><Image className='img' src={zu} /></a>
                  <div>
                    <p>12:23</p>
                  </div></div>
                  <div className='Full-u-Text'>
                    <div className='Text-u'>Holiiiiii muy bien Will</div>
                    <div className='Text-u'>tu como estas??</div>
                  </div>
                </div>

                <div className='Me-Full'>
                  <div className='Me'>Yo muy bien tambien gracias!</div>
                  <div className='Me'>Cuando jugamos el PUBG!, ya hace falta jeje</div>
                </div>


                <div className='U'><div className='Foto'><a className='img' type="submit"><Image className='img' src={zu} /></a>
                  <div>
                    <p>12:23</p>
                  </div></div>
                  <div className='Full-u-Text'>
                    <div className='Text-u'>Que bueno amix</div>
                    <div className='Text-u'>Que te parece el viernes por la noche, ahorita tengo mucho trabajo de la uni</div>
                  </div>
                </div>

                <div className='Me-Full'>
                  <div className='Me'>Va que va, te mando mensaje</div>
                </div>

                <div className='U'><div className='Foto'><a className='img' type="submit"><Image className='img' src={zu} /></a>
                  <div>
                    <p>12:23</p>
                  </div></div>
                  <div className='Full-u-Text'>
                    <div className='Text-u'>Vale</div>
                    <div className='Text-u'>Que estes bien!</div>
                    <div className='Text-u'>Cuidate</div>
                  </div>
                </div>
              </div>
              <div className='btm'>
                <form>
                  <div><img className='send' src='https://cdn-icons-png.flaticon.com/512/158/158420.png' /></div>
                  <input className='in2' type="text" name="" placeholder="Type a messange here"></input>
                  <div className='ico3'><img className='clip' src='https://cdn-icons-png.flaticon.com/512/3233/3233490.png' /></div>
                  <div className='ico4'><img className='send' src='https://cdn-icons-png.flaticon.com/512/786/786205.png' /></div>
                </form>
              </div>
            </div>

          </div>
        </div>


      </main>


    </div>
  )
}
