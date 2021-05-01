// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![LICENSE](https://img.shields.io/github.license/${data.git}/${data.repo})

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
  
  <a name="links"></a>
  ## LINKS 🔗

  [REPOSITORY](https://github.com/${data.git}/${data.repo})

  [APPLICATION](https://${data.git}.github.io/${data.repo})

  <a name="features"></a>
  ## FEATURES 💥

  ${data.features}


  <a name="usage"></a>
  ## USAGE 📄

  ${data.usage}

  <a name="installation"></a>
  ## INSTALLATION 🖥️

  ${data.install}

  <a name="contribution"></a>
  ## CONTRIBUTION 🧔

  ${data.contribution}

  <a name="test"></a>
  ## TEST ⚙️

  ${data.test}

  <a name="questions"></a>
  ## QUESTIONS 📧

  If you have any question and concerns about this application or you would like to report an issue please [send me an email](mailto:${data.email}).

  <a name="license"></a>
  ## LICENSE ⚖️

  Copyright (c) ${data.name} & [${data.git}](https://github.com/${data.git}). All rights reserved.
  
  Licensed under the ${data.license} license.

`;
}

module.exports = generateMarkdown;
