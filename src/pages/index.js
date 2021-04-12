import React, { Component } from "react"
import axios from "axios"
import "bulma/css/bulma.min.css"
import "./app.css"
import { Fade, Bounce, Slide } from "react-awesome-reveal"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Typist from "react-typist"
import slugify from "slugify"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Helmet, HelmetProvider } from "react-helmet-async"

class RetrieveList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      persons: [],
    }
  }
  componentDidMount() {
    if (document.getElementById("btnSignUp") != null) {
      document.getElementById("btnSignUp").addEventListener("click", e => {
        const name = document.getElementById("name").value
        /* eslint eqeqeq: 0 */
        if (name == 0) {
          console.log("Empty Title or Message")
          toast.error("🤖 Empty Name", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
          })
          return false
        }
        //const users = encodeURIComponent(name)
        const users = slugify(name, {
          replacement: "-",
          remove: /[*+~.()'"!:@]/g,
          lower: false,
          strict: false,
        })
        window.location.href = "?name=" + users
      })
    }
    const GET_USER = new URL(window.location.href).searchParams.get("name")
    axios.get("https://wishes-five.vercel.app/" + GET_USER).then(res => {
      const wishes = res.data
      toast.success("😊 \n" + wishes[0].content, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      })
      console.log(wishes[0].content)
      this.setState({ isLoading: false, persons: wishes })
    })
  }
  PageToast() {
    toast.dark("📝 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    })
  }

  render() {
    const wishername = this.state.persons.map(person => person.content)
    const pathname = typeof window !== "undefined" ? window.location.href : ""
    const sharetext = encodeURIComponent(
      wishername +
        " Wishing you a தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் " +
        pathname
    )
    const Whatsappshare = `https://api.whatsapp.com/send/?text=${sharetext}`
    const Telegramshare =
      "https://telegram.me/share/url?url=" +
      pathname +
      "&text=" +
      wishername +
      " Wishing you a தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்"

    return (
      <section className="section">
        <HelmetProvider>
          <Helmet>
            <title>{`${
              wishername + " தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💛"
            }`}</title>
            <meta
              name="description"
              content="தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💚 - Tamil New year Wishes and Greetings."
            />
            <meta
              property="og:title"
              content={`${
                wishername + " தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💛"
              }`}
            />
            <meta
              property="og:site_name"
              content={`${
                wishername + " தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💛"
              }`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content="தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💚 - Tamil New year Wishes and Greetings."
            />
            <meta
              property="og:image"
              content="https://wishes.tamilwords.net/tamilwishes-thumb.png"
            />
            <meta
              property="article:publisher"
              content="https://www.facebook.com/tamilsmsblog"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content={`${
                wishername + " தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💛"
              }`}
            />
            <meta
              name="twitter:description"
              content="தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💚 - Tamil New year Wishes and Greetings."
            />
            <meta
              name="twitter:image"
              content="https://wishes.tamilwords.net/tamilwishes-thumb.png"
            />
            <meta name="twitter:site" content="@tamilsmsblog" />
            <link rel="canonical" href={pathname} />
            <meta name="twitter:url" content={pathname} />
            <meta property="og:url" content={pathname} />
            <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "publisher": {
                "@type": "Organization",
                "name": "${wishername} தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்",
                "url": "${pathname}",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://wishes.tamilwords.net/logo.png",
                  "width": 60,
                  "height": 60
                }
              },
              "url": "${pathname}",
              "image": {
                "@type": "ImageObject",
                "url": "https://wishes.tamilwords.net/tamilwishes-thumb.png",
                "width": 1200,
                "height": 630
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${pathname}"
              },
              "description": "தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள் 💚 - Tamil New year Wishes and Greetings."
            }
            `}</script>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-16C4S2MMTJ"
            ></script>
            <script>
              {`
            if(true) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
          
              gtag('config', 'G-16C4S2MMTJ', {
                'page_title' : '${wishername} தமிழ் புத்தாண்டு நல்வாழ்த்துக்கள்',
                'page_location': '${pathname}'
              });

             }
           `}
            </script>
          </Helmet>
        </HelmetProvider>
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-half">
              <Slide triggerOnce>
                <br />
                <h1 className="title is-6 has-text-warning has-text-centered">
                  <Typist
                    avgTypingDelay={40}
                    startDelay={1800}
                    cursor={{ hideWhenDone: true }}
                  >
                    {" "}
                    புத்தாண்டு நல்வாழ்த்துக்கள்{" "}
                    <span role="img" aria-label="Growing Heart">
                      💛
                    </span>
                  </Typist>
                </h1>
                <br />
                <Bounce>
                  <p className="has-text-centered">
                    <span role="img" aria-label="Growing Heart">
                      {this.state.isLoading ? "" : "💚"}
                    </span>{" "}
                    {wishername}{" "}
                    <span role="img" aria-label="Growing Heart">
                      {this.state.isLoading ? "" : "💚"}
                    </span>
                  </p>
                </Bounce>
              </Slide>
              <br />
              <Slide triggerOnce>
                <Fade>
                  <figure className="image is-centered">
                    <img
                      src="./tamil.png"
                      alt="Tamil Wishes"
                      loading="lazy"
                      className="image is-128x128"
                    ></img>
                  </figure>
                </Fade>
              </Slide>
              <br />
              <Slide triggerOnce>
                <div className="notification has-text-weight-bold read-more">
                  <p className="has-text-weight-bold has-text-left">
                    இனிமையான நினைவுகளோடு{" "}
                    <span role="img" aria-label="Growing Heart">
                      💚
                    </span>
                    <br />
                    இந்த ஆண்டை கடப்போம்
                    <br />
                    இனி வரும் காலம் இனிதே
                    <br />
                    உதயமாகட்டும்
                    <br />{" "}
                    <span role="img" aria-label="Growing Heart">
                      புத்தாண்டு நல்வாழ்த்துக்கள் 💗
                    </span>
                  </p>
                </div>
              </Slide>
              <br />
              <br />
              <div className="notification is-warning has-text-weight-bold">
                <br />
                <h3 className="has-text-centered">
                  Create your Own{" "}
                  <span role="img" aria-label="burger">
                    🍔
                  </span>
                </h3>
                <div className="has-text-centered">
                  <small>Enter Your Name</small>
                </div>
                <br />
                <div className="control">
                  <input
                    className="input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <br />
                <button
                  id="btnSignUp"
                  className="button is-link read-random sign-button"
                  type="submit"
                >
                  Create Wishes
                </button>
                <br />
              </div>
              <div className="buttons is-centered">
                <ToastContainer />
                <CopyToClipboard
                  text={pathname}
                  onCopy={() => this.setState({ copied: true })}
                >
                  <button
                    className="button is-danger read-random"
                    onClick={this.PageToast}
                  >
                    <span role="img" aria-label="clipboard">
                      📝 Copy URL
                    </span>
                  </button>
                </CopyToClipboard>
              </div>
              <hr />
              <div className="buttons is-centered">
                <a
                  className="button is-success read-random"
                  href={Whatsappshare}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span role="img" aria-label="burger">
                    🍔 Whatsapp
                  </span>
                </a>
                <a
                  className="button is-info read-random"
                  href={Telegramshare}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <span role="img" aria-label="bot">
                    🤖 Telegram
                  </span>
                </a>
              </div>
              <hr />
              <br />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default RetrieveList
