"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Education List Handler
let eventHanlder = () => {
  // Education
  let Education = () => {
    let educatonList = $$(".education__item"); // Education item element
    let titles = $$(".education__item__title"); // Title Element
    let datas = $$(".euducation__item__data"); // Data element
    let iconWrappers = $$(".education__item__title__icon__wrapper"); // Icon wrapper element
    let plusIcon = $(".education__item__title__icon.plus");
    let minusIcon = $(".education__item__title__icon.minus");
    titles.forEach((educationItem, index) => {
      educationItem.onclick = () => {
        let itemTitle = titles[index];
        let itemData = datas[index];
        let itemIcon = iconWrappers[index];
        itemTitle.classList.toggle("active"); // Change background color and text color
        itemData.classList.toggle("active"); // Show / Hide data when user click
        itemIcon.classList.toggle("active"); // Change shape icon when user click
      };
    });
  };
  // Call function here
  Education();
};

// Set experience timeline bar size
const timelineHeight =
  $$(".timeline__data").length * ($$(".timeline__data")[0].offsetHeight + 10);
const timeLineBarHeight = $(".timeline__wrapper");
timeLineBarHeight.style = `height: ${timelineHeight}px;`;
// Blog content
const blog = {
  blogs: [
    {
      img: "./assets/img/Desc/Blog/1.webp",
      title: "RENOVATING NATIONAL GALLERY",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      img: "./assets/img/Desc/Blog/2.webp",
      title: "Wordpress for beginner",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      img: "./assets/img/Desc/Blog/3.webp",
      title: "Make website from scratch",
      content:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
  ],
  render: function () {
    const posts = $(".posts__wrapper");
    let data = this.blogs.map((blog, index) => {
      return `<!-- Post ${index + 1} -->
            <div class="c-4 gutter m-c-6 s-c-12">
                <div class="post">
                    <a href="#" class="post__img__wrapper">
                        <img src="${blog.img}" alt="" class="post__img">
                    </a>

                    <div class="post__desc">
                        <p class="post__desc__content">April 14,2018</p> &nbsp; | &nbsp;
                        <p class="post__desc__content">Web Design</p> &nbsp; | &nbsp;
                        <span class="post__desc__content post__contact">
                            <i class="far fa-comment post__contact__icon"></i>
                            <p class="post__contact__text">4</p>
                        </span>
                    </div>

                    <div class="post__data">
                        <a href="#" class="post__title">${blog.title}</a>

                        <p class="post__content">
                            ${blog.content}
                        </p>
                    </div>
                </div>
            </div>`;
    });
    posts.innerHTML = data.join("");
  },
};
// Home element
let scrollHandler = () => {
  const menuItem = $$(".subnav");
  const homeDataWrapper = $(".home__data");
  const homeBackground = $(".home");
  const homeTitle = $(".home__title");
  const homeDesc = $(".home__desc");
  const homeBtnContent = $(".home__desc__button");
  // About element
  const aboutHeading = $(".about__heading");
  const aboutBody = $(".about__body");
  const aboutHireBanner = $(".hire__banner");
  // Menu active when user scroll
  window.addEventListener("scroll", () => {
    let verticalPosition = Math.floor(window.scrollY);
    // ======================= Home =======================
    if (verticalPosition >= homePosY && verticalPosition < aboutPosY) {
      $(".subnav.active").classList.remove("active");
      menuItem[0].classList.add("active");
    }
    // ======================= About =======================
    if (verticalPosition >= aboutPosY && verticalPosition < servicesPosY) {
      $(".subnav.active").classList.remove("active");
      menuItem[1].classList.add("active");
    }
    // ======================= Services =======================
    if (verticalPosition >= servicesPosY && verticalPosition < skillPosY) {
      $(".subnav.active").classList.remove("active");
      menuItem[2].classList.add("active");
    }
    // ======================= Skill =======================
    if (verticalPosition >= skillPosY && verticalPosition < educationPosY) {
      $(".subnav.active").classList.remove("active");
      menuItem[3].classList.add("active");
    }
    // ======================= Education =======================
    if (
      verticalPosition >= educationPosY &&
      verticalPosition < experiencePosY
    ) {
      $(".subnav.active").classList.remove("active");
      menuItem[4].classList.add("active");
    }
    // ======================= Experience =======================
    if (verticalPosition >= experiencePosY && verticalPosition < workPosY) {
      $(".subnav.active").classList.remove("active");
      menuItem[5].classList.add("active");
    }
    // ======================= Work =======================
    if (verticalPosition >= workPosY && verticalPosition < 7000) {
      $(".subnav.active").classList.remove("active");
      menuItem[6].classList.add("active");
    }
    // ======================= Blog =======================
    if (verticalPosition >= 7000 && verticalPosition < 7800) {
      $(".subnav.active").classList.remove("active");
      menuItem[7].classList.add("active");
    }
    // ======================= Contact =======================
    if (verticalPosition > 7800) {
      $(".subnav.active").classList.remove("active");
      menuItem[8].classList.add("active");
    }
  });
};
// 0 978 2000 3000 3900 4600 5800 7000 7800
let homeEffect = {
  // Change Background and Data Home Section
  home: {
    ischange: false,
    background: {
      aboutMe: "./assets/img/Desc/Background/1.webp",
      developer: "./assets/img/Desc/Background/2.webp",
    },

    data: {
      aboutMe: {
        title: "Hi! <br> I'm Tuấn",
        desc: '100% html5 bootstrap templates Made by <a href="#" class="home__desc__link">colorlib.com</a>',
        button:
          'Download CV <i class="fas fa-cloud-download-alt home__desc__button__icon"></i>',
      },
      developer: {
        title: "I am <br> Developer",
        desc: '100% html5 bootstrap templates Made by <a href="#" class="home__desc__link">colorlib.com</a>',
        button:
          'View Porfolio <i class="fas fa-suitcase home__desc__button__icon"></i>',
      },
    },
  },
  start: function () {
    setInterval(() => {
      $(".home__data").classList.toggle("isChange"); // Add/remove class to change data
    }, 3000);

    let homeWrapper = $("#home");
    // Render data between aboutMe and Developer
    if ($(".home__data").classList.contains("isChange")) {
      homeWrapper.style = `background-image: url(${this.home.background.aboutMe})`;
      homeWrapper.innerHTML = `
                <div class="home__data">
                    <h1 class="home__title mb-4">
                        ${this.home.data.aboutMe.title}
                    </h1>

                    <p class="home__desc mb-8">
                        ${this.home.data.aboutMe.desc}
                    </p>

                    <a href="" class="home__desc__button">
                        ${this.home.data.aboutMe.button}
                    </a>
                </div>`;
    } else {
      homeWrapper.style = `background-image: url(${this.home.background.developer})`;
      homeWrapper.innerHTML = `
                <div class="home__data">
                    <h1 class="home__title mb-4">
                        ${this.home.data.developer.title}
                    </h1>

                    <p class="home__desc mb-8">
                        ${this.home.data.developer.desc}
                    </p>

                    <a href="" class="home__desc__button">
                        ${this.home.data.developer.button}
                    </a>
                </div>`;
    }

    const myE = $(".home__data");
    gsap.from(myE, {
      // Start point animation
      y: 100,
      opacity: 0,
    });
    gsap.to(myE, {
      // End point animation
      y: 0,
      opacity: 1,
      duration: 1.2,
    });
  },
};
// Scroll Effect Handler
const about = {
  selectors: [
    ".about__heading",
    ".about__title",
    ".about__body",
    ".hire__banner",
    ".services__heading",
    ".services__title",
    ".skill__heading",
    ".skill__title",
    ".skill__desc",
    ".education__heading",
    ".education__title",
    ".education__wrapper",
    ".experience__heading",
    ".experience__title",
    ".work__heading",
    ".work__title",
    ".contact__heading",
    ".contact__title",
  ],
  effectHandler: function () {
    this.selectors.forEach((selector, index) => {
      let setTimeDelay = (index) => {
        // Set time delay for each selector
        let timeDelay;
        switch (index) {
          case 5: // Services title
          case 7: // Skill title
          case 10: // Education title
          case 13: // Experience title
          case 15: // Work title
          case 17: // Contact title
            timeDelay = 200;
            break;
          default:
            timeDelay = 0;
            break;
        }
        return timeDelay;
      };

      ScrollReveal().reveal(selector, {
        delay: setTimeDelay(index),
        distance: "60px",
        origin: "left",
        duration: 2000,
      });
    });
  },
};
about.effectHandler();
const aboutAminateBox = $$(".aminate__box");
aboutAminateBox.forEach((box, index) => {
  switch (index) {
    case 0:
    case 1:
      ScrollReveal().reveal(box, {
        delay: index == 0 ? 0 : 200,
        distance: "40px",
        origin: "right",
        duration: 1500,
      });
      break;

    case 2:
    case 3:
      ScrollReveal().reveal(box, {
        delay: index == 2 ? 400 : 600,
        distance: "40px",
        origin: "bottom",
        duration: 1500,
      });
      break;
  }
});
const servicesAminateBox = $$(".services__box__item");
servicesAminateBox.forEach((box, index) => {
  ScrollReveal().reveal(box, {
    delay: index * 150,
    distance: "40px",
    origin: "bottom",
    duration: 1500,
  });
});
const skillBarsLeft = $$(".skill__left");
const skillBarsRight = $$(".skill__right");

skillBarsLeft.forEach((skillBar, index) => {
  ScrollReveal().reveal(skillBar, {
    delay: index * 200,
    distance: `${(index + 1) * 15}px`,
    origin: "left",
    duration: 2000,
  });
});
skillBarsRight.forEach((skillBar, index) => {
  ScrollReveal().reveal(skillBar, {
    delay: index * 200,
    distance: `${(index + 1) * 15}px`,
    origin: "right",
    duration: 2000,
  });
});
const experienceDataList = $$(".timeline__data");
experienceDataList.forEach((data, index) => {
  let setDirection = (index) => {
    switch (index) {
      case 0:
        return "left";
        break;
      case 1:
        return "right";
        break;
      case 2:
        return "left";
        break;
      case 3:
        return "bottom";
        break;
      case 4:
        return "left";
        break;
    }
  };
  ScrollReveal().reveal(data, {
    delay: index * 200,
    distance: `${(index + 1) * 15}px`,
    origin: setDirection(index),
    duration: 2000,
  });
});
const workDataList = $$(".work__background");
const workBtn = $(".work__button");
workDataList.pointerEvents = "none";
workDataList.forEach((work, index) => {
  if (index % 2) {
    ScrollReveal().reveal(work, {
      delay: index * 200,
      distance: "40px",
      origin: "right",
      duration: 2000,
    });
  } else {
    ScrollReveal().reveal(work, {
      delay: index * 200,
      distance: "40px",
      origin: "left",
      duration: 2000,
    });
  }
});
ScrollReveal().reveal(workBtn, {
  deplay: 1000,
  distance: "40px",
  origin: "bottom",
  duration: 2000,
});

const postList = $$(".post");
postList.forEach((post, index) => {
  ScrollReveal().reveal(post, {
    delay: index * 250,
    distance: "40px",
    origin: index == 1 ? "right" : "left",
    duration: 2000,
  });
});
const postBtn = $(".post__button");

ScrollReveal().reveal(postBtn, {
  delay: 200,
  distance: "40px",
  origin: "bottom",
  duration: 2000,
});
const contactInfo = $$(".contact__item");
contactInfo.forEach((info, index) => {
  ScrollReveal().reveal(info, {
    delay: index * 200,
    distance: "80px",
    origin: "left",
    duration: 2000,
  });
});
const formGroups = $$(".form__group");
formGroups.forEach((form, index) => {
  ScrollReveal().reveal(form, {
    delay: index * 200,
    distance: "80px",
    origin: "right",
    duration: 2000,
  });
});

const formSubmit = $(".form__submit");
ScrollReveal().reveal(formSubmit, {
  delay: 1000,
  distance: "80px",
  origin: "right",
  duration: 2000,
});

// PC screen UI Handler
const informationSection = $(".information");
const informationMtSection = $(".information__mt__col");

// Tablet UI Handler
const informationTab = $(".information");
const informationModal = $(".information__modal");
const toggleBtnInfo = $(".information__toggle__button__wrapper");
const mainPage = $("#description");
const background = $(".background");
const descSection = $(".description");

const tablet = {
  inforTabHanlder: function () {
    // Show information tab when user click
    toggleBtnInfo.onclick = () => {
      informationTab.classList.toggle(
        "active",
        !informationTab.classList.contains("active")
      );

      informationModal.classList.add("active");
    };
  },
  eventHandler: function () {
    window.addEventListener("scroll", () => {
      // Hide information tab when user scroll
      if (informationTab.classList.contains("active")) {
        informationTab.classList.remove("active");
        informationModal.classList.remove("active");
      }
    });

    informationModal.addEventListener("click", () => {
      // Hide information tab when user click modal
      if (informationTab.classList.contains("active")) {
        informationTab.classList.remove("active");
        informationModal.classList.remove("active");
      }
    });
  },
  start: function () {
    this.inforTabHanlder();
    this.eventHandler();
  },
};
tablet.start();
const work = {
  data: [
    {
      id: 1,
      title: "WORK 1",
      subtitle: "Website",
      contact: {
        like: 100,
        view: 100,
      },
      background: 1,
    },
    {
      id: 2,
      title: "WORK 1",
      subtitle: "Website",
      contact: {
        like: 100,
        view: 100,
      },
      background: 2,
    },
    {
      id: 3,
      title: "WORK 1",
      subtitle: "Website",
      contact: {
        like: 100,
        view: 100,
      },
      background: 3,
    },
    {
      id: 4,
      title: "WORK 1",
      subtitle: "Website",
      contact: {
        like: 100,
        view: 100,
      },
      background: 4,
    },
    {
      id: 5,
      title: "WORK 1",
      subtitle: "Website",
      contact: {
        like: 100,
        view: 100,
      },
      background: 5,
    },
    {
      id: 6,
      title: "WORK 1",
      subtitle: "Website",
      contact: {
        like: 100,
        view: 100,
      },
      background: 6,
    },
  ],

  renderBG() {
    const worskWrapper = $(".works");
    let worksHtmls = this.data.map((work, index) => {
      return `<div class="c-6 gutter m-c-12" key=${index} >
                <div style="background-image: url(/assets/img/Desc/Work/${
                  index + 1
                }.webp)" class="work__background">
                    <div class="work__data">
                        <div class="work__data__desc">
                            <h1 class="work__data__title">${work.title}</h1>
                            <h2 class="work__data__subtitle">${
                              work.subtitle
                            }</h2>
                        </div>
                        <ul class="work__react">
                            <li class="work__react__button share__button">
                                <i
                                    class="fas fa-share-alt work__react__button__icon share__button__icon"></i>
                            </li>
                            <li class="work__react__button view__button">
                                <i class="fas fa-eye work__react__button__icon view__button__icon"></i>
                                <p class="work__react__button__text view__button__text">${
                                  work.contact.view
                                }</p>
                            </li>
                            <li class="work__react__button like__button">
                                <i class="fas fa-heart work__react__button__icon like__button__icon"></i>
                                <p class="work__react__button__text like__button__text">${
                                  work.contact.like
                                }</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`;
    });

    worskWrapper.innerHTML = worksHtmls.join("");
  },
};

// =============================== Main function ====================================
const main = (() => {
  // Education
  eventHanlder();
  // Load data to blog post
  blog.render();
  // Section scroll effect
  scrollHandler();
  // Description background effect
  setInterval(() => {
    homeEffect.start();
  }, 4000);
  work.renderBG();
})();
