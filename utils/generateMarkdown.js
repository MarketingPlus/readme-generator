// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![LICENSE](https;//img.shields.io/github.license/${data.git}/${data.repo})

  ## DESCRIPTION 😊

  ${data.descr}

  ![SCREENSHOT](${data.image})

  ## TABLE OF CONTENTS

  * [LINKS](#links)
  * [FEATURES](#features)
  * [USAGE](#usage)
  * [INSTALLATION](#installation)
  * [CONTRIBUTION](#contribution)
  * [TEST](#test)
  * [QUESTIONS](#questions)
  * [LICENSE](#license)
  
  ## LINKS 🔗

  [REPOSITORY](${data.repolink})

  [APPLICATION](${data.applink})

  ## FEATURES 💥

  ${data.features}

  ## INSTALLATION 🖥️

  ${data.install}

  ## USAGE 📄

  ${data.usage}

  ## CONTRIBUTION 🧔

  ${data.contribution}

  ## TEST ⚙️

  ${data.test}

  ## QUESTIONS 📧

  If you have any question and concerns about this application or you would like to report an issue please [send me an email](mailto:${data.email}).

  ## LICENSE 📂

  Copyright (c) ${data.name} & [${data.git}](https://github.com/${data.git}). All rights reserved.
  
  Licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
