const LinksSocialMedia = {
  github: 'MarceloVinicios',
  youtube: 'UC3Z9xi3powtTghD_Lffbcvw',
  facebook: 'vinicius.toic',
  instagram: 'mvnc_',
  twitter: 'Mvnc_'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      UserName.textContent = data.name
      userBio.textContent = data.bio
      userUrl.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
