import { projectCard } from "./projectCard.js";
import { skills } from "./skills.js";
import { learning } from "./learning.js";

const portfolio = {
  projectCard: projectCard,
  skills: skills,
  learning: learning,
};

portfolio.hoverMenu = () => {
  $(document).on("scroll", () => {
    $("#toggle").prop("checked", false);
  });
};

// SMOOTH SCROLL FUNCTION
portfolio.smoothScroll = () => {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        // GET HEIGHT OF FIXED HEADER TO SET PAGE OFFSET
        const headerHeight = $("nav").height();

        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");

        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - headerHeight,
            },
            1000
          );
        }
      }
    });
};

portfolio.displaySkills = () => {
  const skillsToDisplay = portfolio.skills.map((skill) => {
    if (skill.iconType === "icon") {
      return `
      <li class="skills__skillItem">
         <i class="${skill.icon} skills__icon"></i>
         <p class="skills__skill">${skill.skill}</p>
       </li>
       `;
    } else {
      return `
      <li class="skills__skillItem">
        <div class="skills__logoContainer">
          <img src=${skill.icon} class="skills__logoImage" alt=${skill.alt} />
        </div>
        <p class="skills__skill">${skill.skill}</p>
      </li>`;
    }
  });
  $(".skills__list").append(skillsToDisplay);
};

portfolio.displayLearning = () => {
  const learningToDisplay = portfolio.learning.map((skill) => {
    if (skill.iconType === "icon") {
      return `
      <li class="skills__skillItem">
         <i class="${skill.icon} skills__icon"></i>
         <p class="skills__skill">${skill.skill}</p>
       </li>
       `;
    } else {
      return `
      <li class="skills__skillItem">
        <div class="skills__logoContainer">
          <img src=${skill.icon} class="skills__logoImage" alt=${skill.alt} />
        </div>
        <p class="skills__skill">${skill.skill}</p>
      </li>`;
    }
  });
  $(".skills__list--learning").append(learningToDisplay);
};

portfolio.displayProjectCard = () => {
  const cardToDisplay = projectCard.map((project) => {
    const {
      siteLink,
      projectImage,
      alt,
      title,
      description,
      codeLink,
      techUsed,
    } = project;

    const projectTech = techUsed
      .map((tech) => {
        if (tech.iconType === "icon") {
          return `
        <li class="card__techUsed">
          <i class="${tech.icon} card__icon"></i>
        </li>
        `;
        } else {
          return `
        <li card__techUsed>
          <div class="card__logoContainer">
            <img src=${tech.icon} alt=${tech.alt} />
          </div>
        </li>
        `;
        }
      })
      .join("");

    return `
          <div class="card">
            <div class="card__innerCard innerCardEven">
              <div class="card__projectImageContainer">
                <div class="card__liveSiteButtonContainer">
                  <p class="card__liveSite">Live Site</p>
                  <a href=${siteLink} class="card__siteLink" target="_blank">
                    <div class="card__imageContainer--arrow">
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/arrow-pointing-left--v2.png" class="card__arrow" alt="Arrow pointing to project image" />
                    </div>
                  </a>
                </div>
                <div class="card__imageContainer">
                  <a href=${siteLink} target="_blank">
                    <img src=${projectImage} alt=${alt} class="card__projectImage">
                  </a>
                </div>
              </div>
              <div class="card__writtenContentContainer">
              <div class="card__writtenContent left">
                <h3 class="card__projectTitle">${title}</h3>
                <div class="card__projectUnderline left"></div>
                <p class="card__projectDescription">${description}</p>
              </div>
              <ul class="card__techList">
                ${projectTech}
              </ul>
              <a class="card__code" href=${codeLink} target="_blank">Code</a>
            </div>
            </div>
          </div>
            `;
  });
  $(".cards").append(cardToDisplay);
};

portfolio.init = () => {
  portfolio.hoverMenu();
  portfolio.smoothScroll();
  portfolio.displaySkills();
  portfolio.displayLearning();
  portfolio.displayProjectCard();
};

$(() => {
  portfolio.init();
});
