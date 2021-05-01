// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![LICENSE](https;//img.shields.io/github.license/${data.git}/${data.repo})

  ## DESCRIPTION 😊

  ${data.descr}

  ![SCREENSHOT](${data.image})

  ## TABLE OF CONTENTS

  * [FEATURES](#features)
  * [USAGE](#usage)
  * [INSTALLATION](#installation)
  * [CONTRIBUTION](#contribution)
  * [TEST](#tests)
  * [QUESTIONS](#questions)
  * [LICENSE](#license)
  * [LINKS](#links)

  ## FEATURES 💥

  ${data.features}

  ## INSTALLATION 🖥️

  ${data.install}

  ## USAGE 📄

  ${data.usage}

  ## CONTRIBUTION



`;
}

module.exports = generateMarkdown;
