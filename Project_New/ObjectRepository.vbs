'Object Repository
'TC_001 Object Repository
'functionality OR used in
Set objusername = Browser("Log in to the site | AMIGO").Page("Log in to the site | AMIGO").WebEdit("username")
Set objPassword = Browser("Log in to the site | AMIGO").Page("Log in to the site | AMIGO").WebEdit("password")
Set objLogin = Browser("Log in to the site | AMIGO").Page("Log in to the site | AMIGO").WebButton("Log in")
Set objLoginPageError = Browser("Log in to the site | AMIGO").Page("Log in to the site | AMIGO").WebElement("Enter your details to")



'TC_002

